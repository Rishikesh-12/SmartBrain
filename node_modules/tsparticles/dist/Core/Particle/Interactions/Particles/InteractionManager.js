"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Linker_1 = require("./Linker");
var Attractor_1 = require("./Attractor");
var Collider_1 = require("./Collider");
var Infecter_1 = require("./Infecter");
var InteractionManager = (function () {
    function InteractionManager() {
    }
    InteractionManager.interact = function (p1, container, delta) {
        if (p1.particlesOptions.lineLinked.enable) {
            Linker_1.Linker.link(p1, container, delta);
        }
        if (p1.particlesOptions.move.attract.enable) {
            Attractor_1.Attractor.attract(p1, container, delta);
        }
        if (p1.particlesOptions.collisions.enable) {
            Collider_1.Collider.collide(p1, container, delta);
        }
        if (container.options.infection.enable) {
            Infecter_1.Infecter.infect(p1, container, delta);
        }
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;
