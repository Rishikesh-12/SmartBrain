"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor = (function () {
    function OptionsColor() {
        this.value = "#fff";
    }
    OptionsColor.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    OptionsColor.create = function (source, data) {
        var color = source !== null && source !== void 0 ? source : new OptionsColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    };
    return OptionsColor;
}());
exports.OptionsColor = OptionsColor;
