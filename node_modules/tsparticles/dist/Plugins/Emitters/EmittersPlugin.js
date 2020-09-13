"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../../Utils/Utils");
var ClickMode_1 = require("../../Enums/Modes/ClickMode");
var Emitters_1 = require("./Emitters");
var EmittersPlugin = (function () {
    function EmittersPlugin() {
        this.id = "emitters";
    }
    EmittersPlugin.prototype.getPlugin = function (container) {
        return new Emitters_1.Emitters(container);
    };
    EmittersPlugin.prototype.needsPlugin = function (container) {
        var options = container.options;
        var emitters = options.emitters;
        var loadEmitters = false;
        if (emitters instanceof Array) {
            if (emitters.length) {
                loadEmitters = true;
            }
        }
        else if (emitters !== undefined) {
            loadEmitters = true;
        }
        else if (Utils_1.Utils.isInArray(ClickMode_1.ClickMode.absorber, options.interactivity.events.onClick.mode)) {
            loadEmitters = true;
        }
        return loadEmitters;
    };
    return EmittersPlugin;
}());
exports.EmittersPlugin = EmittersPlugin;
