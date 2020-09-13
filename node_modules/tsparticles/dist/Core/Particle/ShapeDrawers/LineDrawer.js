"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LineDrawer = (function () {
    function LineDrawer() {
    }
    LineDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    };
    return LineDrawer;
}());
exports.LineDrawer = LineDrawer;
