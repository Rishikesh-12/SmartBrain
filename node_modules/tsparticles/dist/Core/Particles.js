"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = require("./Particle");
var InteractionManager_1 = require("./Particle/Interactions/Particles/InteractionManager");
var Utils_1 = require("../Utils/Utils");
var HoverMode_1 = require("../Enums/Modes/HoverMode");
var Grabber_1 = require("./Particle/Interactions/Mouse/Grabber");
var ClickMode_1 = require("../Enums/Modes/ClickMode");
var Repulser_1 = require("./Particle/Interactions/Mouse/Repulser");
var DivMode_1 = require("../Enums/Modes/DivMode");
var Bubbler_1 = require("./Particle/Interactions/Mouse/Bubbler");
var Connector_1 = require("./Particle/Interactions/Mouse/Connector");
var QuadTree_1 = require("../Utils/QuadTree");
var DestroyType_1 = require("../Enums/DestroyType");
var Point_1 = require("../Utils/Point");
var Rectangle_1 = require("../Utils/Rectangle");
var Particles = (function () {
    function Particles(container) {
        this.container = container;
        this.array = [];
        this.interactionsEnabled = false;
        var canvasSize = this.container.canvas.size;
        this.noiseZ = 0;
        this.quadTree = new QuadTree_1.QuadTree(new Rectangle_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
    }
    Object.defineProperty(Particles.prototype, "count", {
        get: function () {
            return this.array.length;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        var handled = false;
        this.noiseZ = 0;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            for (var i = this.count; i < options.particles.number.value; i++) {
                this.addParticle(new Particle_1.Particle(container));
            }
        }
        this.interactionsEnabled = options.particles.lineLinked.enable ||
            options.particles.move.attract.enable ||
            options.particles.collisions.enable ||
            options.infection.enable;
        if (options.infection.enable) {
            for (var i = 0; i < options.infection.infections; i++) {
                var notInfected = this.array.filter(function (p) { return p.infectionStage === undefined; });
                var infected = Utils_1.Utils.itemFromArray(notInfected);
                infected.startInfection(0);
            }
        }
    };
    Particles.prototype.redraw = function () {
        this.clear();
        this.init();
        this.draw(0);
    };
    Particles.prototype.removeAt = function (index, quantity) {
        if (index >= 0 && index <= this.count) {
            for (var _i = 0, _a = this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1); _i < _a.length; _i++) {
                var particle = _a[_i];
                particle.destroy();
            }
        }
    };
    Particles.prototype.remove = function (particle) {
        this.removeAt(this.array.indexOf(particle));
    };
    Particles.prototype.update = function (delta) {
        var container = this.container;
        var options = container.options;
        var particlesToDelete = [];
        for (var i = 0; i < this.count; i++) {
            var particle = this.array[i];
            Bubbler_1.Bubbler.reset(particle);
            for (var id in container.plugins) {
                var plugin = container.plugins[id];
                if (particle.destroyed) {
                    break;
                }
                if (plugin.particleUpdate) {
                    plugin.particleUpdate(particle, delta);
                }
            }
            if (!particle.destroyed) {
                var sizeOpt = particle.particlesOptions.size;
                var sizeAnim = sizeOpt.animation;
                if (sizeAnim.enable) {
                    switch (sizeAnim.destroy) {
                        case DestroyType_1.DestroyType.max:
                            if (particle.size.value >= sizeOpt.value * container.retina.pixelRatio) {
                                particle.destroyed = true;
                            }
                            break;
                        case DestroyType_1.DestroyType.min:
                            if (particle.size.value <= sizeAnim.minimumValue * container.retina.pixelRatio) {
                                particle.destroyed = true;
                            }
                            break;
                    }
                }
            }
            if (particle.destroyed) {
                particlesToDelete.push(particle);
                continue;
            }
            particle.update(i, delta);
            var pos = particle.getPosition();
            container.particles.quadTree.insert(new Point_1.Point(pos.x, pos.y, particle));
        }
        for (var _i = 0, particlesToDelete_1 = particlesToDelete; _i < particlesToDelete_1.length; _i++) {
            var particle = particlesToDelete_1[_i];
            this.remove(particle);
        }
        if (container.options.interactivity.events.onDiv.enable ||
            (container.options.interactivity.events.onHover.enable && container.interactivity.mouse.position) ||
            (container.options.interactivity.events.onClick.enable && container.interactivity.mouse.clickPosition)) {
            var hoverMode = options.interactivity.events.onHover.mode;
            var clickMode = options.interactivity.events.onClick.mode;
            var divMode = options.interactivity.events.onDiv.mode;
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.grab, hoverMode)) {
                Grabber_1.Grabber.grab(container, delta);
            }
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode) ||
                Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode) ||
                Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
                Repulser_1.Repulser.repulse(container, delta);
            }
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
                Bubbler_1.Bubbler.bubble(container, delta);
            }
            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.connect, hoverMode)) {
                Connector_1.Connector.connect(container, delta);
            }
        }
        for (var _a = 0, _b = this.array; _a < _b.length; _a++) {
            var particle = _b[_a];
            if (this.interactionsEnabled) {
                InteractionManager_1.InteractionManager.interact(particle, container, delta);
            }
        }
    };
    Particles.prototype.draw = function (delta) {
        var container = this.container;
        container.canvas.clear();
        var canvasSize = this.container.canvas.size;
        this.quadTree = new QuadTree_1.QuadTree(new Rectangle_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
        this.update(delta);
        this.noiseZ += 0.0004;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            container.canvas.drawPlugin(plugin, delta);
        }
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var p = _a[_i];
            p.draw(delta);
        }
    };
    Particles.prototype.clear = function () {
        this.array = [];
    };
    Particles.prototype.push = function (nb, mousePosition) {
        var _a;
        var container = this.container;
        var options = container.options;
        var limit = options.particles.number.limit * container.density;
        this.pushing = true;
        if (limit > 0) {
            var countToRemove = this.count + nb - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        var pos;
        if (mousePosition) {
            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        }
        for (var i = 0; i < nb; i++) {
            this.addParticle(new Particle_1.Particle(container, pos));
        }
        if (!options.particles.move.enable) {
            this.container.play();
        }
        this.pushing = false;
    };
    Particles.prototype.addParticle = function (particle) {
        this.array.push(particle);
    };
    Particles.prototype.removeQuantity = function (quantity) {
        var container = this.container;
        var options = container.options;
        this.removeAt(0, quantity);
        if (!options.particles.move.enable) {
            this.container.play();
        }
    };
    return Particles;
}());
exports.Particles = Particles;
