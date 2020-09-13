"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskInlineArrangement_1 = require("../../../Enums/PolygonMaskInlineArrangement");
var PolygonInline = (function () {
    function PolygonInline() {
        this.arrangement = PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint;
    }
    PolygonInline.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    };
    return PolygonInline;
}());
exports.PolygonInline = PolygonInline;
