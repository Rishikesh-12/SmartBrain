"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("../../../../Utils/Circle");
var Infecter = (function () {
    function Infecter() {
    }
    Infecter.infect = function (p1, container, delta) {
        var _a, _b;
        p1.updateInfection(delta);
        if (p1.infectionStage === undefined) {
            return;
        }
        var options = container.options;
        var infectionOptions = options.infection;
        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
            return;
        }
        var infectionStage1 = infectionOptions.stages[p1.infectionStage];
        var pxRatio = container.retina.pixelRatio;
        var radius = p1.size.value * 2 + infectionStage1.radius * pxRatio;
        var pos = p1.getPosition();
        var infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : p1.infectionStage;
        var query = container.particles.quadTree.query(new Circle_1.Circle(pos.x, pos.y, radius))
            .filter(function (t) { return t.infectionStage === undefined || t.infectionStage !== p1.infectionStage; });
        var infections = infectionStage1.rate;
        var neighbors = query.length;
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (Math.random() < infections / neighbors) {
                if (p2.infectionStage === undefined) {
                    p2.startInfection(infectedStage1);
                }
                else if (p2.infectionStage < p1.infectionStage) {
                    p2.updateInfectionStage(infectedStage1);
                }
                else if (p2.infectionStage > p1.infectionStage) {
                    var infectionStage2 = infectionOptions.stages[p2.infectionStage];
                    var infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : p2.infectionStage;
                    p1.updateInfectionStage(infectedStage2);
                }
            }
        }
    };
    return Infecter;
}());
exports.Infecter = Infecter;
