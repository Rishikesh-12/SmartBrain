"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attract = (function () {
    function Attract() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    Object.defineProperty(Attract.prototype, "rotateX", {
        get: function () {
            return this.rotate.x;
        },
        set: function (value) {
            this.rotate.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attract.prototype, "rotateY", {
        get: function () {
            return this.rotate.y;
        },
        set: function (value) {
            this.rotate.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Attract.prototype.load = function (data) {
        var _a, _b, _c, _d;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
            if (rotateX !== undefined) {
                this.rotate.x = rotateX;
            }
            var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
            if (rotateY !== undefined) {
                this.rotate.y = rotateY;
            }
        }
    };
    return Attract;
}());
exports.Attract = Attract;
