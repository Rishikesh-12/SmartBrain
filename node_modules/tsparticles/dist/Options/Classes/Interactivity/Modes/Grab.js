"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked_1 = require("./GrabLineLinked");
var Grab = (function () {
    function Grab() {
        this.distance = 100;
        this.lineLinked = new GrabLineLinked_1.GrabLineLinked();
    }
    Object.defineProperty(Grab.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Grab.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
        }
    };
    return Grab;
}());
exports.Grab = Grab;
