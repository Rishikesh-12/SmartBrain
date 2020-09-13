"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMask_1 = require("./PolygonMask");
var PolygonMaskPlugin = (function () {
    function PolygonMaskPlugin() {
        this.id = "polygonMask";
    }
    PolygonMaskPlugin.prototype.getPlugin = function (container) {
        return new PolygonMask_1.PolygonMask(container);
    };
    PolygonMaskPlugin.prototype.needsPlugin = function (container) {
        var options = container.options;
        return options.polygon.enable;
    };
    return PolygonMaskPlugin;
}());
exports.PolygonMaskPlugin = PolygonMaskPlugin;
