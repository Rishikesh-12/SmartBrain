"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmitterRate = (function () {
    function EmitterRate() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    EmitterRate.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.quantity !== undefined) {
                this.quantity = data.quantity;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
        }
    };
    return EmitterRate;
}());
exports.EmitterRate = EmitterRate;
