"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = require("../Enums/Modes/ClickMode");
var InteractivityDetect_1 = require("../Enums/InteractivityDetect");
var Constants_1 = require("./Constants");
var EventListeners = (function () {
    function EventListeners(container) {
        var _this = this;
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
        this.resizeHandler = function () { return _this.handleWindowResize(); };
    }
    EventListeners.manageListener = function (element, event, handler, add, options) {
        if (add) {
            var addOptions = { passive: true };
            if (typeof options === "boolean") {
                addOptions.capture = options;
            }
            else if (options !== undefined) {
                addOptions = options;
            }
            EventListeners.addListener(element, event, handler, addOptions);
        }
        else {
            EventListeners.removeListener(element, event, handler, options);
        }
    };
    EventListeners.addListener = function (element, event, handler, options) {
        element.addEventListener(event, handler, options);
    };
    EventListeners.removeListener = function (element, event, handler, options) {
        element.removeEventListener(event, handler, options);
    };
    EventListeners.prototype.addListeners = function () {
        this.manageListeners(true);
    };
    EventListeners.prototype.removeListeners = function () {
        this.manageListeners(false);
    };
    EventListeners.prototype.manageListeners = function (add) {
        var container = this.container;
        var options = container.options;
        if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        var interactivityEl = container.interactivity.element;
        if (interactivityEl && (options.interactivity.events.onHover.enable ||
            options.interactivity.events.onClick.enable)) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            EventListeners.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            EventListeners.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    };
    EventListeners.prototype.handleWindowResize = function () {
        var container = this.container;
        var options = container.options;
        if (!container.canvas.element) {
            return;
        }
        container.canvas.size.width = container.canvas.element.offsetWidth;
        container.canvas.size.height = container.canvas.element.offsetHeight;
        if (container.retina.isRetina) {
            container.canvas.size.width *= container.retina.pixelRatio;
            container.canvas.size.height *= container.retina.pixelRatio;
        }
        container.canvas.element.width = container.canvas.size.width;
        container.canvas.element.height = container.canvas.size.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.resize !== undefined) {
                plugin.resize();
            }
        }
    };
    EventListeners.prototype.handleVisibilityChange = function () {
        var container = this.container;
        var options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
            else {
                container.draw();
            }
        }
    };
    EventListeners.prototype.mouseTouchMove = function (e) {
        var _a, _b, _c, _d;
        var container = this.container;
        var options = container.options;
        var pos;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            var mouseEvent = e;
            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
                return;
            }
            if (container.interactivity.element === window) {
                if (container.canvas.element) {
                    var clientRect = container.canvas.element.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                if (source && target) {
                    var sourceRect = source.getBoundingClientRect();
                    var targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                if (mouseEvent.target === container.canvas.element) {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            var touchEvent = e;
            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            var canvasRect = (_b = container.canvas.element) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _c !== void 0 ? _c : 0),
                y: lastTouch.clientY - ((_d = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _d !== void 0 ? _d : 0),
            };
        }
        container.interactivity.mouse.position = pos;
        if (container.retina.isRetina && container.interactivity.mouse.position) {
            container.interactivity.mouse.position.x *= container.retina.pixelRatio;
            container.interactivity.mouse.position.y *= container.retina.pixelRatio;
        }
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    };
    EventListeners.prototype.mouseTouchFinish = function () {
        var container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    };
    EventListeners.prototype.mouseTouchClick = function (e) {
        var container = this.container;
        var options = container.options;
        var handled = false;
        var mousePosition = container.interactivity.mouse.position;
        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
            return;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.clickPositionValid !== undefined) {
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
        }
        if (!handled) {
            this.doMouseTouchClick(e);
        }
    };
    EventListeners.prototype.doMouseTouchClick = function (e) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (this.canPush) {
            if (container.interactivity.mouse.position) {
                container.interactivity.mouse.clickPosition = {
                    x: container.interactivity.mouse.position.x,
                    y: container.interactivity.mouse.position.y,
                };
            }
            else {
                return;
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            if (options.interactivity.events.onClick.mode instanceof Array) {
                for (var _i = 0, _a = options.interactivity.events.onClick.mode; _i < _a.length; _i++) {
                    var mode = _a[_i];
                    this.handleClickMode(mode);
                }
            }
            else {
                var mode = options.interactivity.events.onClick.mode;
                this.handleClickMode(mode);
            }
        }
        if (e.type === "touchend") {
            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
        }
    };
    EventListeners.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var options = container.options;
        var pushNb = options.interactivity.modes.push.quantity;
        var removeNb = options.interactivity.modes.remove.quantity;
        switch (mode) {
            case ClickMode_1.ClickMode.push:
                if (options.particles.move.enable) {
                    container.particles.push(pushNb, container.interactivity.mouse);
                }
                else {
                    if (options.interactivity.modes.push.quantity === 1) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else if (options.interactivity.modes.push.quantity > 1) {
                        container.particles.push(pushNb);
                    }
                }
                break;
            case ClickMode_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;
            case ClickMode_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;
            case ClickMode_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;
                for (var _i = 0, _a = container.repulse.particles; _i < _a.length; _i++) {
                    var particle = _a[_i];
                    particle.velocity.horizontal = particle.initialVelocity.horizontal;
                    particle.velocity.vertical = particle.initialVelocity.vertical;
                }
                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(function () {
                    if (!container.destroyed) {
                        container.repulse.clicking = false;
                    }
                }, options.interactivity.modes.repulse.duration * 1000);
                break;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.handleClickMode) {
                plugin.handleClickMode(mode);
            }
        }
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;
