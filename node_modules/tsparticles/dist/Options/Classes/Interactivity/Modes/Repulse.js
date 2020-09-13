"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repulse = (function () {
    function Repulse() {
        this.distance = 200;
        this.duration = 0.4;
        this.speed = 1;
    }
    Repulse.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
        }
    };
    return Repulse;
}());
exports.Repulse = Repulse;
