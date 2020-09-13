"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskMoveType_1 = require("../../../Enums/PolygonMaskMoveType");
var Move = (function () {
    function Move() {
        this.radius = 10;
        this.type = PolygonMaskMoveType_1.PolygonMaskMoveType.path;
    }
    Move.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Move;
}());
exports.Move = Move;
