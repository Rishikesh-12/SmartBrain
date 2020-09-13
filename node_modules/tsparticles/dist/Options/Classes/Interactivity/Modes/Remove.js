"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Remove = (function () {
    function Remove() {
        this.quantity = 2;
    }
    Object.defineProperty(Remove.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Remove.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Remove;
}());
exports.Remove = Remove;
