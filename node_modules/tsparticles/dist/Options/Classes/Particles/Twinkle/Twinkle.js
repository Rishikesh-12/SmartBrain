"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TwinkleValues_1 = require("./TwinkleValues");
var Twinkle = (function () {
    function Twinkle() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    Twinkle.prototype.load = function (data) {
        if (data !== undefined) {
            this.lines.load(data.lines);
            this.particles.load(data.particles);
        }
    };
    return Twinkle;
}());
exports.Twinkle = Twinkle;
