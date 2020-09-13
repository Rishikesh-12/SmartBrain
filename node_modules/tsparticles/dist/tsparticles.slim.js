/*!
 * Author : Matteo Bruni - https://www.matteobruni.it
 * MIT license: https://opensource.org/licenses/MIT
 * Demo / Generator : https://particles.matteobruni.it/
 * GitHub : https://www.github.com/matteobruni/tsparticles
 * How to use? : Check the GitHub README
 * v1.14.3
 */
(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _ColorUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



class Utils {
  static replaceColorSvg(image, color, opacity) {
    if (!image.svgData) {
      return "";
    }

    const svgXml = image.svgData;
    const rgbHex = /#([0-9A-F]{3,6})/gi;
    return svgXml.replace(rgbHex, () => _ColorUtils__WEBPACK_IMPORTED_MODULE_2__[/* ColorUtils */ "a"].getStyleFromColor(color, opacity));
  }

  static clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  static isInArray(value, array) {
    return value === array || array instanceof Array && array.indexOf(value) > -1;
  }

  static mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
  }

  static getParticleBaseVelocity(particle) {
    let velocityBase;

    switch (particle.direction) {
      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].top:
        velocityBase = {
          x: 0,
          y: -1
        };
        break;

      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].topRight:
        velocityBase = {
          x: 0.5,
          y: -0.5
        };
        break;

      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].right:
        velocityBase = {
          x: 1,
          y: -0
        };
        break;

      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].bottomRight:
        velocityBase = {
          x: 0.5,
          y: 0.5
        };
        break;

      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].bottom:
        velocityBase = {
          x: 0,
          y: 1
        };
        break;

      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].bottomLeft:
        velocityBase = {
          x: -0.5,
          y: 1
        };
        break;

      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].left:
        velocityBase = {
          x: -1,
          y: 0
        };
        break;

      case _Enums_MoveDirection__WEBPACK_IMPORTED_MODULE_1__[/* MoveDirection */ "a"].topLeft:
        velocityBase = {
          x: -0.5,
          y: -0.5
        };
        break;

      default:
        velocityBase = {
          x: 0,
          y: 0
        };
        break;
    }

    return velocityBase;
  }

  static getDistance(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  static loadFont(character) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
      try {
        yield document.fonts.load(`${character.weight} 36px '${character.font}'`);
      } catch (_a) {}
    });
  }

  static arrayRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  static itemFromArray(array, index) {
    return array[index !== undefined ? index : this.arrayRandomIndex(array)];
  }

  static randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  static isPointInside(point, size, radius) {
    return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
  }

  static areBoundsInside(bounds, size) {
    return bounds.left < size.width && bounds.right > 0 && bounds.top < size.height && bounds.bottom > 0;
  }

  static calculateBounds(point, radius) {
    return {
      bottom: point.y + radius,
      left: point.x - radius,
      right: point.x + radius,
      top: point.y - radius
    };
  }

  static loadImage(source) {
    return new Promise((resolve, reject) => {
      if (source) {
        const image = {
          source: source,
          type: source.substr(source.length - 3)
        };
        const img = new Image();
        img.addEventListener("load", () => {
          image.element = img;
          resolve(image);
        });
        img.addEventListener("error", () => {
          reject(`Error tsParticles - loading image: ${source}`);
        });
        img.src = source;
      } else {
        reject("Error tsParticles - No image.src");
      }
    });
  }

  static downloadSvgImage(source) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
      if (source) {
        const image = {
          source: source,
          type: source.substr(source.length - 3)
        };

        if (image.type !== "svg") {
          return this.loadImage(source);
        }

        const response = yield fetch(image.source);

        if (response.ok) {
          image.svgData = yield response.text();
          return image;
        } else {
          throw new Error("Error tsParticles - Image not found");
        }
      } else {
        throw new Error("Error tsParticles - No image.src");
      }
    });
  }

  static deepExtend(destination, source) {
    var _a;

    destination = destination !== null && destination !== void 0 ? destination : {};

    for (const property in source) {
      if (source[property] && source[property].constructor && source[property].constructor === Object) {
        destination[property] = (_a = destination[property]) !== null && _a !== void 0 ? _a : {};
        Utils.deepExtend(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }

    return destination;
  }

}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeType; });
var ShapeType;

(function (ShapeType) {
  ShapeType["char"] = "char";
  ShapeType["character"] = "character";
  ShapeType["circle"] = "circle";
  ShapeType["edge"] = "edge";
  ShapeType["image"] = "image";
  ShapeType["images"] = "images";
  ShapeType["line"] = "line";
  ShapeType["polygon"] = "polygon";
  ShapeType["square"] = "square";
  ShapeType["star"] = "star";
  ShapeType["triangle"] = "triangle";
})(ShapeType || (ShapeType = {}));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorUtils; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


class ColorUtils {
  static colorToRgb(color) {
    var _a, _b;

    let res;

    if (typeof color.value === "string") {
      if (color.value === _Constants__WEBPACK_IMPORTED_MODULE_1__[/* Constants */ "a"].randomColorValue) {
        res = {
          b: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          r: Math.floor(Math.random() * 256)
        };
      } else {
        res = ColorUtils.stringToRgb(color.value);
      }
    } else {
      if (color.value instanceof Array) {
        const colorSelected = _Utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].itemFromArray(color.value);
        res = ColorUtils.stringToRgb(colorSelected);
      } else {
        const colorValue = color.value;
        const rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;

        if (rgbColor.r !== undefined) {
          res = rgbColor;
        } else {
          const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;

          if (hslColor.h !== undefined) {
            res = ColorUtils.hslToRgb(hslColor);
          }
        }
      }
    }

    return res;
  }

  static stringToAlpha(input) {
    var _a;

    return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
  }

  static stringToRgb(input) {
    return ColorUtils.stringToRgba(input);
  }

  static hslToRgb(hsl) {
    const result = {
      b: 0,
      g: 0,
      r: 0
    };
    const hslPercent = {
      h: hsl.h > 1 ? hsl.h / 360 : hsl.h,
      l: hsl.l > 1 ? hsl.l / 100 : hsl.l,
      s: hsl.s > 1 ? hsl.s / 100 : hsl.s
    };

    if (hslPercent.s === 0) {
      result.b = hslPercent.l;
      result.g = hslPercent.l;
      result.r = hslPercent.l;
    } else {
      const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
      const p = 2 * hslPercent.l - q;
      result.r = ColorUtils.hue2rgb(p, q, hslPercent.h + 1 / 3);
      result.g = ColorUtils.hue2rgb(p, q, hslPercent.h);
      result.b = ColorUtils.hue2rgb(p, q, hslPercent.h - 1 / 3);
    }

    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);
    return result;
  }

  static hslaToRgba(hsla) {
    const rgbResult = ColorUtils.hslToRgb(hsla);
    return {
      a: hsla.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }

  static getRandomRgbColor(min) {
    var _a;

    const fixedMin = min || 0;
    const minColor = fixedMin + fixedMin * Math.pow(16, 2) + fixedMin * Math.pow(16, 4);
    const factor = minColor ^ 0xFFFFFF;
    const randomColor = Math.floor(Math.random() * factor | minColor).toString(16);
    return (_a = this.stringToRgb(`#${randomColor}`)) !== null && _a !== void 0 ? _a : {
      b: 0,
      g: 0,
      r: 0
    };
  }

  static getStyleFromColor(color, opacity) {
    const opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacityValue})`;
  }

  static mix(color1, color2, size1, size2) {
    return {
      b: _Utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].mix(color1.b, color2.b, size1, size2),
      g: _Utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].mix(color1.g, color2.g, size1, size2),
      r: _Utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].mix(color1.r, color2.r, size1, size2)
    };
  }

  static hue2rgb(p, q, t) {
    let tCalc = t;

    if (tCalc < 0) {
      tCalc += 1;
    }

    if (tCalc > 1) {
      tCalc -= 1;
    }

    if (tCalc < 1 / 6) {
      return p + (q - p) * 6 * tCalc;
    }

    if (tCalc < 1 / 2) {
      return q;
    }

    if (tCalc < 2 / 3) {
      return p + (q - p) * (2 / 3 - tCalc) * 6;
    }

    return p;
  }

  static stringToRgba(input) {
    if (input.startsWith('rgb')) {
      const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
      const result = regex.exec(input);
      return result ? {
        a: result.length > 4 ? parseFloat(result[5]) : 1,
        b: parseInt(result[3], 10),
        g: parseInt(result[2], 10),
        r: parseInt(result[1], 10)
      } : undefined;
    } else if (input.startsWith('hsl')) {
      const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
      const result = regex.exec(input);
      return result ? ColorUtils.hslaToRgba({
        a: result.length > 4 ? parseFloat(result[5]) : 1,
        h: parseInt(result[1], 10),
        l: parseInt(result[3], 10),
        s: parseInt(result[2], 10)
      }) : undefined;
    } else {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
      const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a) => {
        return r + r + g + g + b + b + (a !== undefined ? a + a : "");
      });
      const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
      const result = regex.exec(hexFixed);
      return result ? {
        a: result[4] !== undefined ? parseInt(result[4], 16) / 0xFF : 1,
        b: parseInt(result[3], 16),
        g: parseInt(result[2], 16),
        r: parseInt(result[1], 16)
      } : undefined;
    }
  }

}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsColor; });
class OptionsColor {
  constructor() {
    this.value = "#fff";
  }

  load(data) {
    if (data !== undefined) {
      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

  static create(source, data) {
    const color = source !== null && source !== void 0 ? source : new OptionsColor();

    if (data !== undefined) {
      color.load(typeof data === "string" ? {
        value: data
      } : data);
    }

    return color;
  }

}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
class Constants {}
Constants.canvasClass = "tsparticles-canvas-el";
Constants.randomColorValue = "random";
Constants.midColorValue = "mid";
Constants.touchEndEvent = "touchend";
Constants.mouseUpEvent = "mouseup";
Constants.mouseMoveEvent = "mousemove";
Constants.touchStartEvent = "touchstart";
Constants.touchMoveEvent = "touchmove";
Constants.mouseLeaveEvent = "mouseleave";
Constants.touchCancelEvent = "touchcancel";
Constants.resizeEvent = "resize";
Constants.visibilityChangeEvent = "visibilitychange";
Constants.noPolygonDataLoaded = "No polygon data loaded.";
Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutMode; });
var OutMode;

(function (OutMode) {
  OutMode["bounce"] = "bounce";
  OutMode["bounceHorizontal"] = "bounce-horizontal";
  OutMode["bounceVertical"] = "bounce-vertical";
  OutMode["out"] = "out";
  OutMode["destroy"] = "destroy";
})(OutMode || (OutMode = {}));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugins; });
class Plugins {
  static getPlugin(plugin) {
    return this.plugins.filter(t => t.id === plugin)[0];
  }

  static addPlugin(plugin) {
    if (!this.getPlugin(plugin.id)) {
      this.plugins.push(plugin);
    }
  }

  static getAvailablePlugins(container) {
    const res = {};
    const availablePlugins = this.plugins.filter(t => t.needsPlugin(container));

    for (const plugin of availablePlugins) {
      res[plugin.id] = plugin.getPlugin(container);
    }

    return res;
  }

  static getPreset(preset) {
    return this.presets[preset];
  }

  static addPreset(presetKey, options) {
    if (!this.getPreset(presetKey)) {
      this.presets[presetKey] = options;
    }
  }

  static addShapeDrawer(type, drawer) {
    if (!this.drawers[type]) {
      this.drawers[type] = drawer;
    }
  }

  static getShapeDrawer(type) {
    return this.drawers[type];
  }

  static getSupportedShapes() {
    return Object.keys(this.drawers);
  }

}
Plugins.plugins = [];
Plugins.presets = {};
Plugins.drawers = {};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __awaiter; });
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickMode; });
var ClickMode;

(function (ClickMode) {
  ClickMode["bubble"] = "bubble";
  ClickMode["push"] = "push";
  ClickMode["remove"] = "remove";
  ClickMode["repulse"] = "repulse";
  ClickMode["emitter"] = "emitter";
  ClickMode["absorber"] = "absorber";
})(ClickMode || (ClickMode = {}));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoverMode; });
var HoverMode;

(function (HoverMode) {
  HoverMode["bubble"] = "bubble";
  HoverMode["connect"] = "connect";
  HoverMode["grab"] = "grab";
  HoverMode["repulse"] = "repulse";
  HoverMode["slow"] = "slow";
})(HoverMode || (HoverMode = {}));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveDirection; });
var MoveDirection;

(function (MoveDirection) {
  MoveDirection["bottom"] = "bottom";
  MoveDirection["bottomLeft"] = "bottom-left";
  MoveDirection["bottomRight"] = "bottom-right";
  MoveDirection["left"] = "left";
  MoveDirection["none"] = "none";
  MoveDirection["right"] = "right";
  MoveDirection["top"] = "top";
  MoveDirection["topLeft"] = "top-left";
  MoveDirection["topRight"] = "top-right";
})(MoveDirection || (MoveDirection = {}));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonMaskType; });
var PolygonMaskType;

(function (PolygonMaskType) {
  PolygonMaskType["inline"] = "inline";
  PolygonMaskType["inside"] = "inside";
  PolygonMaskType["outside"] = "outside";
  PolygonMaskType["none"] = "none";
})(PolygonMaskType || (PolygonMaskType = {}));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotateDirection; });
var RotateDirection;

(function (RotateDirection) {
  RotateDirection["clockwise"] = "clockwise";
  RotateDirection["counterClockwise"] = "counter-clockwise";
  RotateDirection["random"] = "random";
})(RotateDirection || (RotateDirection = {}));

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonMaskInlineArrangement; });
var PolygonMaskInlineArrangement;

(function (PolygonMaskInlineArrangement) {
  PolygonMaskInlineArrangement["equidistant"] = "equidistant";
  PolygonMaskInlineArrangement["onePerPoint"] = "one-per-point";
  PolygonMaskInlineArrangement["perPoint"] = "per-point";
  PolygonMaskInlineArrangement["randomLength"] = "random-length";
  PolygonMaskInlineArrangement["randomPoint"] = "random-point";
})(PolygonMaskInlineArrangement || (PolygonMaskInlineArrangement = {}));

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestroyType; });
var DestroyType;

(function (DestroyType) {
  DestroyType["none"] = "none";
  DestroyType["max"] = "max";
  DestroyType["min"] = "min";
})(DestroyType || (DestroyType = {}));

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Particle_Particle; });

// EXTERNAL MODULE: ./dist/Enums/ShapeType.js
var ShapeType = __webpack_require__(1);

// EXTERNAL MODULE: ./dist/Enums/OutMode.js
var OutMode = __webpack_require__(5);

// EXTERNAL MODULE: ./dist/Utils/Utils.js
var Utils = __webpack_require__(0);

// EXTERNAL MODULE: ./dist/Enums/Modes/HoverMode.js
var HoverMode = __webpack_require__(9);

// CONCATENATED MODULE: ./dist/Core/Particle/Mover.js


class Mover_Mover {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  static calcNoiseValue(input, size, noiseValue) {
    return Math.floor(input / size) / noiseValue.value + noiseValue.offset;
  }

  move(delta) {
    var _a;

    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const particlesOptions = particle.particlesOptions;

    if (particlesOptions.move.enable) {
      const slowFactor = this.getProximitySpeedFactor();
      const deltaFactor = options.fpsLimit > 0 ? 60 * delta / 1000 : 3.6;
      const baseSpeed = (_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed;
      const moveSpeed = baseSpeed / 2 * slowFactor * deltaFactor;
      const noiseOptions = particlesOptions.move.noise;
      const noiseEnabled = noiseOptions.enable;

      if (noiseEnabled) {
        if (particle.lastNoiseTime > particle.noiseDelay) {
          const position = particle.position;
          const noiseFactor = noiseOptions.factor;
          const simplex = container.simplex;
          const noise = {
            angle: simplex.noise3D(Mover_Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.horizontal), Mover_Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.horizontal), container.particles.noiseZ),
            length: simplex.noise3D(Mover_Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.vertical), Mover_Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.vertical), container.particles.noiseZ)
          };
          particle.velocity.horizontal += Math.cos(noise.angle) * noise.length;
          particle.velocity.horizontal = Utils["a" /* Utils */].clamp(particle.velocity.horizontal, -1, 1);
          particle.velocity.vertical += Math.sin(noise.angle) * noise.length;
          particle.velocity.vertical = Utils["a" /* Utils */].clamp(particle.velocity.vertical, -1, 1);
          particle.lastNoiseTime -= particle.noiseDelay;
        } else {
          particle.lastNoiseTime += delta;
        }
      }

      particle.position.x += particle.velocity.horizontal * moveSpeed;
      particle.position.y += particle.velocity.vertical * moveSpeed;

      if (particlesOptions.move.vibrate) {
        particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
        particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
      }
    }

    this.moveParallax(delta);
  }

  moveParallax(_delta) {
    const container = this.container;
    const options = container.options;

    if (!options.interactivity.events.onHover.parallax.enable) {
      return;
    }

    const particle = this.particle;
    const parallaxForce = options.interactivity.events.onHover.parallax.force;
    const mousePos = container.interactivity.mouse.position;

    if (!mousePos) {
      return;
    }

    const windowDimension = {
      height: window.innerHeight / 2,
      width: window.innerWidth / 2
    };
    const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
    const tmp = {
      x: (mousePos.x - windowDimension.width) * (particle.size.value / parallaxForce),
      y: (mousePos.y - windowDimension.height) * (particle.size.value / parallaxForce)
    };
    particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
    particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
  }

  getProximitySpeedFactor() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const active = Utils["a" /* Utils */].isInArray(HoverMode["a" /* HoverMode */].slow, options.interactivity.events.onHover.mode);

    if (!active) {
      return 1;
    }

    const mousePos = this.container.interactivity.mouse.position;

    if (!mousePos) {
      return 1;
    }

    const particlePos = particle.getPosition();
    const dist = Utils["a" /* Utils */].getDistance(mousePos, particlePos);
    const radius = container.retina.slowModeRadius;

    if (dist > radius) {
      return 1;
    }

    const proximityFactor = dist / radius || 0;
    const slowFactor = options.interactivity.modes.slow.factor;
    return proximityFactor / slowFactor;
  }

}
// EXTERNAL MODULE: ./dist/Enums/RotateDirection.js
var RotateDirection = __webpack_require__(12);

// CONCATENATED MODULE: ./dist/Enums/SizeAnimationStatus.js
var SizeAnimationStatus;

(function (SizeAnimationStatus) {
  SizeAnimationStatus[SizeAnimationStatus["increasing"] = 0] = "increasing";
  SizeAnimationStatus[SizeAnimationStatus["decreasing"] = 1] = "decreasing";
})(SizeAnimationStatus || (SizeAnimationStatus = {}));
// CONCATENATED MODULE: ./dist/Enums/OpacityAnimationStatus.js
var OpacityAnimationStatus;

(function (OpacityAnimationStatus) {
  OpacityAnimationStatus[OpacityAnimationStatus["increasing"] = 0] = "increasing";
  OpacityAnimationStatus[OpacityAnimationStatus["decreasing"] = 1] = "decreasing";
})(OpacityAnimationStatus || (OpacityAnimationStatus = {}));
// CONCATENATED MODULE: ./dist/Core/Particle/Updater.js






class Updater_Updater {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
    this.mover = new Mover_Mover(container, particle);
  }

  static checkBounds(coordinate, radius, size, velocity, outside) {
    if (coordinate + radius > size && velocity > 0 || coordinate - radius < 0 && velocity < 0) {
      outside();
    }
  }

  update(delta) {
    this.mover.move(delta);
    this.updateOpacity(delta);
    this.updateSize(delta);
    this.updateAngle(delta);
    this.fixOutOfCanvasPosition(delta);
    this.updateOutMode(delta);
  }

  updateOpacity(delta) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const deltaFactor = options.fpsLimit > 0 ? 60 * delta / 1000 : 3.6;

    if (particle.particlesOptions.opacity.animation.enable) {
      switch (particle.opacity.status) {
        case OpacityAnimationStatus.increasing:
          if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
            particle.opacity.status = OpacityAnimationStatus.decreasing;
          } else {
            particle.opacity.value += (particle.opacity.velocity || 0) * deltaFactor;
          }

          break;

        case OpacityAnimationStatus.decreasing:
          if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
            particle.opacity.status = OpacityAnimationStatus.increasing;
          } else {
            particle.opacity.value -= (particle.opacity.velocity || 0) * deltaFactor;
          }

          break;
      }

      if (particle.opacity.value < 0) {
        particle.opacity.value = 0;
      }
    }
  }

  updateSize(delta) {
    var _a;

    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const deltaFactor = options.fpsLimit > 0 ? 60 * delta / 1000 : 3.6;

    if (particle.particlesOptions.size.animation.enable) {
      switch (particle.size.status) {
        case SizeAnimationStatus.increasing:
          if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
            particle.size.status = SizeAnimationStatus.decreasing;
          } else {
            particle.size.value += (particle.size.velocity || 0) * deltaFactor;
          }

          break;

        case SizeAnimationStatus.decreasing:
          if (particle.size.value <= particle.particlesOptions.size.animation.minimumValue) {
            particle.size.status = SizeAnimationStatus.increasing;
          } else {
            particle.size.value -= (particle.size.velocity || 0) * deltaFactor;
          }

      }

      if (particle.size.value < 0) {
        particle.size.value = 0;
      }
    }
  }

  updateAngle(delta) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const deltaFactor = options.fpsLimit > 0 ? 60 * delta / 1000 : 3.6;

    if (particle.particlesOptions.rotate.animation.enable) {
      switch (particle.rotateDirection) {
        case RotateDirection["a" /* RotateDirection */].clockwise:
          particle.angle += particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;

          if (particle.angle > 360) {
            particle.angle -= 360;
          }

          break;

        case RotateDirection["a" /* RotateDirection */].counterClockwise:
        default:
          particle.angle -= particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;

          if (particle.angle < 0) {
            particle.angle += 360;
          }

          break;
      }
    }
  }

  fixOutOfCanvasPosition(_delta) {
    const container = this.container;
    const particle = this.particle;
    const outMode = particle.particlesOptions.move.outMode;
    const canvasSize = container.canvas.size;
    let newPos;

    if (outMode === OutMode["a" /* OutMode */].bounce) {
      newPos = {
        bottom: canvasSize.height,
        left: particle.size.value,
        right: canvasSize.width,
        top: particle.size.value
      };
    } else if (outMode === OutMode["a" /* OutMode */].bounceHorizontal) {
      newPos = {
        bottom: canvasSize.height + particle.size.value - particle.offset.y,
        left: particle.size.value,
        right: canvasSize.width,
        top: -particle.size.value - particle.offset.y
      };
    } else if (outMode === OutMode["a" /* OutMode */].bounceVertical) {
      newPos = {
        bottom: canvasSize.height,
        left: -particle.size.value - particle.offset.x,
        right: canvasSize.width + particle.size.value + particle.offset.x,
        top: particle.size.value
      };
    } else {
      newPos = {
        bottom: canvasSize.height + particle.size.value - particle.offset.y,
        left: -particle.size.value - particle.offset.x,
        right: canvasSize.width + particle.size.value + particle.offset.x,
        top: -particle.size.value - particle.offset.y
      };
    }

    if (outMode === OutMode["a" /* OutMode */].destroy) {
      const sizeValue = particle.size.value;

      if (!Utils["a" /* Utils */].isPointInside(particle.position, container.canvas.size, sizeValue)) {
        container.particles.remove(particle);
      }
    } else {
      const sizeValue = particle.size.value;
      const nextBounds = Utils["a" /* Utils */].calculateBounds(particle.position, sizeValue);

      if (nextBounds.left > canvasSize.width - particle.offset.x) {
        particle.position.x = newPos.left;
        particle.position.y = Math.random() * canvasSize.height;
      } else if (nextBounds.right < -particle.offset.x) {
        particle.position.x = newPos.right;
        particle.position.y = Math.random() * canvasSize.height;
      }

      if (nextBounds.top > canvasSize.height - particle.offset.y) {
        particle.position.x = Math.random() * canvasSize.width;
        particle.position.y = newPos.top;
      } else if (nextBounds.bottom < -particle.offset.y) {
        particle.position.x = Math.random() * canvasSize.width;
        particle.position.y = newPos.bottom;
      }
    }
  }

  updateOutMode(delta) {
    const particle = this.particle;

    switch (particle.particlesOptions.move.outMode) {
      case OutMode["a" /* OutMode */].bounce:
      case OutMode["a" /* OutMode */].bounceVertical:
      case OutMode["a" /* OutMode */].bounceHorizontal:
        this.updateBounce(delta);
        break;
    }
  }

  updateBounce(delta) {
    const container = this.container;
    const particle = this.particle;
    let handled = false;

    for (const id in container.plugins) {
      const plugin = container.plugins[id];

      if (plugin.particleBounce !== undefined) {
        handled = plugin.particleBounce(particle, delta);
      }

      if (handled) {
        break;
      }
    }

    if (!handled) {
      const outMode = particle.particlesOptions.move.outMode;
      const pos = particle.getPosition();

      if (outMode === OutMode["a" /* OutMode */].bounce || outMode === OutMode["a" /* OutMode */].bounceHorizontal) {
        const size = particle.size.value;
        const velocity = particle.velocity.horizontal;
        Updater_Updater.checkBounds(pos.x, size, container.canvas.size.width, velocity, () => {
          particle.velocity.horizontal *= -1;
        });
      }

      if (outMode === OutMode["a" /* OutMode */].bounce || outMode === OutMode["a" /* OutMode */].bounceVertical) {
        const size = particle.size.value;
        const velocity = particle.velocity.vertical;
        Updater_Updater.checkBounds(pos.y, size, container.canvas.size.height, velocity, () => {
          particle.velocity.vertical *= -1;
        });
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/PolygonMaskType.js
var PolygonMaskType = __webpack_require__(11);

// EXTERNAL MODULE: ./dist/Utils/ColorUtils.js
var ColorUtils = __webpack_require__(2);

// EXTERNAL MODULE: ./dist/Options/Classes/Particles/Particles.js + 25 modules
var Particles = __webpack_require__(19);

// EXTERNAL MODULE: ./dist/Options/Classes/Particles/Shape/Shape.js + 4 modules
var Shape = __webpack_require__(20);

// EXTERNAL MODULE: ./dist/Enums/StartValueType.js
var StartValueType = __webpack_require__(17);

// EXTERNAL MODULE: ./dist/Utils/Plugins.js
var Plugins = __webpack_require__(6);

// CONCATENATED MODULE: ./dist/Core/Particle.js












class Particle_Particle {
  constructor(container, position, overrideOptions) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;

    this.container = container;
    this.fill = true;
    this.close = true;
    this.links = [];
    this.lastNoiseTime = 0;
    this.destroyed = false;
    const options = container.options;
    const particlesOptions = new Particles["a" /* Particles */]();
    particlesOptions.load(options.particles);

    if ((overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) !== undefined) {
      const shapeType = (_a = overrideOptions.shape.type) !== null && _a !== void 0 ? _a : particlesOptions.shape.type;
      this.shape = shapeType instanceof Array ? Utils["a" /* Utils */].itemFromArray(shapeType) : shapeType;
      const shapeOptions = new Shape["a" /* Shape */]();
      shapeOptions.load(overrideOptions.shape);

      if (this.shape !== undefined) {
        const shapeData = shapeOptions.options[this.shape];

        if (shapeData !== undefined) {
          this.shapeData = Utils["a" /* Utils */].deepExtend({}, shapeData instanceof Array ? Utils["a" /* Utils */].itemFromArray(shapeData) : shapeData);
          this.fill = (_c = (_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.fill) !== null && _c !== void 0 ? _c : this.fill;
          this.close = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.close) !== null && _e !== void 0 ? _e : this.close;
        }
      }
    } else {
      const shapeType = particlesOptions.shape.type;
      this.shape = shapeType instanceof Array ? Utils["a" /* Utils */].itemFromArray(shapeType) : shapeType;
      const shapeData = particlesOptions.shape.options[this.shape];

      if (shapeData) {
        this.shapeData = Utils["a" /* Utils */].deepExtend({}, shapeData instanceof Array ? Utils["a" /* Utils */].itemFromArray(shapeData) : shapeData);
        this.fill = (_g = (_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.fill) !== null && _g !== void 0 ? _g : this.fill;
        this.close = (_j = (_h = this.shapeData) === null || _h === void 0 ? void 0 : _h.close) !== null && _j !== void 0 ? _j : this.close;
      }
    }

    if (overrideOptions !== undefined) {
      particlesOptions.load(overrideOptions);
    }

    if (((_k = this.shapeData) === null || _k === void 0 ? void 0 : _k.particles) !== undefined) {
      particlesOptions.load((_l = this.shapeData) === null || _l === void 0 ? void 0 : _l.particles);
    }

    this.particlesOptions = particlesOptions;
    const noiseDelay = this.particlesOptions.move.noise.delay;
    this.noiseDelay = (noiseDelay.random.enable ? Utils["a" /* Utils */].randomInRange(noiseDelay.random.minimumValue, noiseDelay.value) : noiseDelay.value) * 1000;
    container.retina.initParticle(this);
    const color = this.particlesOptions.color;
    const sizeValue = (_m = this.sizeValue) !== null && _m !== void 0 ? _m : container.retina.sizeValue;
    const randomSize = typeof this.particlesOptions.size.random === "boolean" ? this.particlesOptions.size.random : this.particlesOptions.size.random.enable;
    this.size = {
      value: randomSize && this.randomMinimumSize !== undefined ? Utils["a" /* Utils */].randomInRange(this.randomMinimumSize, sizeValue) : sizeValue
    };
    this.direction = this.particlesOptions.move.direction;
    this.bubble = {};
    this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;

    if (this.particlesOptions.rotate.direction == RotateDirection["a" /* RotateDirection */].random) {
      const index = Math.floor(Math.random() * 2);

      if (index > 0) {
        this.rotateDirection = RotateDirection["a" /* RotateDirection */].counterClockwise;
      } else {
        this.rotateDirection = RotateDirection["a" /* RotateDirection */].clockwise;
      }
    } else {
      this.rotateDirection = this.particlesOptions.rotate.direction;
    }

    if (this.particlesOptions.size.animation.enable) {
      switch (this.particlesOptions.size.animation.startValue) {
        case StartValueType["a" /* StartValueType */].min:
          if (!randomSize) {
            const pxRatio = container.retina.pixelRatio;
            this.size.value = this.particlesOptions.size.animation.minimumValue * pxRatio;
          }

          break;
      }

      this.size.status = SizeAnimationStatus.increasing;
      this.size.velocity = ((_o = this.sizeAnimationSpeed) !== null && _o !== void 0 ? _o : container.retina.sizeAnimationSpeed) / 100;

      if (!this.particlesOptions.size.animation.sync) {
        this.size.velocity = this.size.velocity * Math.random();
      }
    }

    if (this.particlesOptions.rotate.animation.enable) {
      if (!this.particlesOptions.rotate.animation.sync) {
        this.angle = Math.random() * 360;
      }
    }

    this.position = this.calcPosition(this.container, position);

    if (options.polygon.enable && options.polygon.type === PolygonMaskType["a" /* PolygonMaskType */].inline) {
      this.initialPosition = {
        x: this.position.x,
        y: this.position.y
      };
    }

    this.offset = {
      x: 0,
      y: 0
    };

    if (this.particlesOptions.collisions.enable) {
      this.checkOverlap(position);
    }

    if (color instanceof Array) {
      this.color = ColorUtils["a" /* ColorUtils */].colorToRgb(Utils["a" /* Utils */].itemFromArray(color));
    } else {
      this.color = ColorUtils["a" /* ColorUtils */].colorToRgb(color);
    }

    const randomOpacity = this.particlesOptions.opacity.random;
    const opacityValue = this.particlesOptions.opacity.value;
    this.opacity = {
      value: randomOpacity.enable ? Utils["a" /* Utils */].randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue
    };

    if (this.particlesOptions.opacity.animation.enable) {
      this.opacity.status = OpacityAnimationStatus.increasing;
      this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;

      if (!this.particlesOptions.opacity.animation.sync) {
        this.opacity.velocity *= Math.random();
      }
    }

    this.initialVelocity = this.calculateVelocity();
    this.velocity = {
      horizontal: this.initialVelocity.horizontal,
      vertical: this.initialVelocity.vertical
    };
    let drawer = container.drawers[this.shape];

    if (!drawer) {
      drawer = Plugins["a" /* Plugins */].getShapeDrawer(this.shape);
      container.drawers[this.shape] = drawer;
    }

    if (this.shape === ShapeType["a" /* ShapeType */].image || this.shape === ShapeType["a" /* ShapeType */].images) {
      const shape = this.particlesOptions.shape;
      const imageDrawer = drawer;
      const imagesOptions = shape.options[this.shape];
      const images = imageDrawer.getImages(container).images;
      const index = Utils["a" /* Utils */].arrayRandomIndex(images);
      const image = images[index];
      const optionsImage = imagesOptions instanceof Array ? imagesOptions.filter(t => t.src === image.source)[0] : imagesOptions;

      if ((image === null || image === void 0 ? void 0 : image.svgData) !== undefined && optionsImage.replaceColor && this.color) {
        const svgColoredData = Utils["a" /* Utils */].replaceColorSvg(image, this.color, this.opacity.value);
        const svg = new Blob([svgColoredData], {
          type: "image/svg+xml"
        });
        const domUrl = window.URL || window.webkitURL || window;
        const url = domUrl.createObjectURL(svg);
        const img = new Image();
        this.image = {
          data: image,
          loaded: false,
          ratio: optionsImage.width / optionsImage.height,
          replaceColor: (_p = optionsImage.replaceColor) !== null && _p !== void 0 ? _p : optionsImage.replace_color,
          source: optionsImage.src
        };
        img.addEventListener("load", e => {
          if (this.image) {
            this.image.loaded = true;
            image.element = img;
          }

          domUrl.revokeObjectURL(url);
        });
        img.addEventListener("error", e => {
          domUrl.revokeObjectURL(url);
          Utils["a" /* Utils */].loadImage(optionsImage.src).then(img2 => {
            if (this.image) {
              image.element = img2.element;
              this.image.loaded = true;
            }
          });
        });
        img.src = url;
      } else {
        this.image = {
          data: image,
          loaded: true,
          ratio: optionsImage.width / optionsImage.height,
          replaceColor: (_q = optionsImage.replaceColor) !== null && _q !== void 0 ? _q : optionsImage.replace_color,
          source: optionsImage.src
        };
      }

      if (!this.image.ratio) {
        this.image.ratio = 1;
      }

      this.fill = (_r = optionsImage.fill) !== null && _r !== void 0 ? _r : this.fill;
      this.close = (_s = optionsImage.close) !== null && _s !== void 0 ? _s : this.close;
    }

    this.stroke = this.particlesOptions.stroke instanceof Array ? Utils["a" /* Utils */].itemFromArray(this.particlesOptions.stroke) : this.particlesOptions.stroke;
    this.strokeColor = typeof this.stroke.color === "string" ? ColorUtils["a" /* ColorUtils */].stringToRgb(this.stroke.color) : ColorUtils["a" /* ColorUtils */].colorToRgb(this.stroke.color);
    this.shadowColor = typeof this.particlesOptions.shadow.color === "string" ? ColorUtils["a" /* ColorUtils */].stringToRgb(this.particlesOptions.shadow.color) : ColorUtils["a" /* ColorUtils */].colorToRgb(this.particlesOptions.shadow.color);
    this.updater = new Updater_Updater(this.container, this);
  }

  update(index, delta) {
    this.links = [];
    this.updater.update(delta);
  }

  draw(delta) {
    var _a;

    if (((_a = this.image) === null || _a === void 0 ? void 0 : _a.loaded) === false) {
      return;
    }

    this.container.canvas.drawParticle(this, delta);
  }

  isOverlapping() {
    const container = this.container;
    const p1 = this;
    let collisionFound = false;
    let iterations = 0;
    const pos1 = p1.getPosition();

    for (const p2 of container.particles.array.filter(t => t != p1)) {
      iterations++;
      const pos2 = p2.getPosition();
      const dist = Utils["a" /* Utils */].getDistance(pos1, pos2);

      if (dist <= p1.size.value + p2.size.value) {
        collisionFound = true;
        break;
      }
    }

    return {
      collisionFound: collisionFound,
      iterations: iterations
    };
  }

  checkOverlap(position) {
    const container = this.container;
    const p = this;
    const overlapResult = p.isOverlapping();

    if (overlapResult.iterations >= container.particles.count) {
      container.particles.remove(this);
    } else if (overlapResult.collisionFound) {
      p.position.x = position ? position.x : Math.random() * container.canvas.size.width;
      p.position.y = position ? position.y : Math.random() * container.canvas.size.height;
      p.checkOverlap();
    }
  }

  startInfection(stage) {
    const container = this.container;
    const options = container.options;
    const stages = options.infection.stages;
    const stagesCount = stages.length;

    if (stage > stagesCount || stage < 0) {
      return;
    }

    this.infectionDelay = 0;
    this.infectionDelayStage = stage;
  }

  updateInfectionStage(stage) {
    const container = this.container;
    const options = container.options;
    const stagesCount = options.infection.stages.length;

    if (stage > stagesCount || stage < 0 || this.infectionStage !== undefined && this.infectionStage > stage) {
      return;
    }

    if (this.infectionTimeout !== undefined) {
      window.clearTimeout(this.infectionTimeout);
    }

    this.infectionStage = stage;
    this.infectionTime = 0;
  }

  updateInfection(delta) {
    const container = this.container;
    const options = container.options;
    const infection = options.infection;
    const stages = options.infection.stages;
    const stagesCount = stages.length;

    if (this.infectionDelay !== undefined && this.infectionDelayStage !== undefined) {
      const stage = this.infectionDelayStage;

      if (stage > stagesCount || stage < 0) {
        return;
      }

      if (this.infectionDelay > infection.delay * 1000) {
        this.infectionStage = stage;
        this.infectionTime = 0;
        delete this.infectionDelay;
        delete this.infectionDelayStage;
      } else {
        this.infectionDelay += delta;
      }
    } else {
      delete this.infectionDelay;
      delete this.infectionDelayStage;
    }

    if (this.infectionStage !== undefined && this.infectionTime !== undefined) {
      const infectionStage = stages[this.infectionStage];

      if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
        if (this.infectionTime > infectionStage.duration * 1000) {
          this.nextInfectionStage();
        } else {
          this.infectionTime += delta;
        }
      } else {
        this.infectionTime += delta;
      }
    } else {
      delete this.infectionStage;
      delete this.infectionTime;
    }
  }

  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y
    };
  }

  destroy() {
    this.destroyed = true;
  }

  nextInfectionStage() {
    const container = this.container;
    const options = container.options;
    const stagesCount = options.infection.stages.length;

    if (stagesCount <= 0 || this.infectionStage === undefined) {
      return;
    }

    this.infectionTime = 0;

    if (stagesCount <= ++this.infectionStage) {
      if (options.infection.cure) {
        delete this.infectionStage;
        delete this.infectionTime;
        return;
      } else {
        this.infectionStage = 0;
        this.infectionTime = 0;
      }
    }
  }

  calcPosition(container, position) {
    for (const id in container.plugins) {
      const plugin = container.plugins[id];
      const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position) : undefined;

      if (pluginPos !== undefined) {
        return pluginPos;
      }
    }

    const pos = {
      x: 0,
      y: 0
    };
    pos.x = position ? position.x : Math.random() * container.canvas.size.width;
    pos.y = position ? position.y : Math.random() * container.canvas.size.height;

    if (pos.x > container.canvas.size.width - this.size.value * 2) {
      pos.x -= this.size.value;
    } else if (pos.x < this.size.value * 2) {
      pos.x += this.size.value;
    }

    if (pos.y > container.canvas.size.height - this.size.value * 2) {
      pos.y -= this.size.value;
    } else if (pos.y < this.size.value * 2) {
      pos.y += this.size.value;
    }

    return pos;
  }

  calculateVelocity() {
    const baseVelocity = Utils["a" /* Utils */].getParticleBaseVelocity(this);
    const res = {
      horizontal: 0,
      vertical: 0
    };

    if (this.particlesOptions.move.straight) {
      res.horizontal = baseVelocity.x;
      res.vertical = baseVelocity.y;

      if (this.particlesOptions.move.random) {
        res.horizontal *= Math.random();
        res.vertical *= Math.random();
      }
    } else {
      res.horizontal = baseVelocity.x + Math.random() - 0.5;
      res.vertical = baseVelocity.y + Math.random() - 0.5;
    }

    return res;
  }

}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "tsParticles", function() { return /* binding */ tsParticles; });
__webpack_require__.d(__webpack_exports__, "particlesJS", function() { return /* binding */ particlesJS; });
__webpack_require__.d(__webpack_exports__, "pJSDom", function() { return /* binding */ pJSDom; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(7);

// EXTERNAL MODULE: ./dist/Utils/Constants.js
var Constants = __webpack_require__(4);

// EXTERNAL MODULE: ./dist/Utils/ColorUtils.js
var ColorUtils = __webpack_require__(2);

// CONCATENATED MODULE: ./dist/Utils/CanvasUtils.js

class CanvasUtils_CanvasUtils {
  static paintBase(context, dimension, baseColor) {
    context.save();
    context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
    context.fillRect(0, 0, dimension.width, dimension.height);
    context.restore();
  }

  static clear(context, dimension) {
    context.clearRect(0, 0, dimension.width, dimension.height);
  }

  static drawLinkedLine(context, width, begin, end, backgroundMask, colorLine, opacity, shadow) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
    context.lineWidth = width;

    if (backgroundMask) {
      context.globalCompositeOperation = 'destination-out';
    }

    context.strokeStyle = ColorUtils["a" /* ColorUtils */].getStyleFromColor(colorLine, opacity);

    if (shadow.enable) {
      const shadowColor = typeof shadow.color === "string" ? ColorUtils["a" /* ColorUtils */].stringToRgb(shadow.color) : ColorUtils["a" /* ColorUtils */].colorToRgb(shadow.color);

      if (shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = ColorUtils["a" /* ColorUtils */].getStyleFromColor(shadowColor);
      }
    }

    context.stroke();
  }

  static drawConnectLine(context, width, lineStyle, begin, end) {
    context.save();
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.stroke();
    context.restore();
  }

  static gradient(context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.size.value / p1.size.value);

    if (!p1.color || !p2.color) {
      return;
    }

    const sourcePos = p1.getPosition();
    const destPos = p2.getPosition();
    const midRgb = ColorUtils["a" /* ColorUtils */].mix(p1.color, p2.color, p1.size.value, p2.size.value);
    const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(0, ColorUtils["a" /* ColorUtils */].getStyleFromColor(p1.color, opacity));
    grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils["a" /* ColorUtils */].getStyleFromColor(midRgb, opacity));
    grad.addColorStop(1, ColorUtils["a" /* ColorUtils */].getStyleFromColor(p2.color, opacity));
    return grad;
  }

  static drawGrabLine(context, width, begin, end, colorLine, opacity) {
    context.save();
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
    context.strokeStyle = ColorUtils["a" /* ColorUtils */].getStyleFromColor(colorLine, opacity);
    context.lineWidth = width;
    context.stroke();
    context.restore();
  }

  static drawParticle(container, context, particle, delta, colorValue, backgroundMask, radius, opacity, shadow) {
    const pos = particle.getPosition();
    context.save();
    context.translate(pos.x, pos.y);
    context.beginPath();

    if (particle.angle !== 0) {
      context.rotate(particle.angle * Math.PI / 180);
    }

    if (backgroundMask) {
      context.globalCompositeOperation = "destination-out";
    }

    const shadowColor = particle.shadowColor;

    if (shadow.enable && shadowColor) {
      context.shadowBlur = shadow.blur;
      context.shadowColor = ColorUtils["a" /* ColorUtils */].getStyleFromColor(shadowColor);
      context.shadowOffsetX = shadow.offset.x;
      context.shadowOffsetY = shadow.offset.y;
    }

    context.fillStyle = colorValue;
    const stroke = particle.stroke;

    if (stroke.width > 0 && particle.strokeColor) {
      context.strokeStyle = ColorUtils["a" /* ColorUtils */].getStyleFromColor(particle.strokeColor, particle.stroke.opacity);
      context.lineWidth = stroke.width;
    }

    this.drawShape(container, context, particle, radius, opacity, delta);

    if (particle.close) {
      context.closePath();
    }

    if (stroke.width > 0 && particle.strokeColor) {
      context.stroke();
    }

    if (particle.fill) {
      context.fill();
    }

    context.restore();
    context.save();
    context.translate(pos.x, pos.y);

    if (particle.angle !== 0) {
      context.rotate(particle.angle * Math.PI / 180);
    }

    if (backgroundMask) {
      context.globalCompositeOperation = "destination-out";
    }

    this.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
    context.restore();
  }

  static drawShape(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
      return;
    }

    const drawer = container.drawers[particle.shape];

    if (!drawer) {
      return;
    }

    drawer.draw(context, particle, radius, opacity, delta);
  }

  static drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
      return;
    }

    const drawer = container.drawers[particle.shape];

    if (!drawer) {
      return;
    }

    if (drawer.afterEffect !== undefined) {
      drawer.afterEffect(context, particle, radius, opacity, delta);
    }
  }

  static drawPlugin(context, plugin, delta) {
    context.save();

    if (plugin.draw !== undefined) {
      plugin.draw(context, delta);
    }

    context.restore();
  }

}
// CONCATENATED MODULE: ./dist/Core/Canvas.js



class Canvas_Canvas {
  constructor(container) {
    this.container = container;
    this.size = {
      height: 0,
      width: 0
    };
    this.context = null;
    this.generatedCanvas = false;
  }

  init() {
    this.resize();
    const container = this.container;
    const options = container.options;
    const cover = options.backgroundMask.cover;
    const color = cover.color;
    const trail = options.particles.move.trail;
    this.coverColor = ColorUtils["a" /* ColorUtils */].colorToRgb(color);
    this.trailFillColor = ColorUtils["a" /* ColorUtils */].colorToRgb(trail.fillColor);
    this.paint();
  }

  loadCanvas(canvas, generatedCanvas) {
    var _a;

    if (!canvas.className) {
      canvas.className = Constants["a" /* Constants */].canvasClass;
    }

    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }

    this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
    this.element = canvas;
    this.size.height = canvas.offsetHeight;
    this.size.width = canvas.offsetWidth;
    this.context = this.element.getContext("2d");
    this.container.retina.init();
    this.initBackground();
  }

  destroy() {
    var _a;

    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }

    if (this.context) {
      CanvasUtils_CanvasUtils.clear(this.context, this.size);
    }
  }

  resize() {
    if (this.element) {
      this.element.width = this.size.width;
      this.element.height = this.size.height;
    }
  }

  paint() {
    const container = this.container;
    const options = container.options;

    if (this.context) {
      if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
        this.paintBase(ColorUtils["a" /* ColorUtils */].getStyleFromColor(this.coverColor));
      } else {
        this.paintBase();
      }
    }
  }

  clear() {
    const container = this.container;
    const options = container.options;
    const trail = options.particles.move.trail;

    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > 0 && this.trailFillColor) {
      this.paintBase(ColorUtils["a" /* ColorUtils */].getStyleFromColor(this.trailFillColor, 1 / trail.length));
    } else if (this.context) {
      CanvasUtils_CanvasUtils.clear(this.context, this.size);
    }
  }

  isPointInPath(path, point) {
    var _a, _b;

    return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
  }

  drawLinkedLine(p1, link) {
    var _a;

    const container = this.container;
    const options = container.options;
    const p2 = link.destination;
    let opacity = link.opacity;
    const pos1 = p1.getPosition();
    const pos2 = p2.getPosition();
    const ctx = this.context;

    if (!ctx) {
      return;
    }

    let colorLine;
    const twinkle = p1.particlesOptions.twinkle.lines;

    if (twinkle.enable) {
      const twinkleFreq = twinkle.frequency;
      const twinkleColor = typeof twinkle.color === "string" ? {
        value: twinkle.color
      } : twinkle.color;
      const twinkleRgb = twinkleColor !== undefined ? ColorUtils["a" /* ColorUtils */].colorToRgb(twinkleColor) : undefined;
      const twinkling = Math.random() < twinkleFreq;

      if (twinkling && twinkleRgb !== undefined) {
        colorLine = twinkleRgb;
        opacity = twinkle.opacity;
      }
    }

    if (!colorLine) {
      if (container.particles.lineLinkedColor === Constants["a" /* Constants */].randomColorValue) {
        colorLine = ColorUtils["a" /* ColorUtils */].getRandomRgbColor();
      } else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
        const sourceColor = p1.color;
        const destColor = p2.color;
        colorLine = ColorUtils["a" /* ColorUtils */].mix(sourceColor, destColor, p1.size.value, p2.size.value);
      } else {
        colorLine = container.particles.lineLinkedColor;
      }
    }

    const width = (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth;
    CanvasUtils_CanvasUtils.drawLinkedLine(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.lineLinked.shadow);
  }

  drawConnectLine(p1, p2) {
    var _a;

    const lineStyle = this.lineStyle(p1, p2);

    if (!lineStyle) {
      return;
    }

    const ctx = this.context;

    if (!ctx) {
      return;
    }

    const pos1 = p1.getPosition();
    const pos2 = p2.getPosition();
    CanvasUtils_CanvasUtils.drawConnectLine(ctx, (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : this.container.retina.lineLinkedWidth, lineStyle, pos1, pos2);
  }

  drawGrabLine(particle, opacity, mousePos) {
    var _a;

    const container = this.container;
    const optColor = particle.particlesOptions.lineLinked.color;
    let lineColor = container.particles.grabLineColor || (typeof optColor === "string" ? ColorUtils["a" /* ColorUtils */].stringToRgb(optColor) : ColorUtils["a" /* ColorUtils */].colorToRgb(optColor));

    if (lineColor == Constants["a" /* Constants */].randomColorValue) {
      lineColor = ColorUtils["a" /* ColorUtils */].getRandomRgbColor();
    }

    container.particles.grabLineColor = lineColor;
    const ctx = container.canvas.context;

    if (!ctx) {
      return;
    }

    let colorLine;

    if (container.particles.grabLineColor === Constants["a" /* Constants */].randomColorValue) {
      colorLine = ColorUtils["a" /* ColorUtils */].getRandomRgbColor();
    } else {
      colorLine = container.particles.grabLineColor;
    }

    if (colorLine === undefined) {
      return;
    }

    const beginPos = particle.getPosition();
    CanvasUtils_CanvasUtils.drawGrabLine(ctx, (_a = particle.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
  }

  drawParticle(particle, delta) {
    var _a, _b, _c;

    const container = this.container;
    const options = container.options;
    const twinkle = particle.particlesOptions.twinkle.particles;
    const twinkleFreq = twinkle.frequency;
    const twinkleColor = typeof twinkle.color === "string" ? {
      value: twinkle.color
    } : twinkle.color;
    const twinkleRgb = twinkleColor !== undefined ? ColorUtils["a" /* ColorUtils */].colorToRgb(twinkleColor) : undefined;
    const twinkling = twinkle.enable && Math.random() < twinkleFreq;
    const radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
    const opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
    const infectionStage = particle.infectionStage;
    const infection = options.infection;
    const infectionStages = infection.stages;
    const infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
    const infectionRgb = infectionColor ? ColorUtils["a" /* ColorUtils */].colorToRgb(infectionColor) : undefined;
    const color = twinkling && twinkleRgb !== undefined ? twinkleRgb : (_c = infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : particle.bubble.color) !== null && _c !== void 0 ? _c : particle.color;
    const colorValue = color !== undefined ? ColorUtils["a" /* ColorUtils */].getStyleFromColor(color, opacity) : undefined;

    if (!this.context || !colorValue) {
      return;
    }

    this.context.save();

    for (const link of particle.links) {
      this.drawLinkedLine(particle, link);
    }

    this.context.restore();
    CanvasUtils_CanvasUtils.drawParticle(this.container, this.context, particle, delta, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
  }

  drawPlugin(plugin, delta) {
    if (!this.context) {
      return;
    }

    CanvasUtils_CanvasUtils.drawPlugin(this.context, plugin, delta);
  }

  paintBase(baseColor) {
    if (this.context) {
      CanvasUtils_CanvasUtils.paintBase(this.context, this.size, baseColor);
    }
  }

  lineStyle(p1, p2) {
    const container = this.container;
    const options = container.options;
    const connectOptions = options.interactivity.modes.connect;

    if (p1.color && p2.color) {
      if (this.context) {
        return CanvasUtils_CanvasUtils.gradient(this.context, p1, p2, connectOptions.lineLinked.opacity);
      }
    }
  }

  initBackground() {
    const container = this.container;
    const options = container.options;
    const background = options.background;
    const element = this.element;

    if (!element) {
      return;
    }

    const elementStyle = element.style;

    if (background.color) {
      const color = ColorUtils["a" /* ColorUtils */].colorToRgb(background.color);

      if (color) {
        elementStyle.backgroundColor = ColorUtils["a" /* ColorUtils */].getStyleFromColor(color, background.opacity);
      }
    }

    if (background.image) {
      elementStyle.backgroundImage = background.image;
    }

    if (background.position) {
      elementStyle.backgroundPosition = background.position;
    }

    if (background.repeat) {
      elementStyle.backgroundRepeat = background.repeat;
    }

    if (background.size) {
      elementStyle.backgroundSize = background.size;
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/Modes/ClickMode.js
var ClickMode = __webpack_require__(8);

// CONCATENATED MODULE: ./dist/Enums/InteractivityDetect.js
var InteractivityDetect;

(function (InteractivityDetect) {
  InteractivityDetect["canvas"] = "canvas";
  InteractivityDetect["parent"] = "parent";
  InteractivityDetect["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));
// CONCATENATED MODULE: ./dist/Utils/EventListeners.js



class EventListeners_EventListeners {
  constructor(container) {
    this.container = container;
    this.canPush = true;

    this.mouseMoveHandler = e => this.mouseTouchMove(e);

    this.touchStartHandler = e => this.mouseTouchMove(e);

    this.touchMoveHandler = e => this.mouseTouchMove(e);

    this.touchEndHandler = () => this.mouseTouchFinish();

    this.mouseLeaveHandler = () => this.mouseTouchFinish();

    this.touchCancelHandler = () => this.mouseTouchFinish();

    this.touchEndClickHandler = e => this.mouseTouchClick(e);

    this.mouseUpHandler = e => this.mouseTouchClick(e);

    this.visibilityChangeHandler = () => this.handleVisibilityChange();

    this.resizeHandler = () => this.handleWindowResize();
  }

  static manageListener(element, event, handler, add, options) {
    if (add) {
      let addOptions = {
        passive: true
      };

      if (typeof options === "boolean") {
        addOptions.capture = options;
      } else if (options !== undefined) {
        addOptions = options;
      }

      EventListeners_EventListeners.addListener(element, event, handler, addOptions);
    } else {
      EventListeners_EventListeners.removeListener(element, event, handler, options);
    }
  }

  static addListener(element, event, handler, options) {
    element.addEventListener(event, handler, options);
  }

  static removeListener(element, event, handler, options) {
    element.removeEventListener(event, handler, options);
  }

  addListeners() {
    this.manageListeners(true);
  }

  removeListeners() {
    this.manageListeners(false);
  }

  manageListeners(add) {
    const container = this.container;
    const options = container.options;

    if (options.interactivity.detectsOn === InteractivityDetect.window) {
      container.interactivity.element = window;
    } else if (options.interactivity.detectsOn === InteractivityDetect.parent && container.canvas.element) {
      container.interactivity.element = container.canvas.element.parentNode;
    } else {
      container.interactivity.element = container.canvas.element;
    }

    const interactivityEl = container.interactivity.element;

    if (interactivityEl && (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
      EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].mouseMoveEvent, this.mouseMoveHandler, add);
      EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].touchStartEvent, this.touchStartHandler, add);
      EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].touchMoveEvent, this.touchMoveHandler, add);

      if (!options.interactivity.events.onClick.enable) {
        EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].touchEndEvent, this.touchEndHandler, add);
      }

      EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].mouseLeaveEvent, this.mouseLeaveHandler, add);
      EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].touchCancelEvent, this.touchCancelHandler, add);
    }

    if (options.interactivity.events.onClick.enable && interactivityEl) {
      EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].touchEndEvent, this.touchEndClickHandler, add);
      EventListeners_EventListeners.manageListener(interactivityEl, Constants["a" /* Constants */].mouseUpEvent, this.mouseUpHandler, add);
    }

    if (options.interactivity.events.resize) {
      EventListeners_EventListeners.manageListener(window, Constants["a" /* Constants */].resizeEvent, this.resizeHandler, add);
    }

    if (document) {
      EventListeners_EventListeners.manageListener(document, Constants["a" /* Constants */].visibilityChangeEvent, this.visibilityChangeHandler, add, false);
    }
  }

  handleWindowResize() {
    const container = this.container;
    const options = container.options;

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

    for (const id in container.plugins) {
      const plugin = container.plugins[id];

      if (plugin.resize !== undefined) {
        plugin.resize();
      }
    }
  }

  handleVisibilityChange() {
    const container = this.container;
    const options = container.options;

    if (!options.pauseOnBlur) {
      return;
    }

    if (document === null || document === void 0 ? void 0 : document.hidden) {
      container.pageHidden = true;
      container.pause();
    } else {
      container.pageHidden = false;

      if (container.getAnimationStatus()) {
        container.play(true);
      } else {
        container.draw();
      }
    }
  }

  mouseTouchMove(e) {
    var _a, _b, _c, _d;

    const container = this.container;
    const options = container.options;
    let pos;

    if (e.type.startsWith("mouse")) {
      this.canPush = true;
      const mouseEvent = e;

      if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
        return;
      }

      if (container.interactivity.element === window) {
        if (container.canvas.element) {
          const clientRect = container.canvas.element.getBoundingClientRect();
          pos = {
            x: mouseEvent.clientX - clientRect.left,
            y: mouseEvent.clientY - clientRect.top
          };
        }
      } else if (options.interactivity.detectsOn === InteractivityDetect.parent) {
        const source = mouseEvent.target;
        const target = mouseEvent.currentTarget;

        if (source && target) {
          const sourceRect = source.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          pos = {
            x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
            y: mouseEvent.offsetY + sourceRect.top - targetRect.top
          };
        } else {
          pos = {
            x: mouseEvent.offsetX || mouseEvent.clientX,
            y: mouseEvent.offsetY || mouseEvent.clientY
          };
        }
      } else {
        if (mouseEvent.target === container.canvas.element) {
          pos = {
            x: mouseEvent.offsetX || mouseEvent.clientX,
            y: mouseEvent.offsetY || mouseEvent.clientY
          };
        }
      }
    } else {
      this.canPush = e.type !== "touchmove";
      const touchEvent = e;
      const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
      const canvasRect = (_b = container.canvas.element) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
      pos = {
        x: lastTouch.clientX - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _c !== void 0 ? _c : 0),
        y: lastTouch.clientY - ((_d = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _d !== void 0 ? _d : 0)
      };
    }

    container.interactivity.mouse.position = pos;

    if (container.retina.isRetina && container.interactivity.mouse.position) {
      container.interactivity.mouse.position.x *= container.retina.pixelRatio;
      container.interactivity.mouse.position.y *= container.retina.pixelRatio;
    }

    container.interactivity.status = Constants["a" /* Constants */].mouseMoveEvent;
  }

  mouseTouchFinish() {
    const container = this.container;
    delete container.interactivity.mouse.position;
    container.interactivity.status = Constants["a" /* Constants */].mouseLeaveEvent;
  }

  mouseTouchClick(e) {
    const container = this.container;
    const options = container.options;
    let handled = false;
    const mousePosition = container.interactivity.mouse.position;

    if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
      return;
    }

    for (const id in container.plugins) {
      const plugin = container.plugins[id];

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
  }

  doMouseTouchClick(e) {
    const container = this.container;
    const options = container.options;

    if (this.canPush) {
      if (container.interactivity.mouse.position) {
        container.interactivity.mouse.clickPosition = {
          x: container.interactivity.mouse.position.x,
          y: container.interactivity.mouse.position.y
        };
      } else {
        return;
      }

      container.interactivity.mouse.clickTime = new Date().getTime();

      if (options.interactivity.events.onClick.mode instanceof Array) {
        for (const mode of options.interactivity.events.onClick.mode) {
          this.handleClickMode(mode);
        }
      } else {
        const mode = options.interactivity.events.onClick.mode;
        this.handleClickMode(mode);
      }
    }

    if (e.type === "touchend") {
      setTimeout(() => this.mouseTouchFinish(), 500);
    }
  }

  handleClickMode(mode) {
    const container = this.container;
    const options = container.options;
    const pushNb = options.interactivity.modes.push.quantity;
    const removeNb = options.interactivity.modes.remove.quantity;

    switch (mode) {
      case ClickMode["a" /* ClickMode */].push:
        if (options.particles.move.enable) {
          container.particles.push(pushNb, container.interactivity.mouse);
        } else {
          if (options.interactivity.modes.push.quantity === 1) {
            container.particles.push(pushNb, container.interactivity.mouse);
          } else if (options.interactivity.modes.push.quantity > 1) {
            container.particles.push(pushNb);
          }
        }

        break;

      case ClickMode["a" /* ClickMode */].remove:
        container.particles.removeQuantity(removeNb);
        break;

      case ClickMode["a" /* ClickMode */].bubble:
        container.bubble.clicking = true;
        break;

      case ClickMode["a" /* ClickMode */].repulse:
        container.repulse.clicking = true;
        container.repulse.count = 0;

        for (const particle of container.repulse.particles) {
          particle.velocity.horizontal = particle.initialVelocity.horizontal;
          particle.velocity.vertical = particle.initialVelocity.vertical;
        }

        container.repulse.particles = [];
        container.repulse.finish = false;
        setTimeout(() => {
          if (!container.destroyed) {
            container.repulse.clicking = false;
          }
        }, options.interactivity.modes.repulse.duration * 1000);
        break;
    }

    for (const id in container.plugins) {
      const plugin = container.plugins[id];

      if (plugin.handleClickMode) {
        plugin.handleClickMode(mode);
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Core/Particle.js + 4 modules
var Particle = __webpack_require__(15);

// EXTERNAL MODULE: ./dist/Utils/Utils.js
var Utils = __webpack_require__(0);

// CONCATENATED MODULE: ./dist/Utils/Range.js
class Range {
  constructor(x, y) {
    this.position = {
      x: x,
      y: y
    };
  }

}
// CONCATENATED MODULE: ./dist/Utils/Circle.js

class Circle_Circle extends Range {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  contains(point) {
    const d = Math.pow(point.x - this.position.x, 2) + Math.pow(point.y - this.position.y, 2);
    return d <= this.radius * this.radius;
  }

  intersects(range) {
    const rect = range;
    const circle = range;
    const pos1 = this.position;
    const pos2 = range.position;
    const xDist = Math.abs(pos2.x - pos1.x);
    const yDist = Math.abs(pos2.y - pos1.y);
    const r = this.radius;

    if (circle.radius !== undefined) {
      const r2 = circle.radius;
      const rSum = r + r2;
      const dist = Math.sqrt(xDist * xDist + yDist + yDist);
      return rSum > dist;
    } else if (rect.size !== undefined) {
      const w = rect.size.width;
      const h = rect.size.height;
      const edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);

      if (xDist > r + w || yDist > r + h) {
        return false;
      }

      if (xDist <= w || yDist <= h) {
        return true;
      }

      return edges <= r * r;
    }

    return false;
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Particles/Linker.js




class Linker_Linker {
  static link(p1, container, _delta) {
    var _a;

    const optOpacity = p1.particlesOptions.lineLinked.opacity;
    const optDistance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
    const pos1 = p1.getPosition();
    const query = container.particles.quadTree.query(new Circle_Circle(pos1.x, pos1.y, optDistance));

    for (const p2 of query) {
      if (p1 === p2 || !p2.particlesOptions.lineLinked.enable) {
        continue;
      }

      const pos2 = p2.getPosition();
      const distance = Utils["a" /* Utils */].getDistance(pos1, pos2);
      const opacityLine = optOpacity - distance * optOpacity / optDistance;

      if (opacityLine > 0) {
        if (!container.particles.lineLinkedColor) {
          const optColor = p1.particlesOptions.lineLinked.color;
          const color = typeof optColor === "string" ? optColor : optColor.value;

          if (color === Constants["a" /* Constants */].randomColorValue) {
            if (p1.particlesOptions.lineLinked.consent) {
              container.particles.lineLinkedColor = ColorUtils["a" /* ColorUtils */].colorToRgb({
                value: color
              });
            } else if (p1.particlesOptions.lineLinked.blink) {
              container.particles.lineLinkedColor = Constants["a" /* Constants */].randomColorValue;
            } else {
              container.particles.lineLinkedColor = Constants["a" /* Constants */].midColorValue;
            }
          } else {
            container.particles.lineLinkedColor = ColorUtils["a" /* ColorUtils */].colorToRgb({
              value: color
            });
          }
        }

        if (p2.links.map(t => t.destination).indexOf(p1) == -1 && p1.links.map(t => t.destination).indexOf(p2) == -1) {
          p1.links.push({
            destination: p2,
            opacity: opacityLine
          });
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Particles/Attractor.js

class Attractor_Attractor {
  static attract(p1, container, _delta) {
    var _a;

    const options = container.options;
    const distance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
    const pos1 = p1.getPosition();
    const query = container.particles.quadTree.query(new Circle_Circle(pos1.x, pos1.y, distance));

    for (const p2 of query) {
      if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
        continue;
      }

      const pos2 = p2.getPosition();
      const dx = pos1.x - pos2.x;
      const dy = pos1.y - pos2.y;
      const rotate = options.particles.move.attract.rotate;
      const ax = dx / (rotate.x * 1000);
      const ay = dy / (rotate.y * 1000);
      p1.velocity.horizontal -= ax;
      p1.velocity.vertical -= ay;
      p2.velocity.horizontal += ax;
      p2.velocity.vertical += ay;
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/CollisionMode.js
var CollisionMode = __webpack_require__(18);

// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Particles/Collider.js



class Collider_Collider {
  static collide(p1, container, _delta) {
    const pos1 = p1.getPosition();
    const query = container.particles.quadTree.query(new Circle_Circle(pos1.x, pos1.y, p1.size.value * 2));

    for (const p2 of query) {
      if (p1 === p2 || !p2.particlesOptions.collisions.enable || p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode) {
        continue;
      }

      const pos2 = p2.getPosition();
      const dist = Utils["a" /* Utils */].getDistance(pos1, pos2);
      const defaultSize = container.retina.sizeValue;
      const radius1 = this.getRadius(p1, defaultSize);
      const radius2 = this.getRadius(p2, defaultSize);
      const distP = radius1 + radius2;

      if (dist <= distP) {
        this.resolveCollision(p1, p2);
      }
    }
  }

  static getRadius(particle, fallback) {
    return particle.bubble.radius || particle.size.value || fallback;
  }

  static resolveCollision(p1, p2) {
    const pos1 = p1.getPosition();
    const pos2 = p2.getPosition();

    switch (p1.particlesOptions.collisions.mode) {
      case CollisionMode["a" /* CollisionMode */].bounce:
        const xVelocityDiff = p1.velocity.horizontal - p2.velocity.horizontal;
        const yVelocityDiff = p1.velocity.vertical - p2.velocity.vertical;
        const xDist = pos2.x - pos1.x;
        const yDist = pos2.y - pos1.y;

        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
          const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
          const m1 = p1.size.value;
          const m2 = p2.size.value;
          const u1 = this.rotate(p1.velocity, angle);
          const u2 = this.rotate(p2.velocity, angle);
          const v1 = {
            horizontal: u1.horizontal * (m1 - m2) / (m1 + m2) + u2.horizontal * 2 * m2 / (m1 + m2),
            vertical: u1.vertical
          };
          const v2 = {
            horizontal: u2.horizontal * (m1 - m2) / (m1 + m2) + u1.horizontal * 2 * m2 / (m1 + m2),
            vertical: u2.vertical
          };
          const vFinal1 = this.rotate(v1, -angle);
          const vFinal2 = this.rotate(v2, -angle);
          p1.velocity.horizontal = vFinal1.horizontal;
          p1.velocity.vertical = vFinal1.vertical;
          p2.velocity.horizontal = vFinal2.horizontal;
          p2.velocity.vertical = vFinal2.vertical;
        }

    }
  }

  static rotate(velocity, angle) {
    return {
      horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
      vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle)
    };
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Particles/Infecter.js

class Infecter_Infecter {
  static infect(p1, container, delta) {
    var _a, _b;

    p1.updateInfection(delta);

    if (p1.infectionStage === undefined) {
      return;
    }

    const options = container.options;
    const infectionOptions = options.infection;

    if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
      return;
    }

    const infectionStage1 = infectionOptions.stages[p1.infectionStage];
    const pxRatio = container.retina.pixelRatio;
    const radius = p1.size.value * 2 + infectionStage1.radius * pxRatio;
    const pos = p1.getPosition();
    const infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : p1.infectionStage;
    const query = container.particles.quadTree.query(new Circle_Circle(pos.x, pos.y, radius)).filter(t => t.infectionStage === undefined || t.infectionStage !== p1.infectionStage);
    const infections = infectionStage1.rate;
    const neighbors = query.length;

    for (const p2 of query) {
      if (Math.random() < infections / neighbors) {
        if (p2.infectionStage === undefined) {
          p2.startInfection(infectedStage1);
        } else if (p2.infectionStage < p1.infectionStage) {
          p2.updateInfectionStage(infectedStage1);
        } else if (p2.infectionStage > p1.infectionStage) {
          const infectionStage2 = infectionOptions.stages[p2.infectionStage];
          const infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : p2.infectionStage;
          p1.updateInfectionStage(infectedStage2);
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Particles/InteractionManager.js




class InteractionManager_InteractionManager {
  static interact(p1, container, delta) {
    if (p1.particlesOptions.lineLinked.enable) {
      Linker_Linker.link(p1, container, delta);
    }

    if (p1.particlesOptions.move.attract.enable) {
      Attractor_Attractor.attract(p1, container, delta);
    }

    if (p1.particlesOptions.collisions.enable) {
      Collider_Collider.collide(p1, container, delta);
    }

    if (container.options.infection.enable) {
      Infecter_Infecter.infect(p1, container, delta);
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/Modes/HoverMode.js
var HoverMode = __webpack_require__(9);

// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Mouse/Grabber.js



class Grabber_Grabber {
  static grab(container, _delta) {
    const options = container.options;
    const interactivity = options.interactivity;

    if (interactivity.events.onHover.enable && container.interactivity.status === Constants["a" /* Constants */].mouseMoveEvent) {
      const mousePos = container.interactivity.mouse.position;

      if (mousePos === undefined) {
        return;
      }

      const distance = container.retina.grabModeDistance;
      const query = container.particles.quadTree.query(new Circle_Circle(mousePos.x, mousePos.y, distance));

      for (const particle of query) {
        const pos = particle.getPosition();
        const distance = Utils["a" /* Utils */].getDistance(pos, mousePos);

        if (distance <= container.retina.grabModeDistance) {
          const lineOpacity = interactivity.modes.grab.lineLinked.opacity;
          const grabDistance = container.retina.grabModeDistance;
          const opacityLine = lineOpacity - distance * lineOpacity / grabDistance;

          if (opacityLine > 0) {
            container.canvas.drawGrabLine(particle, opacityLine, mousePos);
          }
        }
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/OutMode.js
var OutMode = __webpack_require__(5);

// CONCATENATED MODULE: ./dist/Enums/Modes/DivMode.js
var DivMode;

(function (DivMode) {
  DivMode["repulse"] = "repulse";
})(DivMode || (DivMode = {}));
// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Mouse/Repulser.js







class Repulser_Repulser {
  static repulse(container, _delta) {
    const options = container.options;
    const interactivity = options.interactivity;
    const hoverEnabled = interactivity.events.onHover.enable;
    const clickEnabled = interactivity.events.onClick.enable;
    const mouseMoveStatus = container.interactivity.status === Constants["a" /* Constants */].mouseMoveEvent;
    const hoverMode = interactivity.events.onHover.mode;
    const clickMode = interactivity.events.onClick.mode;
    const divMode = interactivity.events.onDiv.mode;

    if (mouseMoveStatus && hoverEnabled && Utils["a" /* Utils */].isInArray(HoverMode["a" /* HoverMode */].repulse, hoverMode)) {
      this.hoverRepulse(container);
    } else if (clickEnabled && Utils["a" /* Utils */].isInArray(ClickMode["a" /* ClickMode */].repulse, clickMode)) {
      this.clickRepulse(container);
    } else if (interactivity.events.onDiv.enable && Utils["a" /* Utils */].isInArray(DivMode.repulse, divMode)) {
      this.divRepulse(container);
    }
  }

  static divRepulse(container) {
    const options = container.options;
    const elem = document.getElementById(options.interactivity.events.onDiv.elementId);

    if (!elem) {
      return;
    }

    const pos = {
      x: elem.offsetLeft + elem.offsetWidth / 2,
      y: elem.offsetTop + elem.offsetHeight / 2
    };
    let divWidth = elem.offsetWidth / 2;

    if (container.retina.isRetina) {
      pos.x *= container.retina.pixelRatio;
      pos.y *= container.retina.pixelRatio;
      divWidth *= container.retina.pixelRatio;
    }

    const repulseRadius = divWidth;
    this.processRepulse(container, pos, repulseRadius);
  }

  static hoverRepulse(container) {
    const mousePos = container.interactivity.mouse.position;

    if (!mousePos) {
      return;
    }

    const repulseRadius = container.retina.repulseModeDistance;
    this.processRepulse(container, mousePos, repulseRadius);
  }

  static processRepulse(container, position, repulseRadius) {
    const query = container.particles.quadTree.query(new Circle_Circle(position.x, position.y, repulseRadius));

    for (const particle of query) {
      const dx = particle.position.x - position.x;
      const dy = particle.position.y - position.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const normVec = {
        x: dx / dist,
        y: dy / dist
      };
      const velocity = container.options.interactivity.modes.repulse.speed * 100;
      const repulseFactor = Utils["a" /* Utils */].clamp((1 - Math.pow(dist / repulseRadius, 2)) * velocity, 0, 50);
      const outMode = particle.particlesOptions.move.outMode;
      const sizeValue = particle.size.value;
      const pos = {
        x: particle.position.x + normVec.x * repulseFactor,
        y: particle.position.y + normVec.y * repulseFactor
      };

      if (outMode === OutMode["a" /* OutMode */].bounce || outMode === OutMode["a" /* OutMode */].bounceVertical || outMode === OutMode["a" /* OutMode */].bounceHorizontal) {
        const isInside = {
          horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.size.width,
          vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.size.height
        };

        if (outMode === OutMode["a" /* OutMode */].bounceVertical || isInside.horizontal) {
          particle.position.x = pos.x;
        }

        if (outMode === OutMode["a" /* OutMode */].bounceHorizontal || isInside.vertical) {
          particle.position.y = pos.y;
        }
      } else {
        particle.position.x = pos.x;
        particle.position.y = pos.y;
      }
    }
  }

  static clickRepulse(container) {
    if (!container.repulse.finish) {
      if (!container.repulse.count) {
        container.repulse.count = 0;
      }

      container.repulse.count++;

      if (container.repulse.count === container.particles.count) {
        container.repulse.finish = true;
      }
    }

    if (container.repulse.clicking) {
      const repulseDistance = container.retina.repulseModeDistance;
      const repulseRadius = Math.pow(repulseDistance / 6, 3);
      const mouseClickPos = container.interactivity.mouse.clickPosition;

      if (mouseClickPos === undefined) {
        return;
      }

      const range = new Circle_Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
      const query = container.particles.quadTree.query(range);

      for (const particle of query) {
        if ((particle === null || particle === void 0 ? void 0 : particle.position) === undefined) {
          continue;
        }

        const dx = mouseClickPos.x - particle.position.x;
        const dy = mouseClickPos.y - particle.position.y;
        const d = dx * dx + dy * dy;
        const velocity = container.options.interactivity.modes.repulse.speed;
        const force = -repulseRadius * velocity / d;

        if (d <= repulseRadius) {
          container.repulse.particles.push(particle);
          this.processClickRepulse(container, particle, dx, dy, force);
        }
      }
    } else if (container.repulse.clicking === false) {
      for (const particle of container.repulse.particles) {
        particle.velocity.horizontal = particle.initialVelocity.horizontal;
        particle.velocity.vertical = particle.initialVelocity.vertical;
      }

      container.repulse.particles = [];
    }
  }

  static processClickRepulse(container, particle, dx, dy, force) {
    const options = container.options;
    const f = Math.atan2(dy, dx);
    particle.velocity.horizontal = force * Math.cos(f);
    particle.velocity.vertical = force * Math.sin(f);
    const outMode = options.particles.move.outMode;

    if (outMode === OutMode["a" /* OutMode */].bounce || outMode === OutMode["a" /* OutMode */].bounceHorizontal || outMode === OutMode["a" /* OutMode */].bounceVertical) {
      const pos = {
        x: particle.position.x + particle.velocity.horizontal,
        y: particle.position.y + particle.velocity.vertical
      };

      if (outMode !== OutMode["a" /* OutMode */].bounceVertical) {
        if (pos.x + particle.size.value > container.canvas.size.width || pos.x - particle.size.value < 0) {
          particle.velocity.horizontal = -particle.velocity.horizontal;
        }
      }

      if (outMode !== OutMode["a" /* OutMode */].bounceHorizontal) {
        if (pos.y + particle.size.value > container.canvas.size.height || pos.y - particle.size.value < 0) {
          particle.velocity.vertical = -particle.velocity.vertical;
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Enums/ProcessBubbleType.js
var ProcessBubbleType;

(function (ProcessBubbleType) {
  ProcessBubbleType["color"] = "color";
  ProcessBubbleType["opacity"] = "opacity";
  ProcessBubbleType["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));
// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Mouse/Bubbler.js







class Bubbler_Bubbler {
  static reset(particle) {
    delete particle.bubble.opacity;
    delete particle.bubble.radius;
    delete particle.bubble.color;
  }

  static bubble(container, _delta) {
    const options = container.options;
    const events = options.interactivity.events;
    const onHover = events.onHover;
    const onClick = events.onClick;
    const hoverEnabled = onHover.enable;
    const hoverMode = onHover.mode;
    const clickEnabled = onClick.enable;
    const clickMode = onClick.mode;

    if (hoverEnabled && Utils["a" /* Utils */].isInArray(HoverMode["a" /* HoverMode */].bubble, hoverMode)) {
      this.hoverBubble(container);
    } else if (clickEnabled && Utils["a" /* Utils */].isInArray(ClickMode["a" /* ClickMode */].bubble, clickMode)) {
      this.clickBubble(container);
    }
  }

  static process(container, particle, distMouse, timeSpent, data) {
    const bubbleParam = data.bubbleObj.optValue;

    if (bubbleParam === undefined) {
      return;
    }

    const options = container.options;
    const bubbleDuration = options.interactivity.modes.bubble.duration;
    const bubbleDistance = container.retina.bubbleModeDistance;
    const particlesParam = data.particlesObj.optValue;
    const pObjBubble = data.bubbleObj.value;
    const pObj = data.particlesObj.value || 0;
    const type = data.type;

    if (bubbleParam !== particlesParam) {
      if (!container.bubble.durationEnd) {
        if (distMouse <= bubbleDistance) {
          const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;

          if (obj !== bubbleParam) {
            const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;

            if (type === ProcessBubbleType.size) {
              particle.bubble.radius = value;
            }

            if (type === ProcessBubbleType.opacity) {
              particle.bubble.opacity = value;
            }
          }
        } else {
          if (type === ProcessBubbleType.size) {
            delete particle.bubble.radius;
          }

          if (type === ProcessBubbleType.opacity) {
            delete particle.bubble.opacity;
          }
        }
      } else if (pObjBubble) {
        if (type === ProcessBubbleType.size) {
          delete particle.bubble.radius;
        }

        if (type === ProcessBubbleType.opacity) {
          delete particle.bubble.opacity;
        }
      }
    }
  }

  static clickBubble(container) {
    var _a;

    const options = container.options;
    const mouseClickPos = container.interactivity.mouse.clickPosition;

    if (mouseClickPos === undefined) {
      return;
    }

    const distance = container.retina.bubbleModeDistance;
    const query = container.particles.quadTree.query(new Circle_Circle(mouseClickPos.x, mouseClickPos.y, distance));

    for (const particle of query) {
      const pos = particle.getPosition();
      const distMouse = Utils["a" /* Utils */].getDistance(pos, mouseClickPos);
      const timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;

      if (container.bubble.clicking) {
        if (timeSpent > options.interactivity.modes.bubble.duration) {
          container.bubble.durationEnd = true;
        }

        if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
          container.bubble.clicking = false;
          container.bubble.durationEnd = false;
        }

        const sizeData = {
          bubbleObj: {
            optValue: container.retina.bubbleModeSize,
            value: particle.bubble.radius
          },
          particlesObj: {
            optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
            value: particle.size.value
          },
          type: ProcessBubbleType.size
        };
        this.process(container, particle, distMouse, timeSpent, sizeData);
        const opacityData = {
          bubbleObj: {
            optValue: options.interactivity.modes.bubble.opacity,
            value: particle.bubble.opacity
          },
          particlesObj: {
            optValue: particle.particlesOptions.opacity.value,
            value: particle.opacity.value
          },
          type: ProcessBubbleType.opacity
        };
        this.process(container, particle, distMouse, timeSpent, opacityData);

        if (!container.bubble.durationEnd) {
          if (distMouse <= container.retina.bubbleModeDistance) {
            this.hoverBubbleColor(container, particle);
          } else {
            delete particle.bubble.color;
          }
        } else {
          delete particle.bubble.color;
        }
      }
    }
  }

  static hoverBubble(container) {
    const mousePos = container.interactivity.mouse.position;

    if (mousePos === undefined) {
      return;
    }

    const distance = container.retina.bubbleModeDistance;
    const query = container.particles.quadTree.query(new Circle_Circle(mousePos.x, mousePos.y, distance));

    for (const particle of query) {
      const pos = particle.getPosition();
      const distance = Utils["a" /* Utils */].getDistance(pos, mousePos);
      const ratio = 1 - distance / container.retina.bubbleModeDistance;

      if (distance <= container.retina.bubbleModeDistance) {
        if (ratio >= 0 && container.interactivity.status === Constants["a" /* Constants */].mouseMoveEvent) {
          this.hoverBubbleSize(container, particle, ratio);
          this.hoverBubbleOpacity(container, particle, ratio);
          this.hoverBubbleColor(container, particle);
        }
      } else {
        this.reset(particle);
      }

      if (container.interactivity.status === Constants["a" /* Constants */].mouseLeaveEvent) {
        this.reset(particle);
      }
    }
  }

  static hoverBubbleSize(container, particle, ratio) {
    var _a;

    const modeSize = container.retina.bubbleModeSize;

    if (modeSize === undefined) {
      return;
    }

    const optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
    const pSize = particle.size.value;
    const size = this.calculateBubbleValue(pSize, modeSize, optSize, ratio);

    if (size !== undefined) {
      particle.bubble.radius = size;
    }
  }

  static hoverBubbleOpacity(container, particle, ratio) {
    const options = container.options;
    const modeOpacity = options.interactivity.modes.bubble.opacity;

    if (modeOpacity === undefined) {
      return;
    }

    const optOpacity = particle.particlesOptions.opacity.value;
    const pOpacity = particle.opacity.value;
    const opacity = this.calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);

    if (opacity !== undefined) {
      particle.bubble.opacity = opacity;
    }
  }

  static calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue > optionsValue) {
      const size = particleValue + (modeValue - optionsValue) * ratio;
      return Utils["a" /* Utils */].clamp(size, particleValue, modeValue);
    } else if (modeValue < optionsValue) {
      const size = particleValue - (optionsValue - modeValue) * ratio;
      return Utils["a" /* Utils */].clamp(size, modeValue, particleValue);
    }
  }

  static hoverBubbleColor(container, particle) {
    const options = container.options;

    if (particle.bubble.color === undefined) {
      const modeColor = options.interactivity.modes.bubble.color;

      if (modeColor === undefined) {
        return;
      }

      particle.bubble.color = ColorUtils["a" /* ColorUtils */].colorToRgb(modeColor instanceof Array ? Utils["a" /* Utils */].itemFromArray(modeColor) : modeColor);
    }
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/Interactions/Mouse/Connector.js

class Connector_Connector {
  static connect(container, _delta) {
    const options = container.options;

    if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
      const mousePos = container.interactivity.mouse.position;

      if (!mousePos) {
        return;
      }

      const distance = Math.abs(container.retina.connectModeRadius);
      const query = container.particles.quadTree.query(new Circle_Circle(mousePos.x, mousePos.y, distance));
      let i = 0;

      for (const p1 of query) {
        const pos1 = p1.getPosition();

        for (const p2 of query.slice(i + 1)) {
          const pos2 = p2.getPosition();
          const distMax = Math.abs(container.retina.connectModeDistance);
          const xDiff = Math.abs(pos1.x - pos2.x);
          const yDiff = Math.abs(pos1.y - pos2.y);

          if (xDiff < distMax && yDiff < distMax) {
            container.canvas.drawConnectLine(p1, p2);
          }
        }

        ++i;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Utils/Rectangle.js

class Rectangle_Rectangle extends Range {
  constructor(x, y, width, height) {
    super(x, y);
    this.size = {
      height: height,
      width: width
    };
  }

  contains(point) {
    return point.x >= this.position.x - this.size.width && point.x < this.position.x + this.size.width && point.y >= this.position.y - this.size.height && point.y < this.position.y + this.size.height;
  }

  intersects(range) {
    const rect = range;
    const circle = range;
    const w = this.size.width;
    const h = this.size.height;
    const pos1 = this.position;
    const pos2 = range.position;

    if (circle.radius !== undefined) {
      return circle.intersects(this);
    } else if (rect.size !== undefined) {
      const size2 = rect.size;
      const w2 = size2.width;
      const h2 = size2.height;
      return pos2.x - w2 < pos1.x + w && pos2.x + w2 > pos1.x - w && pos2.y - h2 < pos1.y + h && pos2.y + h2 > pos1.y - h;
    }

    return false;
  }

}
// CONCATENATED MODULE: ./dist/Utils/QuadTree.js

class QuadTree_QuadTree {
  constructor(rectangle, capacity) {
    this.rectangle = rectangle;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }

  subdivide() {
    const x = this.rectangle.position.x;
    const y = this.rectangle.position.y;
    const w = this.rectangle.size.width;
    const h = this.rectangle.size.height;
    this.northEast = new QuadTree_QuadTree(new Rectangle_Rectangle(x, y, w / 2, h / 2), this.capacity);
    this.northWest = new QuadTree_QuadTree(new Rectangle_Rectangle(x + w / 2, y, w / 2, h / 2), this.capacity);
    this.southEast = new QuadTree_QuadTree(new Rectangle_Rectangle(x, y + h / 2, w / 2, h / 2), this.capacity);
    this.southWest = new QuadTree_QuadTree(new Rectangle_Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), this.capacity);
    this.divided = true;
  }

  insert(point) {
    var _a, _b, _c, _d;

    if (!this.rectangle.contains(point.position)) {
      return false;
    }

    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    } else {
      if (!this.divided) {
        this.subdivide();
      }
    }

    if ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) {
      return true;
    } else if ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) {
      return true;
    } else if ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) {
      return true;
    } else if ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point)) {
      return true;
    }

    return false;
  }

  query(range, found) {
    var _a, _b, _c, _d;

    const res = found !== null && found !== void 0 ? found : [];

    if (!range.intersects(this.rectangle)) {
      return [];
    } else {
      for (let p of this.points) {
        if (range.contains(p.position)) {
          res.push(p.particle);
        }
      }

      if (this.divided) {
        (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
        (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
        (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
        (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
      }
    }

    return res;
  }

}
// EXTERNAL MODULE: ./dist/Enums/DestroyType.js
var DestroyType = __webpack_require__(14);

// CONCATENATED MODULE: ./dist/Utils/Point.js
class Point {
  constructor(x, y, particle) {
    this.position = {
      x: x,
      y: y
    };
    this.particle = particle;
  }

}
// CONCATENATED MODULE: ./dist/Core/Particles.js














class Particles_Particles {
  constructor(container) {
    this.container = container;
    this.array = [];
    this.interactionsEnabled = false;
    const canvasSize = this.container.canvas.size;
    this.noiseZ = 0;
    this.quadTree = new QuadTree_QuadTree(new Rectangle_Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
  }

  get count() {
    return this.array.length;
  }

  init() {
    const container = this.container;
    const options = container.options;
    let handled = false;
    this.noiseZ = 0;

    for (const id in container.plugins) {
      const plugin = container.plugins[id];

      if (plugin.particlesInitialization !== undefined) {
        handled = plugin.particlesInitialization();
      }

      if (handled) {
        break;
      }
    }

    if (!handled) {
      for (let i = this.count; i < options.particles.number.value; i++) {
        this.addParticle(new Particle["a" /* Particle */](container));
      }
    }

    this.interactionsEnabled = options.particles.lineLinked.enable || options.particles.move.attract.enable || options.particles.collisions.enable || options.infection.enable;

    if (options.infection.enable) {
      for (let i = 0; i < options.infection.infections; i++) {
        const notInfected = this.array.filter(p => p.infectionStage === undefined);
        const infected = Utils["a" /* Utils */].itemFromArray(notInfected);
        infected.startInfection(0);
      }
    }
  }

  redraw() {
    this.clear();
    this.init();
    this.draw(0);
  }

  removeAt(index, quantity) {
    if (index >= 0 && index <= this.count) {
      for (const particle of this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1)) {
        particle.destroy();
      }
    }
  }

  remove(particle) {
    this.removeAt(this.array.indexOf(particle));
  }

  update(delta) {
    const container = this.container;
    const options = container.options;
    const particlesToDelete = [];

    for (let i = 0; i < this.count; i++) {
      const particle = this.array[i];
      Bubbler_Bubbler.reset(particle);

      for (const id in container.plugins) {
        const plugin = container.plugins[id];

        if (particle.destroyed) {
          break;
        }

        if (plugin.particleUpdate) {
          plugin.particleUpdate(particle, delta);
        }
      }

      if (!particle.destroyed) {
        const sizeOpt = particle.particlesOptions.size;
        const sizeAnim = sizeOpt.animation;

        if (sizeAnim.enable) {
          switch (sizeAnim.destroy) {
            case DestroyType["a" /* DestroyType */].max:
              if (particle.size.value >= sizeOpt.value * container.retina.pixelRatio) {
                particle.destroyed = true;
              }

              break;

            case DestroyType["a" /* DestroyType */].min:
              if (particle.size.value <= sizeAnim.minimumValue * container.retina.pixelRatio) {
                particle.destroyed = true;
              }

              break;
          }
        }
      }

      if (particle.destroyed) {
        particlesToDelete.push(particle);
        continue;
      }

      particle.update(i, delta);
      const pos = particle.getPosition();
      container.particles.quadTree.insert(new Point(pos.x, pos.y, particle));
    }

    for (const particle of particlesToDelete) {
      this.remove(particle);
    }

    if (container.options.interactivity.events.onDiv.enable || container.options.interactivity.events.onHover.enable && container.interactivity.mouse.position || container.options.interactivity.events.onClick.enable && container.interactivity.mouse.clickPosition) {
      const hoverMode = options.interactivity.events.onHover.mode;
      const clickMode = options.interactivity.events.onClick.mode;
      const divMode = options.interactivity.events.onDiv.mode;

      if (Utils["a" /* Utils */].isInArray(HoverMode["a" /* HoverMode */].grab, hoverMode)) {
        Grabber_Grabber.grab(container, delta);
      }

      if (Utils["a" /* Utils */].isInArray(HoverMode["a" /* HoverMode */].repulse, hoverMode) || Utils["a" /* Utils */].isInArray(ClickMode["a" /* ClickMode */].repulse, clickMode) || Utils["a" /* Utils */].isInArray(DivMode.repulse, divMode)) {
        Repulser_Repulser.repulse(container, delta);
      }

      if (Utils["a" /* Utils */].isInArray(HoverMode["a" /* HoverMode */].bubble, hoverMode) || Utils["a" /* Utils */].isInArray(ClickMode["a" /* ClickMode */].bubble, clickMode)) {
        Bubbler_Bubbler.bubble(container, delta);
      }

      if (Utils["a" /* Utils */].isInArray(HoverMode["a" /* HoverMode */].connect, hoverMode)) {
        Connector_Connector.connect(container, delta);
      }
    }

    for (const particle of this.array) {
      if (this.interactionsEnabled) {
        InteractionManager_InteractionManager.interact(particle, container, delta);
      }
    }
  }

  draw(delta) {
    const container = this.container;
    container.canvas.clear();
    const canvasSize = this.container.canvas.size;
    this.quadTree = new QuadTree_QuadTree(new Rectangle_Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
    this.update(delta);
    this.noiseZ += 0.0004;

    for (const id in container.plugins) {
      const plugin = container.plugins[id];
      container.canvas.drawPlugin(plugin, delta);
    }

    for (const p of this.array) {
      p.draw(delta);
    }
  }

  clear() {
    this.array = [];
  }

  push(nb, mousePosition) {
    var _a;

    const container = this.container;
    const options = container.options;
    const limit = options.particles.number.limit * container.density;
    this.pushing = true;

    if (limit > 0) {
      const countToRemove = this.count + nb - limit;

      if (countToRemove > 0) {
        this.removeQuantity(countToRemove);
      }
    }

    let pos;

    if (mousePosition) {
      pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : {
        x: 0,
        y: 0
      };
    }

    for (let i = 0; i < nb; i++) {
      this.addParticle(new Particle["a" /* Particle */](container, pos));
    }

    if (!options.particles.move.enable) {
      this.container.play();
    }

    this.pushing = false;
  }

  addParticle(particle) {
    this.array.push(particle);
  }

  removeQuantity(quantity) {
    const container = this.container;
    const options = container.options;
    this.removeAt(0, quantity);

    if (!options.particles.move.enable) {
      this.container.play();
    }
  }

}
// CONCATENATED MODULE: ./dist/Core/Retina.js
class Retina {
  constructor(container) {
    this.container = container;
    this.isRetina = false;
    this.bubbleModeDistance = 0;
    this.bubbleModeSize = 0;
    this.connectModeDistance = 0;
    this.connectModeRadius = 0;
    this.grabModeDistance = 0;
    this.repulseModeDistance = 0;
    this.slowModeRadius = 0;
    this.lineLinkedDistance = 0;
    this.lineLinkedWidth = 0;
    this.moveSpeed = 0;
    this.sizeValue = 0;
    this.sizeAnimationSpeed = 0;
    this.polygonMaskMoveRadius = 0;
    this.pixelRatio = 1;
  }

  init() {
    var _a;

    const container = this.container;
    const options = container.options;

    if (options.detectRetina && window.devicePixelRatio > 1) {
      this.pixelRatio = window.devicePixelRatio;
      this.isRetina = true;
    } else {
      this.pixelRatio = 1;
      this.isRetina = false;
    }

    let ratio = this.pixelRatio;

    if (container.canvas.element) {
      const element = container.canvas.element;
      container.canvas.size.width = element.offsetWidth * ratio;
      container.canvas.size.height = element.offsetHeight * ratio;
    }

    const particles = options.particles;
    this.lineLinkedDistance = particles.lineLinked.distance * ratio;
    this.lineLinkedWidth = particles.lineLinked.width * ratio;
    this.moveSpeed = particles.move.speed * ratio;
    this.sizeValue = particles.size.value * ratio;
    this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
    const interactivity = options.interactivity;
    this.connectModeDistance = interactivity.modes.connect.distance * ratio;
    this.connectModeRadius = interactivity.modes.connect.radius * ratio;
    this.grabModeDistance = interactivity.modes.grab.distance * ratio;
    this.repulseModeDistance = interactivity.modes.repulse.distance * ratio;
    this.slowModeRadius = interactivity.modes.slow.radius * ratio;
    this.bubbleModeDistance = interactivity.modes.bubble.distance * ratio;
    this.bubbleModeSize = (_a = interactivity.modes.bubble.size) !== null && _a !== void 0 ? _a : this.sizeValue * ratio;
    this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
  }

  initParticle(particle) {
    const particlesOptions = particle.particlesOptions;
    const ratio = this.pixelRatio;
    particle.lineLinkedDistance = particlesOptions.lineLinked.distance * ratio;
    particle.lineLinkedWidth = particlesOptions.lineLinked.width * ratio;
    particle.moveSpeed = particlesOptions.move.speed * ratio;
    particle.sizeValue = particlesOptions.size.value * ratio;

    if (typeof particlesOptions.size.random !== "boolean") {
      particle.randomMinimumSize = particlesOptions.size.random.minimumValue;
    }

    particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
  }

  reset() {}

}
// CONCATENATED MODULE: ./dist/Core/FrameManager.js
class FrameManager {
  constructor(container) {
    this.container = container;
  }

  nextFrame(timestamp) {
    const container = this.container;
    const options = container.options;
    const fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;

    if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / fpsLimit) {
      container.draw();
      return;
    }

    const delta = timestamp - container.lastFrameTime;
    container.lastFrameTime = timestamp;
    container.particles.draw(delta);

    if (options.particles.move.enable && container.getAnimationStatus()) {
      container.draw();
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Events/ClickEvent.js
class ClickEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Events/DivEvent.js
class DivEvent {
  constructor() {
    this.elementId = "";
    this.enable = false;
    this.mode = [];
  }

  get el() {
    return this.elementId;
  }

  set el(value) {
    this.elementId = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;

      if (elementId !== undefined) {
        this.elementId = elementId;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Events/Parallax.js
class Parallax {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.force !== undefined) {
        this.force = data.force;
      }

      if (data.smooth !== undefined) {
        this.smooth = data.smooth;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Events/HoverEvent.js

class HoverEvent_HoverEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }

      this.parallax.load(data.parallax);
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Events/Events.js



class Events_Events {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent_HoverEvent();
    this.resize = true;
  }

  get onclick() {
    return this.onClick;
  }

  set onclick(value) {
    this.onClick = value;
  }

  get ondiv() {
    return this.onDiv;
  }

  set ondiv(value) {
    this.onDiv = value;
  }

  get onhover() {
    return this.onHover;
  }

  set onhover(value) {
    this.onHover = value;
  }

  load(data) {
    var _a, _b, _c;

    if (data !== undefined) {
      this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
      this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
      this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);

      if (data.resize !== undefined) {
        this.resize = data.resize;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Options/Classes/Particles/OptionsColor.js
var OptionsColor = __webpack_require__(3);

// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Bubble.js

class Bubble_Bubble {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
  }

  load(data) {
    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      if (data.color !== undefined) {
        if (data.color instanceof Array) {
          this.color = data.color.map(s => OptionsColor["a" /* OptionsColor */].create(undefined, s));
        } else {
          if (this.color instanceof Array) {
            this.color = new OptionsColor["a" /* OptionsColor */]();
          }

          this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);
        }
      }

      if (data.size !== undefined) {
        this.size = data.size;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/ConnectLineLinked.js
class ConnectLineLinked {
  constructor() {
    this.opacity = 0.5;
  }

  load(data) {
    if (data !== undefined) {
      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Connect.js

class Connect_Connect {
  constructor() {
    this.distance = 80;
    this.lineLinked = new ConnectLineLinked();
    this.radius = 60;
  }

  get line_linked() {
    return this.lineLinked;
  }

  set line_linked(value) {
    this.lineLinked = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/GrabLineLinked.js
class GrabLineLinked {
  constructor() {
    this.opacity = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Grab.js

class Grab_Grab {
  constructor() {
    this.distance = 100;
    this.lineLinked = new GrabLineLinked();
  }

  get line_linked() {
    return this.lineLinked;
  }

  set line_linked(value) {
    this.lineLinked = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Remove.js
class Remove {
  constructor() {
    this.quantity = 2;
  }

  get particles_nb() {
    return this.quantity;
  }

  set particles_nb(value) {
    this.quantity = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

      if (quantity !== undefined) {
        this.quantity = quantity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Push.js
class Push {
  constructor() {
    this.quantity = 4;
  }

  get particles_nb() {
    return this.quantity;
  }

  set particles_nb(value) {
    this.quantity = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

      if (quantity !== undefined) {
        this.quantity = quantity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Repulse.js
class Repulse {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.speed = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Slow.js
class Slow {
  constructor() {
    this.factor = 3;
    this.radius = 200;
  }

  get active() {
    return false;
  }

  set active(_value) {}

  load(data) {
    if (data !== undefined) {
      if (data.factor !== undefined) {
        this.factor = data.factor;
      }

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/MoveDirection.js
var MoveDirection = __webpack_require__(10);

// CONCATENATED MODULE: ./dist/Options/Classes/Emitters/EmitterRate.js
class EmitterRate {
  constructor() {
    this.quantity = 1;
    this.delay = 0.1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.quantity !== undefined) {
        this.quantity = data.quantity;
      }

      if (data.delay !== undefined) {
        this.delay = data.delay;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Emitters/EmitterLife.js
class EmitterLife {
  constructor() {}

  load(data) {
    if (data !== undefined) {
      if (data.count !== undefined) {
        this.count = data.count;
      }

      if (data.delay !== undefined) {
        this.delay = data.delay;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Options/Classes/Emitters/EmitterSize.js
var EmitterSize = __webpack_require__(22);

// CONCATENATED MODULE: ./dist/Options/Classes/Emitters/Emitter.js





class Emitter_Emitter {
  constructor() {
    this.direction = MoveDirection["a" /* MoveDirection */].none;
    this.life = new EmitterLife();
    this.rate = new EmitterRate();
  }

  load(data) {
    if (data !== undefined) {
      if (data.size !== undefined) {
        if (this.size === undefined) {
          this.size = new EmitterSize["a" /* EmitterSize */]();
        }

        this.size.load(data.size);
      }

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      this.life.load(data.life);

      if (data.particles !== undefined) {
        this.particles = Utils["a" /* Utils */].deepExtend({}, data.particles);
      }

      this.rate.load(data.rate);

      if (data.position !== undefined) {
        this.position = {
          x: data.position.x,
          y: data.position.y
        };
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Absorbers/AbsorberRandomSize.js
class AbsorberRandomSize {
  constructor() {
    this.enable = false;
    this.minimumValue = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.minimumValue !== undefined) {
        this.minimumValue = data.minimumValue;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Absorbers/AbsorberSize.js

class AbsorberSize_AbsorberSize {
  constructor() {
    this.density = 5;
    this.random = new AbsorberRandomSize();
    this.value = 50;
  }

  load(data) {
    if (data !== undefined) {
      if (data.density !== undefined) {
        this.density = data.density;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }

      if (data.random !== undefined) {
        if (typeof data.random === "boolean") {
          this.random.load({
            enable: data.random
          });
        } else {
          this.random.load(data.random);
        }
      }

      if (data.limit !== undefined) {
        this.limit = data.limit;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Absorbers/Absorber.js


class Absorber_Absorber {
  constructor() {
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.color.value = "#000000";
    this.opacity = 1;
    this.size = new AbsorberSize_AbsorberSize();
  }

  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      if (data.position !== undefined) {
        this.position = {
          x: data.position.x,
          y: data.position.y
        };
      }

      if (data.size !== undefined) {
        this.size.load(data.size);
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Modes/Modes.js









class Modes_Modes {
  constructor() {
    this.absorbers = [];
    this.bubble = new Bubble_Bubble();
    this.connect = new Connect_Connect();
    this.emitters = [];
    this.grab = new Grab_Grab();
    this.push = new Push();
    this.remove = new Remove();
    this.repulse = new Repulse();
    this.slow = new Slow();
  }

  load(data) {
    if (data !== undefined) {
      this.bubble.load(data.bubble);
      this.connect.load(data.connect);
      this.grab.load(data.grab);
      this.push.load(data.push);
      this.remove.load(data.remove);
      this.repulse.load(data.repulse);
      this.slow.load(data.slow);

      if (data.emitters !== undefined) {
        if (data.emitters instanceof Array) {
          this.emitters = data.emitters.map(s => {
            const tmp = new Emitter_Emitter();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.emitters instanceof Array) {
            this.emitters = new Emitter_Emitter();
          }

          this.emitters.load(data.emitters);
        }
      }

      if (data.absorbers !== undefined) {
        if (data.absorbers instanceof Array) {
          this.absorbers = data.absorbers.map(s => {
            const tmp = new Absorber_Absorber();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.absorbers instanceof Array) {
            this.absorbers = new Absorber_Absorber();
          }

          this.absorbers.load(data.absorbers);
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Interactivity/Interactivity.js




class Interactivity_Interactivity {
  constructor() {
    this.detectsOn = InteractivityDetect.canvas;
    this.events = new Events_Events();
    this.modes = new Modes_Modes();
  }

  get detect_on() {
    return this.detectsOn;
  }

  set detect_on(value) {
    this.detectsOn = value;
  }

  load(data) {
    var _a, _b, _c;

    if (data !== undefined) {
      const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;

      if (detectsOn !== undefined) {
        this.detectsOn = detectsOn;
      }

      this.events.load(data.events);
      this.modes.load(data.modes);

      if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
        if (this.events.onHover.mode instanceof Array) {
          if (this.events.onHover.mode.indexOf(HoverMode["a" /* HoverMode */].slow) < 0) {
            this.events.onHover.mode.push(HoverMode["a" /* HoverMode */].slow);
          }
        } else if (this.events.onHover.mode !== HoverMode["a" /* HoverMode */].slow) {
          this.events.onHover.mode = [this.events.onHover.mode, HoverMode["a" /* HoverMode */].slow];
        }
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Options/Classes/Particles/Particles.js + 25 modules
var Classes_Particles_Particles = __webpack_require__(19);

// EXTERNAL MODULE: ./dist/Enums/PolygonMaskType.js
var PolygonMaskType = __webpack_require__(11);

// CONCATENATED MODULE: ./dist/Options/Classes/PolygonMask/PolygonMaskDrawStroke.js


class PolygonMaskDrawStroke_PolygonMaskDrawStroke {
  constructor() {
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.width = 0.5;
    this.opacity = 1;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);

      if (typeof this.color.value === "string") {
        this.opacity = (_a = ColorUtils["a" /* ColorUtils */].stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/PolygonMask/Draw.js


class Draw_Draw {
  constructor() {
    this.enable = false;
    this.stroke = new PolygonMaskDrawStroke_PolygonMaskDrawStroke();
  }

  get lineWidth() {
    return this.stroke.width;
  }

  set lineWidth(value) {
    this.stroke.width = value;
  }

  get lineColor() {
    return this.stroke.color;
  }

  set lineColor(value) {
    this.stroke.color = OptionsColor["a" /* OptionsColor */].create(this.stroke.color, value);
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
        color: data.lineColor,
        width: data.lineWidth
      };
      this.stroke.load(stroke);
    }
  }

}
// CONCATENATED MODULE: ./dist/Enums/PolygonMaskMoveType.js
var PolygonMaskMoveType;

(function (PolygonMaskMoveType) {
  PolygonMaskMoveType["path"] = "path";
  PolygonMaskMoveType["radius"] = "radius";
})(PolygonMaskMoveType || (PolygonMaskMoveType = {}));
// CONCATENATED MODULE: ./dist/Options/Classes/PolygonMask/Move.js

class Move_Move {
  constructor() {
    this.radius = 10;
    this.type = PolygonMaskMoveType.path;
  }

  load(data) {
    if (data !== undefined) {
      if (data.radius !== undefined) {
        this.radius = data.radius;
      }

      if (data.type !== undefined) {
        this.type = data.type;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/PolygonMaskInlineArrangement.js
var PolygonMaskInlineArrangement = __webpack_require__(13);

// CONCATENATED MODULE: ./dist/Options/Classes/PolygonMask/PolygonInline.js

class PolygonInline_PolygonInline {
  constructor() {
    this.arrangement = PolygonMaskInlineArrangement["a" /* PolygonMaskInlineArrangement */].onePerPoint;
  }

  load(data) {
    if (data !== undefined) {
      if (data.arrangement !== undefined) {
        this.arrangement = data.arrangement;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/PolygonMask/PolygonMask.js




class PolygonMask_PolygonMask {
  constructor() {
    this.draw = new Draw_Draw();
    this.enable = false;
    this.inline = new PolygonInline_PolygonInline();
    this.move = new Move_Move();
    this.scale = 1;
    this.type = PolygonMaskType["a" /* PolygonMaskType */].none;
    this.url = "";
  }

  get inlineArrangement() {
    return this.inline.arrangement;
  }

  set inlineArrangement(value) {
    this.inline.arrangement = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      this.draw.load(data.draw);
      const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
        arrangement: data.inlineArrangement
      };

      if (inline !== undefined) {
        this.inline.load(inline);
      }

      this.move.load(data.move);

      if (data.scale !== undefined) {
        this.scale = data.scale;
      }

      if (data.type !== undefined) {
        this.type = data.type;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      } else {
        this.enable = this.type !== PolygonMaskType["a" /* PolygonMaskType */].none;
      }

      if (data.url !== undefined) {
        this.url = data.url;
      }

      if (data.position !== undefined) {
        this.position = {
          x: data.position.x,
          y: data.position.y
        };
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js

class BackgroundMaskCover_BackgroundMaskCover {
  constructor() {
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.opacity = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/BackgroundMask/BackgroundMask.js

class BackgroundMask_BackgroundMask {
  constructor() {
    this.cover = new BackgroundMaskCover_BackgroundMaskCover();
    this.enable = false;
  }

  load(data) {
    if (data !== undefined) {
      if (data.cover !== undefined) {
        const cover = data.cover;
        const color = typeof data.cover === "string" ? {
          color: data.cover
        } : data.cover;
        this.cover.load(cover.color !== undefined ? cover : {
          color: color
        });
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Background/Background.js

class Background_Background {
  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);
      }

      if (data.image !== undefined) {
        this.image = data.image;
      }

      if (data.position !== undefined) {
        this.position = data.position;
      }

      if (data.repeat !== undefined) {
        this.repeat = data.repeat;
      }

      if (data.size !== undefined) {
        this.size = data.size;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Infection/InfectionStage.js

class InfectionStage_InfectionStage {
  constructor() {
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.color.value = "#ff0000";
    this.radius = 0;
    this.rate = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);
      }

      this.duration = data.duration;
      this.infectedStage = data.infectedStage;

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }

      if (data.rate !== undefined) {
        this.rate = data.rate;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Infection/Infection.js

class Infection_Infection {
  constructor() {
    this.cure = false;
    this.delay = 0;
    this.enable = false;
    this.infections = 0;
    this.stages = [];
  }

  load(data) {
    if (data !== undefined) {
      if (data.cure !== undefined) {
        this.cure = data.cure;
      }

      if (data.delay !== undefined) {
        this.delay = data.delay;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.infections !== undefined) {
        this.infections = data.infections;
      }

      if (data.stages !== undefined) {
        this.stages = data.stages.map(t => {
          const s = new InfectionStage_InfectionStage();
          s.load(t);
          return s;
        });
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Utils/Plugins.js
var Plugins = __webpack_require__(6);

// CONCATENATED MODULE: ./dist/Options/Classes/Options.js









class Options_Options {
  constructor() {
    this.absorbers = [];
    this.background = new Background_Background();
    this.backgroundMask = new BackgroundMask_BackgroundMask();
    this.detectRetina = false;
    this.emitters = [];
    this.fpsLimit = 30;
    this.infection = new Infection_Infection();
    this.interactivity = new Interactivity_Interactivity();
    this.particles = new Classes_Particles_Particles["a" /* Particles */]();
    this.pauseOnBlur = true;
    this.polygon = new PolygonMask_PolygonMask();
  }

  get fps_limit() {
    return this.fpsLimit;
  }

  set fps_limit(value) {
    this.fpsLimit = value;
  }

  get retina_detect() {
    return this.detectRetina;
  }

  set retina_detect(value) {
    this.detectRetina = value;
  }

  load(data) {
    var _a, _b;

    if (data !== undefined) {
      if (data.preset !== undefined) {
        if (data.preset instanceof Array) {
          for (const preset of data.preset) {
            this.importPreset(preset);
          }
        } else {
          this.importPreset(data.preset);
        }
      }

      if (data.background !== undefined) {
        this.background.load(data.background);
      }

      const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;

      if (detectRetina !== undefined) {
        this.detectRetina = detectRetina;
      }

      const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;

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
          this.emitters = data.emitters.map(s => {
            const tmp = new Emitter_Emitter();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.emitters instanceof Array) {
            this.emitters = new Emitter_Emitter();
          }

          this.emitters.load(data.emitters);
        }
      }

      if (data.absorbers !== undefined) {
        if (data.absorbers instanceof Array) {
          this.absorbers = data.absorbers.map(s => {
            const tmp = new Absorber_Absorber();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.absorbers instanceof Array) {
            this.absorbers = new Absorber_Absorber();
          }

          this.absorbers.load(data.absorbers);
        }
      }
    }
  }

  importPreset(preset) {
    const presetOptions = Plugins["a" /* Plugins */].getPreset(preset);

    if (presetOptions !== undefined) {
      this.load(presetOptions);
    }
  }

}
// CONCATENATED MODULE: ./dist/Utils/SimplexNoise.js
const F3 = 1.0 / 3.0;
const G3 = 1.0 / 6.0;
const grad3 = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);

const buildPermutationTable = random => {
  const p = new Uint8Array(256);

  for (let i = 0; i < 256; i++) {
    p[i] = i;
  }

  for (let i = 0; i < 255; i++) {
    const r = i + ~~(random() * (256 - i));
    const aux = p[i];
    p[i] = p[r];
    p[r] = aux;
  }

  return p;
};

class SimplexNoise {
  constructor(random) {
    const randomFunc = random !== null && random !== void 0 ? random : Math.random;
    this.p = buildPermutationTable(randomFunc);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);

    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  noise3D(xin, yin, zin) {
    const permMod12 = this.permMod12;
    const perm = this.perm;
    let n0, n1, n2, n3;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t;
    const Y0 = j - t;
    const Z0 = k - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;
    const z0 = zin - Z0;
    let i1, j1, k1;
    let i2, j2, k2;

    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 1;
        k2 = 0;
      } else if (x0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      } else {
        i1 = 0;
        j1 = 0;
        k1 = 1;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      }
    } else {
      if (y0 < z0) {
        i1 = 0;
        j1 = 0;
        k1 = 1;
        i2 = 0;
        j2 = 1;
        k2 = 1;
      } else if (x0 < z0) {
        i1 = 0;
        j1 = 1;
        k1 = 0;
        i2 = 0;
        j2 = 1;
        k2 = 1;
      } else {
        i1 = 0;
        j1 = 1;
        k1 = 0;
        i2 = 1;
        j2 = 1;
        k2 = 0;
      }
    }

    const x1 = x0 - i1 + G3;
    const y1 = y0 - j1 + G3;
    const z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2.0 * G3;
    const y2 = y0 - j2 + 2.0 * G3;
    const z2 = z0 - k2 + 2.0 * G3;
    const x3 = x0 - 1.0 + 3.0 * G3;
    const y3 = y0 - 1.0 + 3.0 * G3;
    const z3 = z0 - 1.0 + 3.0 * G3;
    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;
    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;

    if (t0 < 0) {
      n0 = 0.0;
    } else {
      const gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
      t0 *= t0;
      n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
    }

    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;

    if (t1 < 0) {
      n1 = 0.0;
    } else {
      const gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
      t1 *= t1;
      n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
    }

    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;

    if (t2 < 0) {
      n2 = 0.0;
    } else {
      const gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
      t2 *= t2;
      n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
    }

    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;

    if (t3 < 0) {
      n3 = 0.0;
    } else {
      const gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
      t3 *= t3;
      n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
    }

    return 32.0 * (n0 + n1 + n2 + n3);
  }

}
// CONCATENATED MODULE: ./dist/Core/Container.js









class Container_Container {
  constructor(id, params, ...presets) {
    this.started = false;
    this.destroyed = false;
    this.id = id;
    this.paused = true;
    this.sourceOptions = params;
    this.lastFrameTime = 0;
    this.pageHidden = false;
    this.retina = new Retina(this);
    this.canvas = new Canvas_Canvas(this);
    this.particles = new Particles_Particles(this);
    this.drawer = new FrameManager(this);
    this.interactivity = {
      mouse: {}
    };
    this.bubble = {};
    this.repulse = {
      particles: []
    };
    this.plugins = {};
    this.drawers = {};
    this.density = 1;
    this.options = new Options_Options();

    for (const preset of presets) {
      this.options.load(Plugins["a" /* Plugins */].getPreset(preset));
    }

    for (const type of Plugins["a" /* Plugins */].getSupportedShapes()) {
      this.drawers[type] = Plugins["a" /* Plugins */].getShapeDrawer(type);
    }

    if (this.sourceOptions) {
      this.options.load(this.sourceOptions);
    }

    this.simplex = new SimplexNoise();
    this.eventListeners = new EventListeners_EventListeners(this);
  }

  static requestFrame(callback) {
    return window.customRequestAnimationFrame(callback);
  }

  static cancelAnimation(handle) {
    window.cancelAnimationFrame(handle);
  }

  play(force) {
    const needsUpdate = this.paused || force;

    if (this.paused) {
      this.paused = false;
    }

    if (needsUpdate) {
      for (const id in this.plugins) {
        const plugin = this.plugins[id];

        if (plugin.play) {
          plugin.play();
        }
      }

      this.lastFrameTime = performance.now();
    }

    this.draw();
  }

  pause() {
    if (this.drawAnimationFrame !== undefined) {
      Container_Container.cancelAnimation(this.drawAnimationFrame);
      delete this.drawAnimationFrame;
    }

    if (!this.paused) {
      for (const id in this.plugins) {
        const plugin = this.plugins[id];

        if (plugin.pause) {
          plugin.pause();
        }
      }

      if (!this.pageHidden) {
        this.paused = true;
      }
    }
  }

  draw() {
    this.drawAnimationFrame = Container_Container.requestFrame(t => this.drawer.nextFrame(t));
  }

  getAnimationStatus() {
    return !this.paused;
  }

  densityAutoParticles() {
    this.initDensityFactor();
    const numberOptions = this.options.particles.number;
    const optParticlesNumber = numberOptions.value;
    const optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
    const particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * this.density;
    const particlesCount = this.particles.count;

    if (particlesCount < particlesNumber) {
      this.particles.push(Math.abs(particlesNumber - particlesCount));
    } else if (particlesCount > particlesNumber) {
      this.particles.removeQuantity(particlesCount - particlesNumber);
    }
  }

  initDensityFactor() {
    const densityOptions = this.options.particles.number.density;

    if (!this.canvas.element || !densityOptions.enable) {
      return;
    }

    const canvas = this.canvas.element;
    const pxRatio = this.retina.pixelRatio;
    this.density = canvas.width * canvas.height / (densityOptions.factor * pxRatio * densityOptions.area);
  }

  destroy() {
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

    for (const type in this.drawers) {
      const drawer = this.drawers[type];

      if (drawer.destroy !== undefined) {
        drawer.destroy(this);
      }
    }

    this.drawers = {};
    this.destroyed = true;
  }

  exportImg(callback) {
    this.exportImage(callback);
  }

  exportImage(callback, type, quality) {
    var _a;

    return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
  }

  exportConfiguration() {
    return JSON.stringify(this.options, undefined, 2);
  }

  refresh() {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      this.stop();
      yield this.start();
    });
  }

  stop() {
    if (!this.started) {
      return;
    }

    this.started = false;
    this.eventListeners.removeListeners();
    this.pause();
    this.particles.clear();
    this.retina.reset();
    this.canvas.clear();

    for (const id in this.plugins) {
      const plugin = this.plugins[id];

      if (plugin.stop !== undefined) {
        plugin.stop();
      }
    }

    this.plugins = {};
    delete this.particles.lineLinkedColor;
  }

  start() {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      if (this.started) {
        return;
      }

      const availablePlugins = Plugins["a" /* Plugins */].getAvailablePlugins(this);

      for (const id in availablePlugins) {
        this.plugins[id] = availablePlugins[id];
      }

      this.started = true;
      this.eventListeners.addListeners();

      for (const id in this.plugins) {
        const plugin = this.plugins[id];

        if (plugin.startAsync !== undefined) {
          yield plugin.startAsync();
        } else if (plugin.start !== undefined) {
          plugin.start();
        }
      }

      for (const type in this.drawers) {
        const drawer = this.drawers[type];

        if (drawer.init !== undefined) {
          yield drawer.init(this);
        }
      }

      this.init();
      this.play();
    });
  }

  init() {
    this.retina.init();
    this.canvas.init();
    this.particles.init();
    this.densityAutoParticles();

    for (const id in this.plugins) {
      const plugin = this.plugins[id];

      if (plugin.init !== undefined) {
        plugin.init();
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Core/Loader.js




let tsParticlesDom = [];
class Loader_Loader {
  static dom() {
    if (!tsParticlesDom) {
      tsParticlesDom = [];
    }

    return tsParticlesDom;
  }

  static domItem(index) {
    const dom = Loader_Loader.dom();
    const item = dom[index];

    if (item && !item.destroyed) {
      return item;
    }

    dom.splice(index, 1);
  }

  static loadFromArray(tagId, params, index) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      return Loader_Loader.load(tagId, Utils["a" /* Utils */].itemFromArray(params, index));
    });
  }

  static setFromArray(id, domContainer, params, index) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      return Loader_Loader.set(id, domContainer, Utils["a" /* Utils */].itemFromArray(params, index));
    });
  }

  static load(tagId, params) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      const domContainer = document.getElementById(tagId);

      if (!domContainer) {
        return;
      }

      return this.set(tagId, domContainer, params);
    });
  }

  static set(id, domContainer, params) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      const dom = Loader_Loader.dom();
      const oldIndex = dom.findIndex(v => v.id === id);

      if (oldIndex >= 0) {
        const old = this.domItem(oldIndex);

        if (old && !old.destroyed) {
          old.destroy();
          dom.splice(oldIndex, 1);
        }
      }

      let canvasEl;
      let generatedCanvas;

      if (domContainer.tagName === "canvas") {
        canvasEl = domContainer;
        generatedCanvas = false;
      } else {
        const existingCanvases = domContainer.getElementsByTagName("canvas");

        if (existingCanvases.length) {
          canvasEl = existingCanvases[0];

          if (!canvasEl.className) {
            canvasEl.className = Constants["a" /* Constants */].canvasClass;
          }

          generatedCanvas = false;
        } else {
          generatedCanvas = true;
          canvasEl = document.createElement("canvas");
          canvasEl.className = Constants["a" /* Constants */].canvasClass;
          canvasEl.style.width = "100%";
          canvasEl.style.height = "100%";
          domContainer.appendChild(canvasEl);
        }
      }

      const newItem = new Container_Container(id, params);

      if (oldIndex >= 0) {
        dom.splice(oldIndex, 0, newItem);
      } else {
        dom.push(newItem);
      }

      newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
      yield newItem.start();
      return newItem;
    });
  }

  static loadJSON(tagId, jsonUrl) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      const response = yield fetch(jsonUrl);

      if (response.ok) {
        const params = yield response.json();

        if (params instanceof Array) {
          return Loader_Loader.loadFromArray(tagId, params);
        } else {
          return Loader_Loader.load(tagId, params);
        }
      } else {
        console.error(`Error tsParticles - fetch status: ${response.status}`);
        console.error("Error tsParticles - File config not found");
      }
    });
  }

  static setJSON(id, domContainer, jsonUrl) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      const response = yield fetch(jsonUrl);

      if (response.ok) {
        const params = yield response.json();

        if (params instanceof Array) {
          return Loader_Loader.setFromArray(id, domContainer, params);
        } else {
          return Loader_Loader.set(id, domContainer, params);
        }
      } else {
        console.error(`Error tsParticles - fetch status: ${response.status}`);
        console.error("Error tsParticles - File config not found");
      }
    });
  }

  static setOnClickHandler(callback) {
    const dom = Loader_Loader.dom();

    if (dom.length === 0) {
      throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
    }

    for (const domItem of dom) {
      const el = domItem.interactivity.element;

      if (el) {
        el.addEventListener("click", callback);
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/ShapeType.js
var ShapeType = __webpack_require__(1);

// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/LineDrawer.js
class LineDrawer {
  draw(context, particle, radius, _opacity) {
    context.moveTo(0, -radius / 2);
    context.lineTo(0, radius / 2);
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/CircleDrawer.js
class CircleDrawer {
  draw(context, particle, radius, _opacity) {
    context.arc(0, 0, radius, 0, Math.PI * 2, false);
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/SquareDrawer.js
class SquareDrawer {
  draw(context, particle, radius, _opacity) {
    context.rect(-radius, -radius, radius * 2, radius * 2);
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/PolygonDrawerBase.js
class PolygonDrawerBase {
  draw(context, particle, radius, _opacity) {
    const start = this.getCenter(particle, radius);
    const side = this.getSidesData(particle, radius);
    const sideCount = side.count.numerator * side.count.denominator;
    const decimalSides = side.count.numerator / side.count.denominator;
    const interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;

    if (!context) {
      return;
    }

    context.beginPath();
    context.translate(start.x, start.y);
    context.moveTo(0, 0);

    for (let i = 0; i < sideCount; i++) {
      context.lineTo(side.length, 0);
      context.translate(side.length, 0);
      context.rotate(interiorAngle);
    }
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/TriangleDrawer.js

class TriangleDrawer_TriangleDrawer extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    return {
      count: {
        denominator: 2,
        numerator: 3
      },
      length: radius * 2
    };
  }

  getCenter(particle, radius) {
    return {
      x: -radius,
      y: radius / 1.66
    };
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/StarDrawer.js

class StarDrawer_StarDrawer extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    var _a;

    const polygon = particle.shapeData;
    const sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
    return {
      count: {
        denominator: 2,
        numerator: sides
      },
      length: radius * 2 * 2.66 / (sides / 3)
    };
  }

  getCenter(particle, radius) {
    var _a;

    const polygon = particle.shapeData;
    const sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
    return {
      x: -radius * 2 / (sides / 4),
      y: -radius / (2 * 2.66 / 3.5)
    };
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/PolygonDrawer.js

class PolygonDrawer_PolygonDrawer extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    var _a, _b;

    const polygon = particle.shapeData;
    const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
    return {
      count: {
        denominator: 1,
        numerator: sides
      },
      length: radius * 2.66 / (sides / 3)
    };
  }

  getCenter(particle, radius) {
    var _a, _b;

    const polygon = particle.shapeData;
    const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
    return {
      x: -radius / (sides / 3.5),
      y: -radius / (2.66 / 3.5)
    };
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/TextDrawer.js



class TextDrawer_TextDrawer {
  init(container) {
    var _a, _b;

    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      const options = container.options;

      if (Utils["a" /* Utils */].isInArray(ShapeType["a" /* ShapeType */].char, options.particles.shape.type) || Utils["a" /* Utils */].isInArray(ShapeType["a" /* ShapeType */].character, options.particles.shape.type)) {
        const shapeOptions = (_a = options.particles.shape.options[ShapeType["a" /* ShapeType */].character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[ShapeType["a" /* ShapeType */].char];

        if (shapeOptions instanceof Array) {
          for (const character of shapeOptions) {
            yield Utils["a" /* Utils */].loadFont(character);
          }
        } else {
          const character = (_b = options.particles.shape.options[ShapeType["a" /* ShapeType */].character]) !== null && _b !== void 0 ? _b : options.particles.shape.options[ShapeType["a" /* ShapeType */].char];

          if (character !== undefined) {
            yield Utils["a" /* Utils */].loadFont(character);
          }
        }
      }
    });
  }

  draw(context, particle, radius, _opacity) {
    const character = particle.shapeData;

    if (character === undefined) {
      return;
    }

    const textData = character.value;

    if (textData === undefined) {
      return;
    }

    const textParticle = particle;

    if (textParticle.text === undefined) {
      if (textData instanceof Array) {
        textParticle.text = Utils["a" /* Utils */].itemFromArray(textData, particle.randomIndexData);
      } else {
        textParticle.text = textData;
      }
    }

    const text = textParticle.text;
    const style = character.style;
    const weight = character.weight;
    const size = Math.round(radius) * 2;
    const font = character.font;
    const fill = particle.fill;
    context.font = `${style} ${weight} ${size}px "${font}"`;
    const pos = {
      x: -radius / 2,
      y: radius / 2
    };

    if (fill) {
      context.fillText(text, pos.x, pos.y);
    } else {
      context.strokeText(text, pos.x, pos.y);
    }
  }

}
// CONCATENATED MODULE: ./dist/Core/Particle/ShapeDrawers/ImageDrawer.js



class ImageDrawer_ImageDrawer {
  constructor() {
    this.images = [];
  }

  getImages(container) {
    const containerImages = this.images.filter(t => t.id === container.id);

    if (!containerImages.length) {
      this.images.push({
        id: container.id,
        images: []
      });
      return this.getImages(container);
    } else {
      return containerImages[0];
    }
  }

  addImage(container, image) {
    const containerImages = this.getImages(container);
    containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
  }

  init(container) {
    var _a;

    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      const options = container.options;
      const shapeOptions = options.particles.shape;

      if (!Utils["a" /* Utils */].isInArray(ShapeType["a" /* ShapeType */].image, shapeOptions.type) && !Utils["a" /* Utils */].isInArray(ShapeType["a" /* ShapeType */].images, shapeOptions.type)) {
        return;
      }

      const imageOptions = (_a = shapeOptions.options[ShapeType["a" /* ShapeType */].images]) !== null && _a !== void 0 ? _a : shapeOptions.options[ShapeType["a" /* ShapeType */].image];

      if (imageOptions instanceof Array) {
        for (const optionsImage of imageOptions) {
          yield this.loadImageShape(container, optionsImage);
        }
      } else {
        yield this.loadImageShape(container, imageOptions);
      }
    });
  }

  destroy() {
    this.images = [];
  }

  loadImageShape(container, imageShape) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      try {
        const image = imageShape.replaceColor ? yield Utils["a" /* Utils */].downloadSvgImage(imageShape.src) : yield Utils["a" /* Utils */].loadImage(imageShape.src);
        this.addImage(container, image);
      } catch (_a) {
        console.log(`tsParticles error - ${imageShape.src} not found`);
      }
    });
  }

  draw(context, particle, radius, opacity) {
    var _a, _b;

    if (!context) {
      return;
    }

    const image = particle.image;
    const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;

    if (!element) {
      return;
    }

    const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
    const pos = {
      x: -radius,
      y: -radius
    };

    if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
      context.globalAlpha = opacity;
    }

    context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);

    if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
      context.globalAlpha = 1;
    }
  }

}
// CONCATENATED MODULE: ./dist/index.slim.js













class index_slim_Main {
  constructor() {
    this.initialized = false;

    if (typeof window !== "undefined" && window) {
      window.customRequestAnimationFrame = (() => {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || (callback => window.setTimeout(callback, 1000 / 60));
      })();

      window.customCancelRequestAnimationFrame = (() => {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
      })();
    }

    const squareDrawer = new SquareDrawer();
    const textDrawer = new TextDrawer_TextDrawer();
    const imageDrawer = new ImageDrawer_ImageDrawer();
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].line, new LineDrawer());
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].circle, new CircleDrawer());
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].edge, squareDrawer);
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].square, squareDrawer);
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].triangle, new TriangleDrawer_TriangleDrawer());
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].star, new StarDrawer_StarDrawer());
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].polygon, new PolygonDrawer_PolygonDrawer());
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].char, textDrawer);
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].character, textDrawer);
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].image, imageDrawer);
    Plugins["a" /* Plugins */].addShapeDrawer(ShapeType["a" /* ShapeType */].images, imageDrawer);
  }

  init() {
    if (!this.initialized) {
      this.initialized = true;
    }
  }

  loadFromArray(tagId, params, index) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      return Loader_Loader.loadFromArray(tagId, params, index);
    });
  }

  load(tagId, params) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
      return Loader_Loader.load(tagId, params);
    });
  }

  loadJSON(tagId, pathConfigJson) {
    return Loader_Loader.loadJSON(tagId, pathConfigJson);
  }

  setOnClickHandler(callback) {
    Loader_Loader.setOnClickHandler(callback);
  }

  dom() {
    return Loader_Loader.dom();
  }

  domItem(index) {
    return Loader_Loader.domItem(index);
  }

  addShape(shape, drawer, init, afterEffect, destroy) {
    let customDrawer;

    if (typeof drawer === "function") {
      customDrawer = {
        afterEffect: afterEffect,
        draw: drawer,
        destroy: destroy,
        init: init
      };
    } else {
      customDrawer = drawer;
    }

    Plugins["a" /* Plugins */].addShapeDrawer(shape, customDrawer);
  }

  addPreset(preset, options) {
    Plugins["a" /* Plugins */].addPreset(preset, options);
  }

  addPlugin(plugin) {
    Plugins["a" /* Plugins */].addPlugin(plugin);
  }

}

const tsParticles = new index_slim_Main();

const particlesJS = (tagId, params) => {
  return tsParticles.load(tagId, params);
};

particlesJS.load = (tagId, pathConfigJson, callback) => {
  tsParticles.loadJSON(tagId, pathConfigJson).then(container => {
    if (container) {
      callback(container);
    }
  });
};

particlesJS.setOnClickHandler = callback => {
  tsParticles.setOnClickHandler(callback);
};

const pJSDom = tsParticles.dom();


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartValueType; });
var StartValueType;

(function (StartValueType) {
  StartValueType["max"] = "max";
  StartValueType["min"] = "min";
})(StartValueType || (StartValueType = {}));

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollisionMode; });
var CollisionMode;

(function (CollisionMode) {
  CollisionMode["bounce"] = "bounce";
})(CollisionMode || (CollisionMode = {}));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Particles_Particles; });

// EXTERNAL MODULE: ./dist/Options/Classes/Particles/OptionsColor.js
var OptionsColor = __webpack_require__(3);

// CONCATENATED MODULE: ./dist/Options/Classes/Particles/LineLinked/LineLinkedShadow.js

class LineLinkedShadow_LineLinkedShadow {
  constructor() {
    this.blur = 5;
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.enable = false;
    this.color.value = "lime";
  }

  load(data) {
    if (data !== undefined) {
      if (data.blur !== undefined) {
        this.blur = data.blur;
      }

      this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/LineLinked/LineLinked.js


class LineLinked_LineLinked {
  constructor() {
    this.blink = false;
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.consent = false;
    this.distance = 100;
    this.enable = false;
    this.opacity = 1;
    this.shadow = new LineLinkedShadow_LineLinkedShadow();
    this.width = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.blink !== undefined) {
        this.blink = data.blink;
      }

      this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);

      if (data.consent !== undefined) {
        this.consent = data.consent;
      }

      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      this.shadow.load(data.shadow);

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Attract.js
class Attract {
  constructor() {
    this.enable = false;
    this.rotate = {
      x: 3000,
      y: 3000
    };
  }

  get rotateX() {
    return this.rotate.x;
  }

  set rotateX(value) {
    this.rotate.x = value;
  }

  get rotateY() {
    return this.rotate.y;
  }

  set rotateY(value) {
    this.rotate.y = value;
  }

  load(data) {
    var _a, _b, _c, _d;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;

      if (rotateX !== undefined) {
        this.rotate.x = rotateX;
      }

      const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;

      if (rotateY !== undefined) {
        this.rotate.y = rotateY;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/MoveDirection.js
var MoveDirection = __webpack_require__(10);

// EXTERNAL MODULE: ./dist/Enums/OutMode.js
var OutMode = __webpack_require__(5);

// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Trail.js

class Trail_Trail {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fillColor = new OptionsColor["a" /* OptionsColor */]();
    this.fillColor.value = "#000000";
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      this.fillColor = OptionsColor["a" /* OptionsColor */].create(this.fillColor, data.fillColor);

      if (data.length !== undefined) {
        this.length = data.length;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Noise/NoiseRandom.js
class NoiseRandom {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.minimumValue !== undefined) {
        this.minimumValue = data.minimumValue;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Noise/NoiseDelay.js

class NoiseDelay_NoiseDelay {
  constructor() {
    this.random = new NoiseRandom();
    this.value = 0;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      (_a = this.random) === null || _a === void 0 ? void 0 : _a.load(data.random);

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Noise/NoiseValue.js
class NoiseValue {
  constructor() {
    this.value = 1;
    this.offset = 0;
  }

  load(data) {
    if (data !== undefined) {
      if (data.value !== undefined) {
        this.value = data.value === 0 ? this.value : data.value;
      }

      if (data.offset !== undefined) {
        this.offset = data.offset;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Noise/NoiseFactor.js

class NoiseFactor_NoiseFactor {
  constructor() {
    this.horizontal = new NoiseValue();
    this.horizontal.value = 50;
    this.horizontal.offset = 0;
    this.vertical = new NoiseValue();
    this.vertical.value = 10;
    this.vertical.offset = 40000;
  }

  load(data) {
    if (data !== undefined) {
      this.horizontal.load(data.horizontal);
      this.vertical.load(data.vertical);
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Noise/Noise.js


class Noise_Noise {
  constructor() {
    this.delay = new NoiseDelay_NoiseDelay();
    this.enable = false;
    this.factor = new NoiseFactor_NoiseFactor();
  }

  load(data) {
    if (data !== undefined) {
      this.delay.load(data.delay);

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      this.factor.load(data.factor);
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Move.js





class Move_Move {
  constructor() {
    this.attract = new Attract();
    this.direction = MoveDirection["a" /* MoveDirection */].none;
    this.enable = false;
    this.noise = new Noise_Noise();
    this.outMode = OutMode["a" /* OutMode */].out;
    this.random = false;
    this.speed = 2;
    this.straight = false;
    this.trail = new Trail_Trail();
    this.vibrate = false;
  }

  get collisions() {
    return false;
  }

  set collisions(value) {}

  get bounce() {
    return this.collisions;
  }

  set bounce(value) {
    this.collisions = value;
  }

  get out_mode() {
    return this.outMode;
  }

  set out_mode(value) {
    this.outMode = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      this.attract.load(data.attract);

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      this.noise.load(data.noise);
      const outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;

      if (outMode !== undefined) {
        this.outMode = outMode;
      }

      if (data.random !== undefined) {
        this.random = data.random;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.straight !== undefined) {
        this.straight = data.straight;
      }

      this.trail.load(data.trail);

      if (data.vibrate !== undefined) {
        this.vibrate = data.vibrate;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Density.js
class Density {
  constructor() {
    this.enable = false;
    this.area = 800;
    this.factor = 1000;
  }

  get value_area() {
    return this.area;
  }

  set value_area(value) {
    this.area = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;

      if (area !== undefined) {
        this.area = area;
      }

      if (data.factor !== undefined) {
        this.factor = data.factor;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/ParticlesNumber.js

class ParticlesNumber_ParticlesNumber {
  constructor() {
    this.density = new Density();
    this.limit = 0;
    this.value = 100;
  }

  get max() {
    return this.limit;
  }

  set max(value) {
    this.limit = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      this.density.load(data.density);
      const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;

      if (limit !== undefined) {
        this.limit = limit;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Opacity/OpacityAnimation.js
class OpacityAnimation {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 2;
    this.sync = false;
  }

  get opacity_min() {
    return this.minimumValue;
  }

  set opacity_min(value) {
    this.minimumValue = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;

      if (minimumValue !== undefined) {
        this.minimumValue = minimumValue;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Opacity/OpacityRandom.js
class OpacityRandom {
  constructor() {
    this.enable = false;
    this.minimumValue = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.minimumValue !== undefined) {
        this.minimumValue = data.minimumValue;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Opacity/Opacity.js


class Opacity_Opacity {
  constructor() {
    this.animation = new OpacityAnimation();
    this.random = new OpacityRandom();
    this.value = 1;
  }

  get anim() {
    return this.animation;
  }

  set anim(value) {
    this.animation = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);

      if (data.random !== undefined) {
        if (typeof data.random === "boolean") {
          this.random.enable = data.random;
        } else {
          this.random.load(data.random);
        }
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Options/Classes/Particles/Shape/Shape.js + 4 modules
var Shape = __webpack_require__(20);

// EXTERNAL MODULE: ./dist/Enums/StartValueType.js
var StartValueType = __webpack_require__(17);

// EXTERNAL MODULE: ./dist/Enums/DestroyType.js
var DestroyType = __webpack_require__(14);

// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Size/SizeAnimation.js


class SizeAnimation_SizeAnimation {
  constructor() {
    this.destroy = DestroyType["a" /* DestroyType */].none;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 5;
    this.startValue = StartValueType["a" /* StartValueType */].max;
    this.sync = false;
  }

  get size_min() {
    return this.minimumValue;
  }

  set size_min(value) {
    this.minimumValue = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.destroy !== undefined) {
        this.destroy = data.destroy;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;

      if (minimumValue !== undefined) {
        this.minimumValue = minimumValue;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.startValue !== undefined) {
        this.startValue = data.startValue;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Size/SizeRandom.js
class SizeRandom {
  constructor() {
    this.enable = false;
    this.minimumValue = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.minimumValue !== undefined) {
        this.minimumValue = data.minimumValue;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Size/Size.js


class Size_Size {
  constructor() {
    this.animation = new SizeAnimation_SizeAnimation();
    this.random = new SizeRandom();
    this.value = 3;
  }

  get anim() {
    return this.animation;
  }

  set anim(value) {
    this.animation = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;

      if (animation !== undefined) {
        this.animation.load(animation);
      }

      if (data.random !== undefined) {
        if (typeof data.random === "boolean") {
          this.random.enable = data.random;
        } else {
          this.random.load(data.random);
        }
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Rotate/RotateAnimation.js
class RotateAnimation {
  constructor() {
    this.enable = false;
    this.speed = 0;
    this.sync = false;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/RotateDirection.js
var RotateDirection = __webpack_require__(12);

// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Rotate/Rotate.js


class Rotate_Rotate {
  constructor() {
    this.animation = new RotateAnimation();
    this.direction = RotateDirection["a" /* RotateDirection */].clockwise;
    this.random = false;
    this.value = 0;
  }

  load(data) {
    if (data !== undefined) {
      this.animation.load(data.animation);

      if (data.random !== undefined) {
        this.random = data.random;
      }

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Shadow.js

class Shadow_Shadow {
  constructor() {
    this.blur = 0;
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000000";
  }

  load(data) {
    if (data !== undefined) {
      if (data.blur !== undefined) {
        this.blur = data.blur;
      }

      this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.offset !== undefined) {
        if (data.offset.x !== undefined) {
          this.offset.x = data.offset.x;
        }

        if (data.offset.y !== undefined) {
          this.offset.y = data.offset.y;
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Stroke.js

class Stroke_Stroke {
  constructor() {
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.width = 0;
    this.opacity = 1;
    this.color.value = "#ff0000";
  }

  load(data) {
    if (data !== undefined) {
      this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);

      if (data.width !== undefined) {
        this.width = data.width;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Enums/CollisionMode.js
var CollisionMode = __webpack_require__(18);

// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Collisions.js

class Collisions_Collisions {
  constructor() {
    this.enable = false;
    this.mode = CollisionMode["a" /* CollisionMode */].bounce;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Twinkle/TwinkleValues.js

class TwinkleValues_TwinkleValues {
  constructor() {
    this.enable = false;
    this.frequency = 0.05;
    this.opacity = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.frequency !== undefined) {
        this.frequency = data.frequency;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Twinkle/Twinkle.js

class Twinkle_Twinkle {
  constructor() {
    this.lines = new TwinkleValues_TwinkleValues();
    this.particles = new TwinkleValues_TwinkleValues();
  }

  load(data) {
    if (data !== undefined) {
      this.lines.load(data.lines);
      this.particles.load(data.particles);
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Particles.js












class Particles_Particles {
  constructor() {
    this.collisions = new Collisions_Collisions();
    this.color = new OptionsColor["a" /* OptionsColor */]();
    this.lineLinked = new LineLinked_LineLinked();
    this.move = new Move_Move();
    this.number = new ParticlesNumber_ParticlesNumber();
    this.opacity = new Opacity_Opacity();
    this.rotate = new Rotate_Rotate();
    this.shadow = new Shadow_Shadow();
    this.shape = new Shape["a" /* Shape */]();
    this.size = new Size_Size();
    this.stroke = new Stroke_Stroke();
    this.twinkle = new Twinkle_Twinkle();
  }

  get line_linked() {
    return this.lineLinked;
  }

  set line_linked(value) {
    this.lineLinked = value;
  }

  load(data) {
    var _a, _b, _c, _d, _e, _f;

    if (data !== undefined) {
      if (data.color !== undefined) {
        if (data.color instanceof Array) {
          this.color = data.color.map(s => OptionsColor["a" /* OptionsColor */].create(undefined, s));
        } else {
          if (this.color instanceof Array) {
            this.color = new OptionsColor["a" /* OptionsColor */]();
          }

          this.color = OptionsColor["a" /* OptionsColor */].create(this.color, data.color);
        }
      }

      const lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;

      if (lineLinked !== undefined) {
        this.lineLinked.load(lineLinked);
      }

      this.move.load(data.move);
      this.number.load(data.number);
      this.opacity.load(data.opacity);
      this.rotate.load(data.rotate);
      this.shape.load(data.shape);
      this.size.load(data.size);
      this.shadow.load(data.shadow);
      this.twinkle.load(data.twinkle);
      const collisions = (_c = (_b = data.move) === null || _b === void 0 ? void 0 : _b.collisions) !== null && _c !== void 0 ? _c : (_d = data.move) === null || _d === void 0 ? void 0 : _d.bounce;

      if (collisions !== undefined) {
        this.collisions.enable = collisions;
      }

      this.collisions.load(data.collisions);
      const strokeToLoad = (_e = data.stroke) !== null && _e !== void 0 ? _e : (_f = data.shape) === null || _f === void 0 ? void 0 : _f.stroke;

      if (strokeToLoad !== undefined) {
        if (strokeToLoad instanceof Array) {
          this.stroke = strokeToLoad.map(s => {
            const tmp = new Stroke_Stroke();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.stroke instanceof Array) {
            this.stroke = new Stroke_Stroke();
          }

          this.stroke.load(strokeToLoad);
        }
      }
    }
  }

}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Shape_Shape; });

// EXTERNAL MODULE: ./dist/Enums/ShapeType.js
var ShapeType = __webpack_require__(1);

// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Shape/ShapeBase.js
class ShapeBase {
  constructor() {
    this.fill = true;
    this.close = true;
  }

  load(data) {
    if (data !== undefined) {
      if (data.fill !== undefined) {
        this.fill = data.fill;
      }

      if (data.particles !== undefined) {
        this.particles = data.particles;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Shape/ImageShape.js

class ImageShape_ImageShape extends ShapeBase {
  constructor() {
    super();
    this.height = 100;
    this.replaceColor = false;
    this.src = "";
    this.width = 100;
  }

  get replace_color() {
    return this.replaceColor;
  }

  set replace_color(value) {
    this.replaceColor = value;
  }

  load(data) {
    var _a;

    super.load(data);

    if (data !== undefined) {
      if (data.height !== undefined) {
        this.height = data.height;
      }

      const replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;

      if (replaceColor !== undefined) {
        this.replaceColor = replaceColor;
      }

      if (data.src !== undefined) {
        this.src = data.src;
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Shape/PolygonShape.js

class PolygonShape_PolygonShape extends ShapeBase {
  constructor() {
    super();
    this.sides = 5;
  }

  get nb_sides() {
    return this.sides;
  }

  set nb_sides(value) {
    this.sides = value;
  }

  load(data) {
    var _a;

    super.load(data);

    if (data !== undefined) {
      const sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;

      if (sides !== undefined) {
        this.sides = sides;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Shape/CharacterShape.js

class CharacterShape_CharacterShape extends ShapeBase {
  constructor() {
    super();
    this.font = "Verdana";
    this.style = "";
    this.value = "*";
    this.weight = "400";
  }

  load(data) {
    super.load(data);

    if (data !== undefined) {
      if (data.font !== undefined) {
        this.font = data.font;
      }

      if (data.style !== undefined) {
        this.style = data.style;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }

      if (data.weight !== undefined) {
        this.weight = data.weight;
      }
    }
  }

}
// EXTERNAL MODULE: ./dist/Utils/Utils.js
var Utils = __webpack_require__(0);

// CONCATENATED MODULE: ./dist/Options/Classes/Particles/Shape/Shape.js





class Shape_Shape {
  constructor() {
    this.options = {};
    this.character = new CharacterShape_CharacterShape();
    this.image = new ImageShape_ImageShape();
    this.polygon = new PolygonShape_PolygonShape();
    this.type = ShapeType["a" /* ShapeType */].circle;
  }

  get image() {
    var _a;

    return (_a = this.options[ShapeType["a" /* ShapeType */].image]) !== null && _a !== void 0 ? _a : this.options[ShapeType["a" /* ShapeType */].images];
  }

  set image(value) {
    this.options[ShapeType["a" /* ShapeType */].image] = value;
    this.options[ShapeType["a" /* ShapeType */].images] = value;
  }

  get custom() {
    return this.options;
  }

  set custom(value) {
    this.options = value;
  }

  get images() {
    return this.image instanceof Array ? this.image : [this.image];
  }

  set images(value) {
    this.image = value;
  }

  get stroke() {
    return [];
  }

  set stroke(_value) {}

  get character() {
    var _a;

    return (_a = this.options[ShapeType["a" /* ShapeType */].character]) !== null && _a !== void 0 ? _a : this.options[ShapeType["a" /* ShapeType */].char];
  }

  set character(value) {
    this.options[ShapeType["a" /* ShapeType */].character] = value;
    this.options[ShapeType["a" /* ShapeType */].char] = value;
  }

  get polygon() {
    var _a;

    return (_a = this.options[ShapeType["a" /* ShapeType */].polygon]) !== null && _a !== void 0 ? _a : this.options[ShapeType["a" /* ShapeType */].star];
  }

  set polygon(value) {
    this.options[ShapeType["a" /* ShapeType */].polygon] = value;
    this.options[ShapeType["a" /* ShapeType */].star] = value;
  }

  load(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

    if (data !== undefined) {
      const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;

      if (options !== undefined) {
        for (const shape in options) {
          const item = options[shape];

          if (item !== undefined) {
            this.options[shape] = Utils["a" /* Utils */].deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
          }
        }
      }

      if (data.character !== undefined) {
        const item = data.character;

        if (item !== undefined) {
          if (item instanceof Array) {
            if (this.options[ShapeType["a" /* ShapeType */].character] instanceof Array) {
              this.options[ShapeType["a" /* ShapeType */].character] = Utils["a" /* Utils */].deepExtend((_c = this.options[ShapeType["a" /* ShapeType */].character]) !== null && _c !== void 0 ? _c : [], item);
              this.options[ShapeType["a" /* ShapeType */].char] = Utils["a" /* Utils */].deepExtend((_d = this.options[ShapeType["a" /* ShapeType */].char]) !== null && _d !== void 0 ? _d : [], item);
            } else {
              this.options[ShapeType["a" /* ShapeType */].character] = Utils["a" /* Utils */].deepExtend([], item);
              this.options[ShapeType["a" /* ShapeType */].char] = Utils["a" /* Utils */].deepExtend([], item);
            }
          } else {
            if (this.options[ShapeType["a" /* ShapeType */].character] instanceof Array) {
              this.options[ShapeType["a" /* ShapeType */].character] = Utils["a" /* Utils */].deepExtend({}, item);
              this.options[ShapeType["a" /* ShapeType */].char] = Utils["a" /* Utils */].deepExtend({}, item);
            } else {
              this.options[ShapeType["a" /* ShapeType */].character] = Utils["a" /* Utils */].deepExtend((_e = this.options[ShapeType["a" /* ShapeType */].character]) !== null && _e !== void 0 ? _e : [], item);
              this.options[ShapeType["a" /* ShapeType */].char] = Utils["a" /* Utils */].deepExtend((_f = this.options[ShapeType["a" /* ShapeType */].char]) !== null && _f !== void 0 ? _f : [], item);
            }
          }
        }
      }

      if (data.polygon !== undefined) {
        const item = data.polygon;

        if (item !== undefined) {
          if (item instanceof Array) {
            if (this.options[ShapeType["a" /* ShapeType */].polygon] instanceof Array) {
              this.options[ShapeType["a" /* ShapeType */].polygon] = Utils["a" /* Utils */].deepExtend((_g = this.options[ShapeType["a" /* ShapeType */].polygon]) !== null && _g !== void 0 ? _g : [], item);
              this.options[ShapeType["a" /* ShapeType */].star] = Utils["a" /* Utils */].deepExtend((_h = this.options[ShapeType["a" /* ShapeType */].star]) !== null && _h !== void 0 ? _h : [], item);
            } else {
              this.options[ShapeType["a" /* ShapeType */].polygon] = Utils["a" /* Utils */].deepExtend([], item);
              this.options[ShapeType["a" /* ShapeType */].star] = Utils["a" /* Utils */].deepExtend([], item);
            }
          } else {
            if (this.options[ShapeType["a" /* ShapeType */].polygon] instanceof Array) {
              this.options[ShapeType["a" /* ShapeType */].polygon] = Utils["a" /* Utils */].deepExtend({}, item);
              this.options[ShapeType["a" /* ShapeType */].star] = Utils["a" /* Utils */].deepExtend({}, item);
            } else {
              this.options[ShapeType["a" /* ShapeType */].polygon] = Utils["a" /* Utils */].deepExtend((_j = this.options[ShapeType["a" /* ShapeType */].polygon]) !== null && _j !== void 0 ? _j : [], item);
              this.options[ShapeType["a" /* ShapeType */].star] = Utils["a" /* Utils */].deepExtend((_k = this.options[ShapeType["a" /* ShapeType */].star]) !== null && _k !== void 0 ? _k : [], item);
            }
          }
        }
      }

      if (data.image !== undefined) {
        const item = data.image;

        if (item !== undefined) {
          if (item instanceof Array) {
            if (this.options[ShapeType["a" /* ShapeType */].image] instanceof Array) {
              this.options[ShapeType["a" /* ShapeType */].image] = Utils["a" /* Utils */].deepExtend((_l = this.options[ShapeType["a" /* ShapeType */].image]) !== null && _l !== void 0 ? _l : [], item);
              this.options[ShapeType["a" /* ShapeType */].images] = Utils["a" /* Utils */].deepExtend((_m = this.options[ShapeType["a" /* ShapeType */].images]) !== null && _m !== void 0 ? _m : [], item);
            } else {
              this.options[ShapeType["a" /* ShapeType */].image] = Utils["a" /* Utils */].deepExtend([], item);
              this.options[ShapeType["a" /* ShapeType */].images] = Utils["a" /* Utils */].deepExtend([], item);
            }
          } else {
            if (this.options[ShapeType["a" /* ShapeType */].image] instanceof Array) {
              this.options[ShapeType["a" /* ShapeType */].image] = Utils["a" /* Utils */].deepExtend({}, item);
              this.options[ShapeType["a" /* ShapeType */].images] = Utils["a" /* Utils */].deepExtend({}, item);
            } else {
              this.options[ShapeType["a" /* ShapeType */].image] = Utils["a" /* Utils */].deepExtend((_o = this.options[ShapeType["a" /* ShapeType */].image]) !== null && _o !== void 0 ? _o : [], item);
              this.options[ShapeType["a" /* ShapeType */].images] = Utils["a" /* Utils */].deepExtend((_p = this.options[ShapeType["a" /* ShapeType */].images]) !== null && _p !== void 0 ? _p : [], item);
            }
          }
        }
      }

      if (data.type !== undefined) {
        this.type = data.type;
      }
    }
  }

}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeMode; });
var SizeMode;

(function (SizeMode) {
  SizeMode["precise"] = "precise";
  SizeMode["percent"] = "percent";
})(SizeMode || (SizeMode = {}));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitterSize; });
/* harmony import */ var _Enums_SizeMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

class EmitterSize {
  constructor() {
    this.mode = _Enums_SizeMode__WEBPACK_IMPORTED_MODULE_0__[/* SizeMode */ "a"].percent;
    this.height = 0;
    this.width = 0;
  }

  load(data) {
    if (data !== undefined) {
      if (data.mode !== undefined) {
        this.mode = data.mode;
      }

      if (data.height !== undefined) {
        this.height = data.height;
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }

}

/***/ })
/******/ ])));