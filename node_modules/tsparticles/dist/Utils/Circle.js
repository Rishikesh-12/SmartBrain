"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Range_1 = require("./Range");
var Circle = (function (_super) {
    tslib_1.__extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.contains = function (point) {
        var d = Math.pow((point.x - this.position.x), 2) + Math.pow((point.y - this.position.y), 2);
        return d <= this.radius * this.radius;
    };
    Circle.prototype.intersects = function (range) {
        var rect = range;
        var circle = range;
        var pos1 = this.position;
        var pos2 = range.position;
        var xDist = Math.abs(pos2.x - pos1.x);
        var yDist = Math.abs(pos2.y - pos1.y);
        var r = this.radius;
        if (circle.radius !== undefined) {
            var r2 = circle.radius;
            var rSum = r + r2;
            var dist = Math.sqrt(xDist * xDist + yDist + yDist);
            return rSum > dist;
        }
        else if (rect.size !== undefined) {
            var w = rect.size.width;
            var h = rect.size.height;
            var edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);
            if (xDist > (r + w) || yDist > (r + h)) {
                return false;
            }
            if (xDist <= w || yDist <= h) {
                return true;
            }
            return edges <= r * r;
        }
        return false;
    };
    return Circle;
}(Range_1.Range));
exports.Circle = Circle;
