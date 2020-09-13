"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Density = (function () {
    function Density() {
        this.enable = false;
        this.area = 800;
        this.factor = 1000;
    }
    Object.defineProperty(Density.prototype, "value_area", {
        get: function () {
            return this.area;
        },
        set: function (value) {
            this.area = value;
        },
        enumerable: true,
        configurable: true
    });
    Density.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
            if (area !== undefined) {
                this.area = area;
            }
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
        }
    };
    return Density;
}());
exports.Density = Density;
