"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Density_1 = require("./Density");
var ParticlesNumber = (function () {
    function ParticlesNumber() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    Object.defineProperty(ParticlesNumber.prototype, "max", {
        get: function () {
            return this.limit;
        },
        set: function (value) {
            this.limit = value;
        },
        enumerable: true,
        configurable: true
    });
    ParticlesNumber.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.density.load(data.density);
            var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
            if (limit !== undefined) {
                this.limit = limit;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return ParticlesNumber;
}());
exports.ParticlesNumber = ParticlesNumber;
