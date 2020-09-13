"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = require("./OptionsColor");
var Trail = (function () {
    function Trail() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
    }
    Trail.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
            if (data.length !== undefined) {
                this.length = data.length;
            }
        }
    };
    return Trail;
}());
exports.Trail = Trail;
