"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = require("../Particles/OptionsColor");
var BackgroundMaskCover = (function () {
    function BackgroundMaskCover() {
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
    }
    BackgroundMaskCover.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return BackgroundMaskCover;
}());
exports.BackgroundMaskCover = BackgroundMaskCover;
