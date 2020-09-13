"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Interactivity_1 = require("./Interactivity/Interactivity");
var Particles_1 = require("./Particles/Particles");
var PolygonMask_1 = require("./PolygonMask/PolygonMask");
var BackgroundMask_1 = require("./BackgroundMask/BackgroundMask");
var Background_1 = require("./Background/Background");
var Emitter_1 = require("./Emitters/Emitter");
var Absorber_1 = require("./Absorbers/Absorber");
var Infection_1 = require("./Infection/Infection");
var Plugins_1 = require("../../Utils/Plugins");
var Options = (function () {
    function Options() {
        this.absorbers = [];
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.detectRetina = false;
        this.emitters = [];
        this.fpsLimit = 30;
        this.infection = new Infection_1.Infection();
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.pauseOnBlur = true;
        this.polygon = new PolygonMask_1.PolygonMask();
    }
    Object.defineProperty(Options.prototype, "fps_limit", {
        get: function () {
            return this.fpsLimit;
        },
        set: function (value) {
            this.fpsLimit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Options.prototype, "retina_detect", {
        get: function () {
            return this.detectRetina;
        },
        set: function (value) {
            this.detectRetina = value;
        },
        enumerable: true,
        configurable: true
    });
    Options.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.preset !== undefined) {
                if (data.preset instanceof Array) {
                    for (var _i = 0, _c = data.preset; _i < _c.length; _i++) {
                        var preset = _c[_i];
                        this.importPreset(preset);
                    }
                }
                else {
                    this.importPreset(data.preset);
                }
            }
            if (data.background !== undefined) {
                this.background.load(data.background);
            }
            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
            if (detectRetina !== undefined) {
                this.detectRetina = detectRetina;
            }
            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
            if (fpsLimit !== undefined) {
                this.fpsLimit = fpsLimit;
            }
            if (data.pauseOnBlur !== undefined) {
                this.pauseOnBlur = data.pauseOnBlur;
            }
            this.particles.load(data.particles);
            this.infection.load(data.infection);
            this.interactivity.load(data.interactivity);
            this.polygon.load(data.polygon);
            this.backgroundMask.load(data.backgroundMask);
            if (data.emitters !== undefined) {
                if (data.emitters instanceof Array) {
                    this.emitters = data.emitters.map(function (s) {
                        var tmp = new Emitter_1.Emitter();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.emitters instanceof Array) {
                        this.emitters = new Emitter_1.Emitter();
                    }
                    this.emitters.load(data.emitters);
                }
            }
            if (data.absorbers !== undefined) {
                if (data.absorbers instanceof Array) {
                    this.absorbers = data.absorbers.map(function (s) {
                        var tmp = new Absorber_1.Absorber();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.absorbers instanceof Array) {
                        this.absorbers = new Absorber_1.Absorber();
                    }
                    this.absorbers.load(data.absorbers);
                }
            }
        }
    };
    Options.prototype.importPreset = function (preset) {
        var presetOptions = Plugins_1.Plugins.getPreset(preset);
        if (presetOptions !== undefined) {
            this.load(presetOptions);
        }
    };
    return Options;
}());
exports.Options = Options;
