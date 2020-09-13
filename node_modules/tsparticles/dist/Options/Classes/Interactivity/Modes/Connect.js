"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked_1 = require("./ConnectLineLinked");
var Connect = (function () {
    function Connect() {
        this.distance = 80;
        this.lineLinked = new ConnectLineLinked_1.ConnectLineLinked();
        this.radius = 60;
    }
    Object.defineProperty(Connect.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Connect.prototype.load = function (data) {
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
    };
    return Connect;
}());
exports.Connect = Connect;
