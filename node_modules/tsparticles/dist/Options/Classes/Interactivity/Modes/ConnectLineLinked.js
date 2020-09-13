"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked = (function () {
    function ConnectLineLinked() {
        this.opacity = 0.5;
    }
    ConnectLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return ConnectLineLinked;
}());
exports.ConnectLineLinked = ConnectLineLinked;
