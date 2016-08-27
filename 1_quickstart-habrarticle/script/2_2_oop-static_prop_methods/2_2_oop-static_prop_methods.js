var Formula = (function () {
    function Formula() {
    }
    // circle area
    Formula.getСircleSquare = function (radius) {
        return this.PI * radius * radius;
    };
    // triangle area
    Formula.getTriangleSquare = function (length, height) {
        return this.Half * length * height;
    };
    Formula.PI = 3.14;
    Formula.Half = 0.5;
    return Formula;
}());
var circle = Formula.getСircleSquare(16);
var triangle = Formula.getTriangleSquare(4, 7);
console.log("circle area = " + circle);
console.log("triangle area = " + triangle);
