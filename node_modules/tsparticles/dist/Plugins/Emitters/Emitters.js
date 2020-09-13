"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emitter_1 = require("./Emitter");
var ClickMode_1 = require("../../Enums/Modes/ClickMode");
var Utils_1 = require("../../Utils/Utils");
var Emitters = (function () {
    function Emitters(container) {
        this.container = container;
        this.array = [];
    }
    Emitters.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        if (options.emitters instanceof Array) {
            for (var _i = 0, _a = options.emitters; _i < _a.length; _i++) {
                var emitterOptions = _a[_i];
                var emitter = new Emitter_1.Emitter(this, emitterOptions);
                this.addEmitter(emitter);
            }
        }
        else {
            var emitterOptions = options.emitters;
            var emitter = new Emitter_1.Emitter(this, emitterOptions);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.play = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.play();
        }
    };
    Emitters.prototype.pause = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.pause();
        }
    };
    Emitters.prototype.stop = function () {
        this.array = [];
    };
    Emitters.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var options = container.options;
        if (mode === ClickMode_1.ClickMode.emitter) {
            var emitterModeOptions = void 0;
            var modeEmitters = options.interactivity.modes.emitters;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                    emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
                }
            }
            else {
                emitterModeOptions = modeEmitters;
            }
            var emitterOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (options.emitters instanceof Array ?
                Utils_1.Utils.itemFromArray(options.emitters) :
                options.emitters);
            var ePosition = container.interactivity.mouse.clickPosition;
            var emitter = new Emitter_1.Emitter(this, Utils_1.Utils.deepExtend({}, emitterOptions), ePosition);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.resize = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.resize();
        }
    };
    Emitters.prototype.addEmitter = function (emitter) {
        this.array.push(emitter);
    };
    Emitters.prototype.removeEmitter = function (emitter) {
        var index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    };
    return Emitters;
}());
exports.Emitters = Emitters;
