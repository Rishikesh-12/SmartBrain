"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoiseValue_1 = require("./NoiseValue");
var NoiseFactor = (function () {
    function NoiseFactor() {
        this.horizontal = new NoiseValue_1.NoiseValue();
        this.horizontal.value = 50;
        this.horizontal.offset = 0;
        this.vertical = new NoiseValue_1.NoiseValue();
        this.vertical.value = 10;
        this.vertical.offset = 40000;
    }
    NoiseFactor.prototype.load = function (data) {
        if (data !== undefined) {
            this.horizontal.load(data.horizontal);
            this.vertical.load(data.vertical);
        }
    };
    return NoiseFactor;
}());
exports.NoiseFactor = NoiseFactor;
