"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ShapeBase_1 = require("./ShapeBase");
var ImageShape = (function (_super) {
    tslib_1.__extends(ImageShape, _super);
    function ImageShape() {
        var _this = _super.call(this) || this;
        _this.height = 100;
        _this.replaceColor = false;
        _this.src = "";
        _this.width = 100;
        return _this;
    }
    Object.defineProperty(ImageShape.prototype, "replace_color", {
        get: function () {
            return this.replaceColor;
        },
        set: function (value) {
            this.replaceColor = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.height !== undefined) {
                this.height = data.height;
            }
            var replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;
            if (replaceColor !== undefined) {
                this.replaceColor = replaceColor;
            }
            if (data.src !== undefined) {
                this.src = data.src;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return ImageShape;
}(ShapeBase_1.ShapeBase));
exports.ImageShape = ImageShape;
