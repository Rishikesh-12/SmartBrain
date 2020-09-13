"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType_1 = require("../../../Enums/PolygonMaskType");
var Draw_1 = require("./Draw");
var Move_1 = require("./Move");
var PolygonInline_1 = require("./PolygonInline");
var PolygonMask = (function () {
    function PolygonMask() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new PolygonInline_1.PolygonInline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = PolygonMaskType_1.PolygonMaskType.none;
        this.url = "";
    }
    Object.defineProperty(PolygonMask.prototype, "inlineArrangement", {
        get: function () {
            return this.inline.arrangement;
        },
        set: function (value) {
            this.inline.arrangement = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonMask.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== PolygonMaskType_1.PolygonMaskType.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;
