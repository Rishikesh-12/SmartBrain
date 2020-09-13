"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CollisionMode_1 = require("../../../Enums/CollisionMode");
var Collisions = (function () {
    function Collisions() {
        this.enable = false;
        this.mode = CollisionMode_1.CollisionMode.bounce;
    }
    Collisions.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return Collisions;
}());
exports.Collisions = Collisions;
