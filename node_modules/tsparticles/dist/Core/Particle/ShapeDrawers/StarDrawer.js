"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PolygonDrawerBase_1 = require("./PolygonDrawerBase");
var StarDrawer = (function (_super) {
    tslib_1.__extends(StarDrawer, _super);
    function StarDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarDrawer.prototype.getSidesData = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            count: {
                denominator: 2,
                numerator: sides,
            },
            length: radius * 2 * 2.66 / (sides / 3),
        };
    };
    StarDrawer.prototype.getCenter = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            x: -radius * 2 / (sides / 4),
            y: -radius / (2 * 2.66 / 3.5),
        };
    };
    return StarDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.StarDrawer = StarDrawer;
