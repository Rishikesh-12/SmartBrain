"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InteractivityDetect_1 = require("../../../Enums/InteractivityDetect");
var Events_1 = require("./Events/Events");
var Modes_1 = require("./Modes/Modes");
var HoverMode_1 = require("../../../Enums/Modes/HoverMode");
var Interactivity = (function () {
    function Interactivity() {
        this.detectsOn = InteractivityDetect_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    Object.defineProperty(Interactivity.prototype, "detect_on", {
        get: function () {
            return this.detectsOn;
        },
        set: function (value) {
            this.detectsOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Interactivity.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
            if (detectsOn !== undefined) {
                this.detectsOn = detectsOn;
            }
            this.events.load(data.events);
            this.modes.load(data.modes);
            if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
                if (this.events.onHover.mode instanceof Array) {
                    if (this.events.onHover.mode.indexOf(HoverMode_1.HoverMode.slow) < 0) {
                        this.events.onHover.mode.push(HoverMode_1.HoverMode.slow);
                    }
                }
                else if (this.events.onHover.mode !== HoverMode_1.HoverMode.slow) {
                    this.events.onHover.mode = [this.events.onHover.mode, HoverMode_1.HoverMode.slow];
                }
            }
        }
    };
    return Interactivity;
}());
exports.Interactivity = Interactivity;
