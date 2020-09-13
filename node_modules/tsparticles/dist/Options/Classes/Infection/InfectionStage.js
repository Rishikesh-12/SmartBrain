"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = require("../Particles/OptionsColor");
var InfectionStage = (function () {
    function InfectionStage() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#ff0000";
        this.radius = 0;
        this.rate = 1;
    }
    InfectionStage.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
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
    };
    return InfectionStage;
}());
exports.InfectionStage = InfectionStage;
