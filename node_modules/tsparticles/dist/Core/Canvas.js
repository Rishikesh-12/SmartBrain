"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../Utils/Constants");
var CanvasUtils_1 = require("../Utils/CanvasUtils");
var ColorUtils_1 = require("../Utils/ColorUtils");
var Canvas = (function () {
    function Canvas(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    Canvas.prototype.init = function () {
        this.resize();
        var container = this.container;
        var options = container.options;
        var cover = options.backgroundMask.cover;
        var color = cover.color;
        var trail = options.particles.move.trail;
        this.coverColor = ColorUtils_1.ColorUtils.colorToRgb(color);
        this.trailFillColor = ColorUtils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    };
    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Constants_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    };
    Canvas.prototype.destroy = function () {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.resize = function () {
        if (this.element) {
            this.element.width = this.size.width;
            this.element.height = this.size.height;
        }
    };
    Canvas.prototype.paint = function () {
        var container = this.container;
        var options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
                this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.coverColor));
            }
            else {
                this.paintBase();
            }
        }
    };
    Canvas.prototype.clear = function () {
        var container = this.container;
        var options = container.options;
        var trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.isPointInPath = function (path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    };
    Canvas.prototype.drawLinkedLine = function (p1, link) {
        var _a;
        var container = this.container;
        var options = container.options;
        var p2 = link.destination;
        var opacity = link.opacity;
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        var twinkle = p1.particlesOptions.twinkle.lines;
        if (twinkle.enable) {
            var twinkleFreq = twinkle.frequency;
            var twinkleColor = typeof twinkle.color === "string" ? { value: twinkle.color } : twinkle.color;
            var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
            var twinkling = Math.random() < twinkleFreq;
            if (twinkling && twinkleRgb !== undefined) {
                colorLine = twinkleRgb;
                opacity = twinkle.opacity;
            }
        }
        if (!colorLine) {
            if (container.particles.lineLinkedColor === Constants_1.Constants.randomColorValue) {
                colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
            }
            else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
                var sourceColor = p1.color;
                var destColor = p2.color;
                colorLine = ColorUtils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
            }
            else {
                colorLine = container.particles.lineLinkedColor;
            }
        }
        var width = (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth;
        CanvasUtils_1.CanvasUtils.drawLinkedLine(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.lineLinked.shadow);
    };
    Canvas.prototype.drawConnectLine = function (p1, p2) {
        var _a;
        var lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        CanvasUtils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : this.container.retina.lineLinkedWidth, lineStyle, pos1, pos2);
    };
    Canvas.prototype.drawGrabLine = function (particle, opacity, mousePos) {
        var _a;
        var container = this.container;
        var optColor = particle.particlesOptions.lineLinked.color;
        var lineColor = container.particles.grabLineColor ||
            (typeof optColor === "string" ? ColorUtils_1.ColorUtils.stringToRgb(optColor) : ColorUtils_1.ColorUtils.colorToRgb(optColor));
        if (lineColor == Constants_1.Constants.randomColorValue) {
            lineColor = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        container.particles.grabLineColor = lineColor;
        var ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        if (container.particles.grabLineColor === Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        else {
            colorLine = container.particles.grabLineColor;
        }
        if (colorLine === undefined) {
            return;
        }
        var beginPos = particle.getPosition();
        CanvasUtils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
    };
    Canvas.prototype.drawParticle = function (particle, delta) {
        var _a, _b, _c;
        var container = this.container;
        var options = container.options;
        var twinkle = particle.particlesOptions.twinkle.particles;
        var twinkleFreq = twinkle.frequency;
        var twinkleColor = typeof twinkle.color === "string" ? { value: twinkle.color } : twinkle.color;
        var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
        var twinkling = twinkle.enable && Math.random() < twinkleFreq;
        var radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
        var opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
        var infectionStage = particle.infectionStage;
        var infection = options.infection;
        var infectionStages = infection.stages;
        var infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
        var infectionRgb = infectionColor ? ColorUtils_1.ColorUtils.colorToRgb(infectionColor) : undefined;
        var color = twinkling && twinkleRgb !== undefined ?
            twinkleRgb : (_c = infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : particle.bubble.color) !== null && _c !== void 0 ? _c : particle.color;
        var colorValue = color !== undefined ? ColorUtils_1.ColorUtils.getStyleFromColor(color, opacity) : undefined;
        if (!this.context || !colorValue) {
            return;
        }
        this.context.save();
        for (var _i = 0, _d = particle.links; _i < _d.length; _i++) {
            var link = _d[_i];
            this.drawLinkedLine(particle, link);
        }
        this.context.restore();
        CanvasUtils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
    };
    Canvas.prototype.drawPlugin = function (plugin, delta) {
        if (!this.context) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
    };
    Canvas.prototype.paintBase = function (baseColor) {
        if (this.context) {
            CanvasUtils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
        }
    };
    Canvas.prototype.lineStyle = function (p1, p2) {
        var container = this.container;
        var options = container.options;
        var connectOptions = options.interactivity.modes.connect;
        if (p1.color && p2.color) {
            if (this.context) {
                return CanvasUtils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.lineLinked.opacity);
            }
        }
    };
    Canvas.prototype.initBackground = function () {
        var container = this.container;
        var options = container.options;
        var background = options.background;
        var element = this.element;
        if (!element) {
            return;
        }
        var elementStyle = element.style;
        if (background.color) {
            var color = ColorUtils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = ColorUtils_1.ColorUtils.getStyleFromColor(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;
