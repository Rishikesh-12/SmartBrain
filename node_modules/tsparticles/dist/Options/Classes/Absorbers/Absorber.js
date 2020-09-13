"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberSize_1 = require("./AbsorberSize");
var OptionsColor_1 = require("../Particles/OptionsColor");
var Absorber = (function () {
    function Absorber() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.opacity = 1;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    Absorber.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
            if (data.size !== undefined) {
                this.size.load(data.size);
            }
        }
    };
    return Absorber;
}());
exports.Absorber = Absorber;
