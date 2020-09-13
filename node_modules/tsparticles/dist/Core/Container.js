"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Canvas_1 = require("./Canvas");
var EventListeners_1 = require("../Utils/EventListeners");
var Particles_1 = require("./Particles");
var Retina_1 = require("./Retina");
var FrameManager_1 = require("./FrameManager");
var Options_1 = require("../Options/Classes/Options");
var Plugins_1 = require("../Utils/Plugins");
var SimplexNoise_1 = require("../Utils/SimplexNoise");
var Container = (function () {
    function Container(id, params) {
        var presets = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            presets[_i - 2] = arguments[_i];
        }
        this.started = false;
        this.destroyed = false;
        this.id = id;
        this.paused = true;
        this.sourceOptions = params;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.interactivity = {
            mouse: {},
        };
        this.bubble = {};
        this.repulse = { particles: [] };
        this.plugins = {};
        this.drawers = {};
        this.density = 1;
        this.options = new Options_1.Options();
        for (var _a = 0, presets_1 = presets; _a < presets_1.length; _a++) {
            var preset = presets_1[_a];
            this.options.load(Plugins_1.Plugins.getPreset(preset));
        }
        for (var _b = 0, _c = Plugins_1.Plugins.getSupportedShapes(); _b < _c.length; _b++) {
            var type = _c[_b];
            this.drawers[type] = Plugins_1.Plugins.getShapeDrawer(type);
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.simplex = new SimplexNoise_1.SimplexNoise();
        this.eventListeners = new EventListeners_1.EventListeners(this);
    }
    Container.requestFrame = function (callback) {
        return window.customRequestAnimationFrame(callback);
    };
    Container.cancelAnimation = function (handle) {
        window.cancelAnimationFrame(handle);
    };
    Container.prototype.play = function (force) {
        var needsUpdate = this.paused || force;
        if (this.paused) {
            this.paused = false;
        }
        if (needsUpdate) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.play) {
                    plugin.play();
                }
            }
            this.lastFrameTime = performance.now();
        }
        this.draw();
    };
    Container.prototype.pause = function () {
        if (this.drawAnimationFrame !== undefined) {
            Container.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
        }
        if (!this.paused) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.pause) {
                    plugin.pause();
                }
            }
            if (!this.pageHidden) {
                this.paused = true;
            }
        }
    };
    Container.prototype.draw = function () {
        var _this = this;
        this.drawAnimationFrame = Container.requestFrame(function (t) { return _this.drawer.nextFrame(t); });
    };
    Container.prototype.getAnimationStatus = function () {
        return !this.paused;
    };
    Container.prototype.densityAutoParticles = function () {
        this.initDensityFactor();
        var numberOptions = this.options.particles.number;
        var optParticlesNumber = numberOptions.value;
        var optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        var particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * this.density;
        var particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    };
    Container.prototype.initDensityFactor = function () {
        var densityOptions = this.options.particles.number.density;
        if (!this.canvas.element || !densityOptions.enable) {
            return;
        }
        var canvas = this.canvas.element;
        var pxRatio = this.retina.pixelRatio;
        this.density = (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * densityOptions.area);
    };
    Container.prototype.destroy = function () {
        this.stop();
        this.retina.reset();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.bubble;
        delete this.repulse;
        delete this.drawer;
        delete this.eventListeners;
        for (var type in this.drawers) {
            var drawer = this.drawers[type];
            if (drawer.destroy !== undefined) {
                drawer.destroy(this);
            }
        }
        this.drawers = {};
        this.destroyed = true;
    };
    Container.prototype.exportImg = function (callback) {
        this.exportImage(callback);
    };
    Container.prototype.exportImage = function (callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    };
    Container.prototype.exportConfiguration = function () {
        return JSON.stringify(this.options, undefined, 2);
    };
    Container.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stop();
                        return [4, this.start()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Container.prototype.stop = function () {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.retina.reset();
        this.canvas.clear();
        for (var id in this.plugins) {
            var plugin = this.plugins[id];
            if (plugin.stop !== undefined) {
                plugin.stop();
            }
        }
        this.plugins = {};
        delete this.particles.lineLinkedColor;
    };
    Container.prototype.start = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var availablePlugins, id, _a, _b, _i, id, plugin, _c, _d, _e, type, drawer;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (this.started) {
                            return [2];
                        }
                        availablePlugins = Plugins_1.Plugins.getAvailablePlugins(this);
                        for (id in availablePlugins) {
                            this.plugins[id] = availablePlugins[id];
                        }
                        this.started = true;
                        this.eventListeners.addListeners();
                        _a = [];
                        for (_b in this.plugins)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 5];
                        id = _a[_i];
                        plugin = this.plugins[id];
                        if (!(plugin.startAsync !== undefined)) return [3, 3];
                        return [4, plugin.startAsync()];
                    case 2:
                        _f.sent();
                        return [3, 4];
                    case 3:
                        if (plugin.start !== undefined) {
                            plugin.start();
                        }
                        _f.label = 4;
                    case 4:
                        _i++;
                        return [3, 1];
                    case 5:
                        _c = [];
                        for (_d in this.drawers)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 6;
                    case 6:
                        if (!(_e < _c.length)) return [3, 9];
                        type = _c[_e];
                        drawer = this.drawers[type];
                        if (!(drawer.init !== undefined)) return [3, 8];
                        return [4, drawer.init(this)];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        _e++;
                        return [3, 6];
                    case 9:
                        this.init();
                        this.play();
                        return [2];
                }
            });
        });
    };
    Container.prototype.init = function () {
        this.retina.init();
        this.canvas.init();
        this.particles.init();
        this.densityAutoParticles();
        for (var id in this.plugins) {
            var plugin = this.plugins[id];
            if (plugin.init !== undefined) {
                plugin.init();
            }
        }
    };
    return Container;
}());
exports.Container = Container;
