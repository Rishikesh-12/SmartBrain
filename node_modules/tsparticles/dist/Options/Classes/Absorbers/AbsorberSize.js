"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberRandomSize_1 = require("./AbsorberRandomSize");
var AbsorberSize = (function () {
    function AbsorberSize() {
        this.density = 5;
        this.random = new AbsorberRandomSize_1.AbsorberRandomSize();
        this.value = 50;
    }
    AbsorberSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.density !== undefined) {
                this.density = data.density;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.load({ enable: data.random });
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.limit !== undefined) {
                this.limit = data.limit;
            }
        }
    };
    return AbsorberSize;
}());
exports.AbsorberSize = AbsorberSize;
