"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskDrawStroke_1 = require("./PolygonMaskDrawStroke");
var OptionsColor_1 = require("../Particles/OptionsColor");
var Draw = (function () {
    function Draw() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke_1.PolygonMaskDrawStroke();
    }
    Object.defineProperty(Draw.prototype, "lineWidth", {
        get: function () {
            return this.stroke.width;
        },
        set: function (value) {
            this.stroke.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draw.prototype, "lineColor", {
        get: function () {
            return this.stroke.color;
        },
        set: function (value) {
            this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
        },
        enumerable: true,
        configurable: true
    });
    Draw.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth,
            };
            this.stroke.load(stroke);
        }
    };
    return Draw;
}());
exports.Draw = Draw;
