"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = require("../Particles/OptionsColor");
var ColorUtils_1 = require("../../../Utils/ColorUtils");
var PolygonMaskDrawStroke = (function () {
    function PolygonMaskDrawStroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    PolygonMaskDrawStroke.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = ColorUtils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return PolygonMaskDrawStroke;
}());
exports.PolygonMaskDrawStroke = PolygonMaskDrawStroke;
