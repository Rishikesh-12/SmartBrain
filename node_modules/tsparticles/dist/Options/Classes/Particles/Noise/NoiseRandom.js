"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoiseRandom = (function () {
    function NoiseRandom() {
        this.enable = false;
        this.minimumValue = 0;
    }
    NoiseRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return NoiseRandom;
}());
exports.NoiseRandom = NoiseRandom;
