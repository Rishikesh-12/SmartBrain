"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpacityRandom = (function () {
    function OpacityRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    OpacityRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return OpacityRandom;
}());
exports.OpacityRandom = OpacityRandom;
