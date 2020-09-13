"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Utils_1 = require("../../../Utils/Utils");
var ShapeType_1 = require("../../../Enums/ShapeType");
var TextDrawer = (function () {
    function TextDrawer() {
    }
    TextDrawer.prototype.init = function (container) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, shapeOptions, _i, shapeOptions_1, character, character;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = container.options;
                        if (!(Utils_1.Utils.isInArray(ShapeType_1.ShapeType.char, options.particles.shape.type) ||
                            Utils_1.Utils.isInArray(ShapeType_1.ShapeType.character, options.particles.shape.type))) return [3, 7];
                        shapeOptions = (_a = options.particles.shape.options[ShapeType_1.ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[ShapeType_1.ShapeType.char];
                        if (!(shapeOptions instanceof Array)) return [3, 5];
                        _i = 0, shapeOptions_1 = shapeOptions;
                        _c.label = 1;
                    case 1:
                        if (!(_i < shapeOptions_1.length)) return [3, 4];
                        character = shapeOptions_1[_i];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        character = (_b = options.particles.shape.options[ShapeType_1.ShapeType.character]) !== null && _b !== void 0 ? _b : options.particles.shape.options[ShapeType_1.ShapeType.char];
                        if (!(character !== undefined)) return [3, 7];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 6:
                        _c.sent();
                        _c.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    TextDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        var character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        var textData = character.value;
        if (textData === undefined) {
            return;
        }
        var textParticle = particle;
        if (textParticle.text === undefined) {
            if (textData instanceof Array) {
                textParticle.text = Utils_1.Utils.itemFromArray(textData, particle.randomIndexData);
            }
            else {
                textParticle.text = textData;
            }
        }
        var text = textParticle.text;
        var style = character.style;
        var weight = character.weight;
        var size = Math.round(radius) * 2;
        var font = character.font;
        var fill = particle.fill;
        context.font = style + " " + weight + " " + size + "px \"" + font + "\"";
        var pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    };
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;
