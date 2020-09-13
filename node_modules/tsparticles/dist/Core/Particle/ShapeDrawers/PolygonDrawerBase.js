"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase = (function () {
    function PolygonDrawerBase() {
    }
    PolygonDrawerBase.prototype.draw = function (context, particle, radius, _opacity) {
        var start = this.getCenter(particle, radius);
        var side = this.getSidesData(particle, radius);
        var sideCount = side.count.numerator * side.count.denominator;
        var decimalSides = side.count.numerator / side.count.denominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    };
    return PolygonDrawerBase;
}());
exports.PolygonDrawerBase = PolygonDrawerBase;
