"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoiseValue = (function () {
    function NoiseValue() {
        this.value = 1;
        this.offset = 0;
    }
    NoiseValue.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value === 0 ? this.value : data.value;
            }
            if (data.offset !== undefined) {
                this.offset = data.offset;
            }
        }
    };
    return NoiseValue;
}());
exports.NoiseValue = NoiseValue;
