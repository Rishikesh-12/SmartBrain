"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parallax = (function () {
    function Parallax() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    Parallax.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.force !== undefined) {
                this.force = data.force;
            }
            if (data.smooth !== undefined) {
                this.smooth = data.smooth;
            }
        }
    };
    return Parallax;
}());
exports.Parallax = Parallax;
