"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attract_1 = require("./Attract");
var MoveDirection_1 = require("../../../Enums/MoveDirection");
var OutMode_1 = require("../../../Enums/OutMode");
var Trail_1 = require("./Trail");
var Noise_1 = require("./Noise/Noise");
var Move = (function () {
    function Move() {
        this.attract = new Attract_1.Attract();
        this.direction = MoveDirection_1.MoveDirection.none;
        this.enable = false;
        this.noise = new Noise_1.Noise();
        this.outMode = OutMode_1.OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail_1.Trail();
        this.vibrate = false;
    }
    Object.defineProperty(Move.prototype, "collisions", {
        get: function () {
            return false;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "bounce", {
        get: function () {
            return this.collisions;
        },
        set: function (value) {
            this.collisions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "out_mode", {
        get: function () {
            return this.outMode;
        },
        set: function (value) {
            this.outMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Move.prototype.load = function (data) {
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
            var outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
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
    };
    return Move;
}());
exports.Move = Move;
