"use strict";
exports.__esModule = true;
exports.Square = exports.Triangle = void 0;
// Export class Triangle so we can use its properties in export_import file
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.getPoints = function () {
        console.log("This triangle has " + this.points + " points");
    };
    Triangle.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
// Export class Square so we can use its properties in shapes file
// Implement the interface ShapesInterface so we can use its properties too
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.getPoints = function () {
        console.log("This square has " + this.points + " points");
    };
    Square.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Square;
}());
exports.Square = Square;
