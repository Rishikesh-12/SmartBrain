"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var QuadTree = (function () {
    function QuadTree(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }
    QuadTree.prototype.subdivide = function () {
        var x = this.rectangle.position.x;
        var y = this.rectangle.position.y;
        var w = this.rectangle.size.width;
        var h = this.rectangle.size.height;
        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), this.capacity);
        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), this.capacity);
        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), this.capacity);
        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), this.capacity);
        this.divided = true;
    };
    QuadTree.prototype.insert = function (point) {
        var _a, _b, _c, _d;
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }
        else {
            if (!this.divided) {
                this.subdivide();
            }
        }
        if ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) {
            return true;
        }
        else if ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) {
            return true;
        }
        else if ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) {
            return true;
        }
        else if ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point)) {
            return true;
        }
        return false;
    };
    QuadTree.prototype.query = function (range, found) {
        var _a, _b, _c, _d;
        var res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        else {
            for (var _i = 0, _e = this.points; _i < _e.length; _i++) {
                var p = _e[_i];
                if (range.contains(p.position)) {
                    res.push(p.particle);
                }
            }
            if (this.divided) {
                (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
                (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
                (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
                (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
            }
        }
        return res;
    };
    return QuadTree;
}());
exports.QuadTree = QuadTree;
