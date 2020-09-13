"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var SpatialGrid = (function () {
    function SpatialGrid(canvas) {
        this.grid = [];
        this.cellSize = 20;
        this.widthSegment = Math.round(canvas.width / this.cellSize);
        this.heightSegment = Math.round(canvas.height / this.cellSize);
    }
    SpatialGrid.prototype.init = function (dimension) {
        this.widthSegment = (dimension === null || dimension === void 0 ? void 0 : dimension.width) ? (dimension === null || dimension === void 0 ? void 0 : dimension.width) / this.cellSize : this.widthSegment;
        this.heightSegment = (dimension === null || dimension === void 0 ? void 0 : dimension.height) ? (dimension === null || dimension === void 0 ? void 0 : dimension.height) / this.cellSize : this.heightSegment;
        this.grid = [];
    };
    SpatialGrid.prototype.setGrid = function (particles, dimension) {
        this.init(dimension);
        for (var _i = 0, particles_1 = particles; _i < particles_1.length; _i++) {
            var particle = particles_1[_i];
            this.insert(particle);
        }
    };
    SpatialGrid.prototype.insert = function (particle) {
        var pos = particle.getPosition();
        var posIndex = this.index(pos);
        if (!Array.isArray(this.grid[posIndex.x]))
            this.grid[posIndex.x] = [];
        if (!Array.isArray(this.grid[posIndex.x][posIndex.y]))
            this.grid[posIndex.x][posIndex.y] = [];
        this.grid[posIndex.x][posIndex.y].push(particle);
    };
    SpatialGrid.prototype.queryInCell = function (position) {
        var pos = this.index(position);
        return Array.isArray(this.grid[pos.x]) && Array.isArray(this.grid[pos.x][pos.y]) ?
            this.grid[pos.x][pos.y] || [] : [];
    };
    SpatialGrid.prototype.queryRadius = function (position, radius) {
        var pos = this.index(position);
        var rad = this.radius({ x: radius, y: radius });
        var items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        var out = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var itemPos = item.getPosition();
            if (Utils_1.Utils.getDistance(itemPos, position) <= radius) {
                out.push(item);
            }
        }
        return out;
    };
    SpatialGrid.prototype.queryRadiusWithDistance = function (position, radius) {
        var pos = this.index(position);
        var rad = this.radius({ x: radius, y: radius });
        var items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        var out = [];
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            var itemPos = item.getPosition();
            var distance = Utils_1.Utils.getDistance(itemPos, position);
            if (distance <= radius) {
                out.push({
                    distance: distance,
                    particle: item,
                });
            }
        }
        return out;
    };
    SpatialGrid.prototype.select = function (start, end) {
        var out = [];
        for (var x = start.x; x <= end.x; x++) {
            if (!Array.isArray(this.grid[x])) {
                continue;
            }
            for (var y = start.y; y <= end.y; y++) {
                if (!Array.isArray(this.grid[x][y])) {
                    continue;
                }
                for (var _i = 0, _a = this.grid[x][y]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    out.push(item);
                }
            }
        }
        return out;
    };
    SpatialGrid.prototype.index = function (position) {
        return {
            x: Math.round(position.x / this.widthSegment),
            y: Math.round(position.y / this.heightSegment),
        };
    };
    SpatialGrid.prototype.radius = function (radius) {
        return {
            x: Math.ceil(radius.x / this.widthSegment),
            y: Math.ceil(radius.y / this.heightSegment),
        };
    };
    SpatialGrid.prototype.indexOp = function (left, op, right) {
        if (op == '+') {
            return {
                x: this.clamp(left.x + right.x),
                y: this.clamp(left.y + right.y),
            };
        }
        else {
            return {
                x: this.clamp(left.x - right.x),
                y: this.clamp(left.y - right.y),
            };
        }
    };
    SpatialGrid.prototype.clamp = function (num) {
        return Utils_1.Utils.clamp(num, 0, this.cellSize);
    };
    return SpatialGrid;
}());
exports.SpatialGrid = SpatialGrid;
