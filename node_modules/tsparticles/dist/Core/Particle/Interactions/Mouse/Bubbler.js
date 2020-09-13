"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType_1 = require("../../../../Enums/ProcessBubbleType");
var Utils_1 = require("../../../../Utils/Utils");
var HoverMode_1 = require("../../../../Enums/Modes/HoverMode");
var ClickMode_1 = require("../../../../Enums/Modes/ClickMode");
var Constants_1 = require("../../../../Utils/Constants");
var ColorUtils_1 = require("../../../../Utils/ColorUtils");
var Circle_1 = require("../../../../Utils/Circle");
var Bubbler = (function () {
    function Bubbler() {
    }
    Bubbler.reset = function (particle) {
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    };
    Bubbler.bubble = function (container, _delta) {
        var options = container.options;
        var events = options.interactivity.events;
        var onHover = events.onHover;
        var onClick = events.onClick;
        var hoverEnabled = onHover.enable;
        var hoverMode = onHover.mode;
        var clickEnabled = onClick.enable;
        var clickMode = onClick.mode;
        if (hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            this.clickBubble(container);
        }
    };
    Bubbler.process = function (container, particle, distMouse, timeSpent, data) {
        var bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) {
            return;
        }
        var options = container.options;
        var bubbleDuration = options.interactivity.modes.bubble.duration;
        var bubbleDistance = container.retina.bubbleModeDistance;
        var particlesParam = data.particlesObj.optValue;
        var pObjBubble = data.bubbleObj.value;
        var pObj = data.particlesObj.value || 0;
        var type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        var value = pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                        if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                            particle.bubble.radius = value;
                        }
                        if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                        delete particle.bubble.radius;
                    }
                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else if (pObjBubble) {
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                    delete particle.bubble.radius;
                }
                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                    delete particle.bubble.opacity;
                }
            }
        }
    };
    Bubbler.clickBubble = function (container) {
        var _a;
        var options = container.options;
        var mouseClickPos = container.interactivity.mouse.clickPosition;
        if (mouseClickPos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.quadTree.query(new Circle_1.Circle(mouseClickPos.x, mouseClickPos.y, distance));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var particle = query_1[_i];
            var pos = particle.getPosition();
            var distMouse = Utils_1.Utils.getDistance(pos, mouseClickPos);
            var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (container.bubble.clicking) {
                if (timeSpent > options.interactivity.modes.bubble.duration) {
                    container.bubble.durationEnd = true;
                }
                if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                    container.bubble.clicking = false;
                    container.bubble.durationEnd = false;
                }
                var sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius,
                    },
                    particlesObj: {
                        optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
                        value: particle.size.value,
                    },
                    type: ProcessBubbleType_1.ProcessBubbleType.size,
                };
                this.process(container, particle, distMouse, timeSpent, sizeData);
                var opacityData = {
                    bubbleObj: {
                        optValue: options.interactivity.modes.bubble.opacity,
                        value: particle.bubble.opacity,
                    },
                    particlesObj: {
                        optValue: particle.particlesOptions.opacity.value,
                        value: particle.opacity.value,
                    },
                    type: ProcessBubbleType_1.ProcessBubbleType.opacity,
                };
                this.process(container, particle, distMouse, timeSpent, opacityData);
                if (!container.bubble.durationEnd) {
                    if (distMouse <= container.retina.bubbleModeDistance) {
                        this.hoverBubbleColor(container, particle);
                    }
                    else {
                        delete particle.bubble.color;
                    }
                }
                else {
                    delete particle.bubble.color;
                }
            }
        }
    };
    Bubbler.hoverBubble = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (mousePos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
        for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
            var particle = query_2[_i];
            var pos = particle.getPosition();
            var distance_1 = Utils_1.Utils.getDistance(pos, mousePos);
            var ratio = 1 - distance_1 / container.retina.bubbleModeDistance;
            if (distance_1 <= container.retina.bubbleModeDistance) {
                if (ratio >= 0 && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(container, particle, ratio);
                    this.hoverBubbleOpacity(container, particle, ratio);
                    this.hoverBubbleColor(container, particle);
                }
            }
            else {
                this.reset(particle);
            }
            if (container.interactivity.status === Constants_1.Constants.mouseLeaveEvent) {
                this.reset(particle);
            }
        }
    };
    Bubbler.hoverBubbleSize = function (container, particle, ratio) {
        var _a;
        var modeSize = container.retina.bubbleModeSize;
        if (modeSize === undefined) {
            return;
        }
        var optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
        var pSize = particle.size.value;
        var size = this.calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) {
            particle.bubble.radius = size;
        }
    };
    Bubbler.hoverBubbleOpacity = function (container, particle, ratio) {
        var options = container.options;
        var modeOpacity = options.interactivity.modes.bubble.opacity;
        if (modeOpacity === undefined) {
            return;
        }
        var optOpacity = particle.particlesOptions.opacity.value;
        var pOpacity = particle.opacity.value;
        var opacity = this.calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);
        if (opacity !== undefined) {
            particle.bubble.opacity = opacity;
        }
    };
    Bubbler.calculateBubbleValue = function (particleValue, modeValue, optionsValue, ratio) {
        if (modeValue > optionsValue) {
            var size = particleValue + (modeValue - optionsValue) * ratio;
            return Utils_1.Utils.clamp(size, particleValue, modeValue);
        }
        else if (modeValue < optionsValue) {
            var size = particleValue - (optionsValue - modeValue) * ratio;
            return Utils_1.Utils.clamp(size, modeValue, particleValue);
        }
    };
    Bubbler.hoverBubbleColor = function (container, particle) {
        var options = container.options;
        if (particle.bubble.color === undefined) {
            var modeColor = options.interactivity.modes.bubble.color;
            if (modeColor === undefined) {
                return;
            }
            particle.bubble.color = ColorUtils_1.ColorUtils.colorToRgb(modeColor instanceof Array ?
                Utils_1.Utils.itemFromArray(modeColor) :
                modeColor);
        }
    };
    return Bubbler;
}());
exports.Bubbler = Bubbler;
