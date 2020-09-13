"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotateAnimation = (function () {
    function RotateAnimation() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    RotateAnimation.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return RotateAnimation;
}());
exports.RotateAnimation = RotateAnimation;
