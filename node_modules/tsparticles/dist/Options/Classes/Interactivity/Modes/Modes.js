"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bubble_1 = require("./Bubble");
var Connect_1 = require("./Connect");
var Grab_1 = require("./Grab");
var Remove_1 = require("./Remove");
var Push_1 = require("./Push");
var Repulse_1 = require("./Repulse");
var Slow_1 = require("./Slow");
var Emitter_1 = require("../../Emitters/Emitter");
var Absorber_1 = require("../../Absorbers/Absorber");
var Modes = (function () {
    function Modes() {
        this.absorbers = [];
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.emitters = [];
        this.grab = new Grab_1.Grab();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
    }
    Modes.prototype.load = function (data) {
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
    return Modes;
}());
exports.Modes = Modes;
