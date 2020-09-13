"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CircleDrawer = (function () {
    function CircleDrawer() {
    }
    CircleDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    };
    return CircleDrawer;
}());
exports.CircleDrawer = CircleDrawer;
