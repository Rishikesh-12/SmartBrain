"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ShapeBase_1 = require("./ShapeBase");
var CharacterShape = (function (_super) {
    tslib_1.__extends(CharacterShape, _super);
    function CharacterShape() {
        var _this = _super.call(this) || this;
        _this.font = "Verdana";
        _this.style = "";
        _this.value = "*";
        _this.weight = "400";
        return _this;
    }
    CharacterShape.prototype.load = function (data) {
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.font !== undefined) {
                this.font = data.font;
            }
            if (data.style !== undefined) {
                this.style = data.style;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.weight !== undefined) {
                this.weight = data.weight;
            }
        }
    };
    return CharacterShape;
}(ShapeBase_1.ShapeBase));
exports.CharacterShape = CharacterShape;
