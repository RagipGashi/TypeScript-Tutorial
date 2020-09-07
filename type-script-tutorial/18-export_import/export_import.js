"use strict";
exports.__esModule = true;
// Import all the classes and interfaces form the file shapes with (*)
var shapes = require("./shapes");
// Instantiate the class Triangle
var t = new shapes.Triangle();
t.setPoints(3);
t.getPoints();
// Instantiate the class Square
var s = new shapes.Square();
s.setPoints(4);
s.getPoints();
