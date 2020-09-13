"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plugins = (function () {
    function Plugins() {
    }
    Plugins.getPlugin = function (plugin) {
        return this.plugins.filter(function (t) { return t.id === plugin; })[0];
    };
    Plugins.addPlugin = function (plugin) {
        if (!this.getPlugin(plugin.id)) {
            this.plugins.push(plugin);
        }
    };
    Plugins.getAvailablePlugins = function (container) {
        var res = {};
        var availablePlugins = this.plugins.filter(function (t) { return t.needsPlugin(container); });
        for (var _i = 0, availablePlugins_1 = availablePlugins; _i < availablePlugins_1.length; _i++) {
            var plugin = availablePlugins_1[_i];
            res[plugin.id] = plugin.getPlugin(container);
        }
        return res;
    };
    Plugins.getPreset = function (preset) {
        return this.presets[preset];
    };
    Plugins.addPreset = function (presetKey, options) {
        if (!this.getPreset(presetKey)) {
            this.presets[presetKey] = options;
        }
    };
    Plugins.addShapeDrawer = function (type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    };
    Plugins.getShapeDrawer = function (type) {
        return this.drawers[type];
    };
    Plugins.getSupportedShapes = function () {
        return Object.keys(this.drawers);
    };
    Plugins.plugins = [];
    Plugins.presets = {};
    Plugins.drawers = {};
    return Plugins;
}());
exports.Plugins = Plugins;
