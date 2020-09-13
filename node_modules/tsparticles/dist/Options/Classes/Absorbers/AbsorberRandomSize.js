"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberRandomSize = (function () {
    function AbsorberRandomSize() {
        this.enable = false;
        this.minimumValue = 1;
    }
    AbsorberRandomSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return AbsorberRandomSize;
}());
exports.AbsorberRandomSize = AbsorberRandomSize;
