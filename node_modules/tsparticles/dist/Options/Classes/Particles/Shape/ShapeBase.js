"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeBase = (function () {
    function ShapeBase() {
        this.fill = true;
        this.close = true;
    }
    ShapeBase.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.particles !== undefined) {
                this.particles = data.particles;
            }
        }
    };
    return ShapeBase;
}());
exports.ShapeBase = ShapeBase;
