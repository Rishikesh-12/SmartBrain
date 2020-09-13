"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ShapeBase_1 = require("./ShapeBase");
var PolygonShape = (function (_super) {
    tslib_1.__extends(PolygonShape, _super);
    function PolygonShape() {
        var _this = _super.call(this) || this;
        _this.sides = 5;
        return _this;
    }
    Object.defineProperty(PolygonShape.prototype, "nb_sides", {
        get: function () {
            return this.sides;
        },
        set: function (value) {
            this.sides = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            var sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
            if (sides !== undefined) {
                this.sides = sides;
            }
        }
    };
    return PolygonShape;
}(ShapeBase_1.ShapeBase));
exports.PolygonShape = PolygonShape;
