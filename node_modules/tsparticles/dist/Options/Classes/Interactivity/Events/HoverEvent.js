"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parallax_1 = require("./Parallax");
var HoverEvent = (function () {
    function HoverEvent() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    HoverEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            this.parallax.load(data.parallax);
        }
    };
    return HoverEvent;
}());
exports.HoverEvent = HoverEvent;
