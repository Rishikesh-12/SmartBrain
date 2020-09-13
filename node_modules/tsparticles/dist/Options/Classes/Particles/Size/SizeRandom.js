"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SizeRandom = (function () {
    function SizeRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    SizeRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return SizeRandom;
}());
exports.SizeRandom = SizeRandom;
