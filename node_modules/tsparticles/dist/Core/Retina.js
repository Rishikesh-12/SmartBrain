"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Retina = (function () {
    function Retina(container) {
        this.container = container;
        this.isRetina = false;
        this.bubbleModeDistance = 0;
        this.bubbleModeSize = 0;
        this.connectModeDistance = 0;
        this.connectModeRadius = 0;
        this.grabModeDistance = 0;
        this.repulseModeDistance = 0;
        this.slowModeRadius = 0;
        this.lineLinkedDistance = 0;
        this.lineLinkedWidth = 0;
        this.moveSpeed = 0;
        this.sizeValue = 0;
        this.sizeAnimationSpeed = 0;
        this.polygonMaskMoveRadius = 0;
        this.pixelRatio = 1;
    }
    Retina.prototype.init = function () {
        var _a;
        var container = this.container;
        var options = container.options;
        if (options.detectRetina && window.devicePixelRatio > 1) {
            this.pixelRatio = window.devicePixelRatio;
            this.isRetina = true;
        }
        else {
            this.pixelRatio = 1;
            this.isRetina = false;
        }
        var ratio = this.pixelRatio;
        if (container.canvas.element) {
            var element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        var particles = options.particles;
        this.lineLinkedDistance = particles.lineLinked.distance * ratio;
        this.lineLinkedWidth = particles.lineLinked.width * ratio;
        this.moveSpeed = particles.move.speed * ratio;
        this.sizeValue = particles.size.value * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        var interactivity = options.interactivity;
        this.connectModeDistance = interactivity.modes.connect.distance * ratio;
        this.connectModeRadius = interactivity.modes.connect.radius * ratio;
        this.grabModeDistance = interactivity.modes.grab.distance * ratio;
        this.repulseModeDistance = interactivity.modes.repulse.distance * ratio;
        this.slowModeRadius = interactivity.modes.slow.radius * ratio;
        this.bubbleModeDistance = interactivity.modes.bubble.distance * ratio;
        this.bubbleModeSize = (_a = interactivity.modes.bubble.size) !== null && _a !== void 0 ? _a : this.sizeValue * ratio;
        this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
    };
    Retina.prototype.initParticle = function (particle) {
        var particlesOptions = particle.particlesOptions;
        var ratio = this.pixelRatio;
        particle.lineLinkedDistance = particlesOptions.lineLinked.distance * ratio;
        particle.lineLinkedWidth = particlesOptions.lineLinked.width * ratio;
        particle.moveSpeed = particlesOptions.move.speed * ratio;
        particle.sizeValue = particlesOptions.size.value * ratio;
        if (typeof particlesOptions.size.random !== "boolean") {
            particle.randomMinimumSize = particlesOptions.size.random.minimumValue;
        }
        particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
    };
    Retina.prototype.reset = function () {
    };
    return Retina;
}());
exports.Retina = Retina;
