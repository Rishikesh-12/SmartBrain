"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InfectionStage_1 = require("./InfectionStage");
var Infection = (function () {
    function Infection() {
        this.cure = false;
        this.delay = 0;
        this.enable = false;
        this.infections = 0;
        this.stages = [];
    }
    Infection.prototype.load = function (data) {
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
                this.stages = data.stages.map(function (t) {
                    var s = new InfectionStage_1.InfectionStage();
                    s.load(t);
                    return s;
                });
            }
        }
    };
    return Infection;
}());
exports.Infection = Infection;
