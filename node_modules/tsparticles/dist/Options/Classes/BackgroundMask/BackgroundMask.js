"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundMaskCover_1 = require("./BackgroundMaskCover");
var BackgroundMask = (function () {
    function BackgroundMask() {
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    BackgroundMask.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                var cover = data.cover;
                var color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
                this.cover.load(cover.color !== undefined ? cover : { color: color });
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return BackgroundMask;
}());
exports.BackgroundMask = BackgroundMask;
