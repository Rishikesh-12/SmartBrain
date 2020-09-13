"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var MoveDirection_1 = require("../Enums/MoveDirection");
var ColorUtils_1 = require("./ColorUtils");
var Utils = (function () {
    function Utils() {
    }
    Utils.replaceColorSvg = function (image, color, opacity) {
        if (!image.svgData) {
            return "";
        }
        var svgXml = image.svgData;
        var rgbHex = /#([0-9A-F]{3,6})/gi;
        return svgXml.replace(rgbHex, function () { return ColorUtils_1.ColorUtils.getStyleFromColor(color, opacity); });
    };
    Utils.clamp = function (num, min, max) {
        return Math.min(Math.max(num, min), max);
    };
    Utils.isInArray = function (value, array) {
        return value === array || (array instanceof Array && array.indexOf(value) > -1);
    };
    Utils.mix = function (comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    };
    Utils.getParticleBaseVelocity = function (particle) {
        var velocityBase;
        switch (particle.direction) {
            case MoveDirection_1.MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case MoveDirection_1.MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case MoveDirection_1.MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case MoveDirection_1.MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case MoveDirection_1.MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case MoveDirection_1.MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    };
    Utils.getDistance = function (pointA, pointB) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Utils.loadFont = function (character) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, document.fonts.load(character.weight + " 36px '" + character.font + "'")];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Utils.arrayRandomIndex = function (array) {
        return Math.floor(Math.random() * array.length);
    };
    Utils.itemFromArray = function (array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    };
    Utils.randomInRange = function (min, max) {
        return (Math.random() * (max - min)) + min;
    };
    Utils.isPointInside = function (point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    };
    Utils.areBoundsInside = function (bounds, size) {
        return bounds.left < size.width && bounds.right > 0
            && bounds.top < size.height && bounds.bottom > 0;
    };
    Utils.calculateBounds = function (point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius
        };
    };
    Utils.loadImage = function (source) {
        return new Promise(function (resolve, reject) {
            if (source) {
                var image_1 = {
                    source: source,
                    type: source.substr(source.length - 3)
                };
                var img_1 = new Image();
                img_1.addEventListener("load", function () {
                    image_1.element = img_1;
                    resolve(image_1);
                });
                img_1.addEventListener("error", function () {
                    reject("Error tsParticles - loading image: " + source);
                });
                img_1.src = source;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    };
    Utils.downloadSvgImage = function (source) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var image, response, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!source) return [3, 5];
                        image = {
                            source: source,
                            type: source.substr(source.length - 3)
                        };
                        if (image.type !== "svg") {
                            return [2, this.loadImage(source)];
                        }
                        return [4, fetch(image.source)];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3, 3];
                        _a = image;
                        return [4, response.text()];
                    case 2:
                        _a.svgData = _b.sent();
                        return [2, image];
                    case 3: throw new Error("Error tsParticles - Image not found");
                    case 4: return [3, 6];
                    case 5: throw new Error("Error tsParticles - No image.src");
                    case 6: return [2];
                }
            });
        });
    };
    Utils.deepExtend = function (destination, source) {
        var _a;
        destination = destination !== null && destination !== void 0 ? destination : {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = (_a = destination[property]) !== null && _a !== void 0 ? _a : {};
                Utils.deepExtend(destination[property], source[property]);
            }
            else {
                destination[property] = source[property];
            }
        }
        return destination;
    };
    return Utils;
}());
exports.Utils = Utils;
