"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SquareDrawer = (function () {
    function SquareDrawer() {
    }
    SquareDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    };
    return SquareDrawer;
}());
exports.SquareDrawer = SquareDrawer;
