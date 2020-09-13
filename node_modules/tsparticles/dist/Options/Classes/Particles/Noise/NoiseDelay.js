"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoiseRandom_1 = require("./NoiseRandom");
var NoiseDelay = (function () {
    function NoiseDelay() {
        this.random = new NoiseRandom_1.NoiseRandom();
        this.value = 0;
    }
    NoiseDelay.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            (_a = this.random) === null || _a === void 0 ? void 0 : _a.load(data.random);
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return NoiseDelay;
}());
exports.NoiseDelay = NoiseDelay;
