"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Absorbers_1 = require("./Absorbers");
var Utils_1 = require("../../Utils/Utils");
var ClickMode_1 = require("../../Enums/Modes/ClickMode");
var AbsorbersPlugin = (function () {
    function AbsorbersPlugin() {
        this.id = "absorbers";
    }
    AbsorbersPlugin.prototype.getPlugin = function (container) {
        return new Absorbers_1.Absorbers(container);
    };
    AbsorbersPlugin.prototype.needsPlugin = function (container) {
        var options = container.options;
        var absorbers = options.absorbers;
        var loadAbsorbers = false;
        if (absorbers instanceof Array) {
            if (absorbers.length) {
                loadAbsorbers = true;
            }
        }
        else if (absorbers !== undefined) {
            loadAbsorbers = true;
        }
        else if (Utils_1.Utils.isInArray(ClickMode_1.ClickMode.absorber, options.interactivity.events.onClick.mode)) {
            loadAbsorbers = true;
        }
        return loadAbsorbers;
    };
    return AbsorbersPlugin;
}());
exports.AbsorbersPlugin = AbsorbersPlugin;
