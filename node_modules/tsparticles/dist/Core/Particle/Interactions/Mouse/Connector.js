"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("../../../../Utils/Circle");
var Connector = (function () {
    function Connector() {
    }
    Connector.connect = function (container, _delta) {
        var options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            var mousePos = container.interactivity.mouse.position;
            if (!mousePos) {
                return;
            }
            var distance = Math.abs(container.retina.connectModeRadius);
            var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
            var i = 0;
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var p1 = query_1[_i];
                var pos1 = p1.getPosition();
                for (var _a = 0, _b = query.slice(i + 1); _a < _b.length; _a++) {
                    var p2 = _b[_a];
                    var pos2 = p2.getPosition();
                    var distMax = Math.abs(container.retina.connectModeDistance);
                    var xDiff = Math.abs(pos1.x - pos2.x);
                    var yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }
                ++i;
            }
        }
    };
    return Connector;
}());
exports.Connector = Connector;
