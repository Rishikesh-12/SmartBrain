"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = require("../../Core/Particle");
var Utils_1 = require("../../Utils/Utils");
var SizeMode_1 = require("../../Enums/SizeMode");
var EmitterSize_1 = require("../../Options/Classes/Emitters/EmitterSize");
var Emitter = (function () {
    function Emitter(emitters, emitterOptions, position) {
        var _a, _b, _c;
        this.emitters = emitters;
        this.container = emitters.container;
        this.initialPosition = position;
        this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
        var particlesOptions = Utils_1.Utils.deepExtend({}, this.emitterOptions.particles);
        if (particlesOptions === undefined) {
            particlesOptions = {};
        }
        if (particlesOptions.move === undefined) {
            particlesOptions.move = {};
        }
        if (particlesOptions.move.direction === undefined) {
            particlesOptions.move.direction = this.emitterOptions.direction;
        }
        this.particlesOptions = particlesOptions;
        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : (function () {
            var size = new EmitterSize_1.EmitterSize();
            size.load({
                height: 0,
                width: 0,
                mode: SizeMode_1.SizeMode.percent,
            });
            return size;
        })();
        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
        this.play();
    }
    Emitter.prototype.play = function () {
        var _this = this;
        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
            if (this.startInterval === undefined) {
                this.startInterval = window.setInterval(function () {
                    _this.emit();
                }, 1000 * this.emitterOptions.rate.delay);
            }
            if (this.lifeCount > 0) {
                this.prepareToDie();
            }
        }
    };
    Emitter.prototype.pause = function () {
        var interval = this.startInterval;
        if (interval !== undefined) {
            clearInterval(interval);
            delete this.startInterval;
        }
    };
    Emitter.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
            initialPosition :
            this.calcPosition();
    };
    Emitter.prototype.prepareToDie = function () {
        var _this = this;
        var _a;
        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
            window.setTimeout(function () {
                var _a;
                _this.pause();
                _this.lifeCount--;
                if (_this.lifeCount > 0) {
                    _this.position = _this.calcPosition();
                    window.setTimeout(function () {
                        _this.play();
                    }, (_a = _this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    _this.destroy();
                }
            }, this.emitterOptions.life.duration * 1000);
        }
    };
    Emitter.prototype.destroy = function () {
        this.emitters.removeEmitter(this);
    };
    Emitter.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.size.width,
            y: percentPosition.y / 100 * container.canvas.size.height,
        };
    };
    Emitter.prototype.emit = function () {
        var container = this.container;
        var position = this.position;
        var offset = {
            x: this.size.mode === SizeMode_1.SizeMode.percent ?
                container.canvas.size.width * this.size.width / 100 :
                this.size.width,
            y: this.size.mode === SizeMode_1.SizeMode.percent ?
                container.canvas.size.height * this.size.height / 100 :
                this.size.height,
        };
        for (var i = 0; i < this.emitterOptions.rate.quantity; i++) {
            var particle = new Particle_1.Particle(container, {
                x: position.x + offset.x * (Math.random() - 0.5),
                y: position.y + offset.y * (Math.random() - 0.5),
            }, this.particlesOptions);
            container.particles.addParticle(particle);
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;
