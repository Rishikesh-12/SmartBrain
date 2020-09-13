"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Slow = (function () {
    function Slow() {
        this.factor = 3;
        this.radius = 200;
    }
    Object.defineProperty(Slow.prototype, "active", {
        get: function () {
            return false;
        },
        set: function (_value) {
        },
        enumerable: true,
        configurable: true
    });
    Slow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Slow;
}());
exports.Slow = Slow;
