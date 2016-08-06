class Formula {
    static PI: number = 3.14;
    static Half = 0.5;
    
    // circle area
    static getСircleSquare(radius: number): number {
        return this.PI * radius * radius;
    }

    // triangle area
    static getTriangleSquare(length: number, height: number): number {
        return this.Half * length * height;
    }
}


var circle = Formula.getСircleSquare(16);
var triangle = Formula.getTriangleSquare(4, 7);

console.log("circle area = " + circle);
console.log("triangle area = " + triangle);