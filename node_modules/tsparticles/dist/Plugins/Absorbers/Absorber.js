"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = require("../../Utils/ColorUtils");
var Utils_1 = require("../../Utils/Utils");
var Absorber = (function () {
    function Absorber(absorbers, options, position) {
        var _a, _b;
        this.absorbers = absorbers;
        this.container = absorbers.container;
        this.initialPosition = position;
        this.options = options;
        var container = this.container;
        var size = options.size.value * container.retina.pixelRatio;
        var random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
        var minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
        if (random) {
            size = Utils_1.Utils.randomInRange(minSize, size);
        }
        this.opacity = this.options.opacity;
        this.size = size * container.retina.pixelRatio;
        this.mass = this.size * options.size.density;
        var limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio : limit;
        var color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = ColorUtils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    }
    Absorber.prototype.attract = function (particle, _delta) {
        var pos = particle.getPosition();
        var dx = this.position.x - pos.x;
        var dy = this.position.y - pos.y;
        var distance = Math.sqrt(Math.abs(dx * dx + dy * dy));
        var angle = Math.atan2(dx, dy) * (180 / Math.PI);
        var acceleration = this.mass / Math.pow(distance, 2);
        if (distance < this.size + particle.size.value) {
            var sizeFactor = particle.size.value * 0.033;
            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
                particle.destroyed = true;
            }
            else {
                particle.size.value -= sizeFactor;
                particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
                particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density;
        }
        else {
            particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
            particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
        }
    };
    Absorber.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
            initialPosition :
            this.calcPosition();
    };
    Absorber.prototype.draw = function (context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromColor(this.color, this.opacity);
        context.fill();
    };
    Absorber.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.options.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.size.width,
            y: percentPosition.y / 100 * container.canvas.size.height,
        };
    };
    return Absorber;
}());
exports.Absorber = Absorber;
