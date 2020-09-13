"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Push = (function () {
    function Push() {
        this.quantity = 4;
    }
    Object.defineProperty(Push.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Push.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Push;
}());
exports.Push = Push;
