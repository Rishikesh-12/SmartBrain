"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked = (function () {
    function GrabLineLinked() {
        this.opacity = 1;
    }
    GrabLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return GrabLineLinked;
}());
exports.GrabLineLinked = GrabLineLinked;
