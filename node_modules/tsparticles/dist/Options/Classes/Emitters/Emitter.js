"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection_1 = require("../../../Enums/MoveDirection");
var EmitterRate_1 = require("./EmitterRate");
var EmitterLife_1 = require("./EmitterLife");
var Utils_1 = require("../../../Utils/Utils");
var EmitterSize_1 = require("./EmitterSize");
var Emitter = (function () {
    function Emitter() {
        this.direction = MoveDirection_1.MoveDirection.none;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
    }
    Emitter.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.size !== undefined) {
                if (this.size === undefined) {
                    this.size = new EmitterSize_1.EmitterSize();
                }
                this.size.load(data.size);
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            this.life.load(data.life);
            if (data.particles !== undefined) {
                this.particles = Utils_1.Utils.deepExtend({}, data.particles);
            }
            this.rate.load(data.rate);
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;
