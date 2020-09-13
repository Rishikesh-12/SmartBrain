"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoiseDelay_1 = require("./NoiseDelay");
var NoiseFactor_1 = require("./NoiseFactor");
var Noise = (function () {
    function Noise() {
        this.delay = new NoiseDelay_1.NoiseDelay();
        this.enable = false;
        this.factor = new NoiseFactor_1.NoiseFactor();
    }
    Noise.prototype.load = function (data) {
        if (data !== undefined) {
            this.delay.load(data.delay);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.factor.load(data.factor);
        }
    };
    return Noise;
}());
exports.Noise = Noise;
