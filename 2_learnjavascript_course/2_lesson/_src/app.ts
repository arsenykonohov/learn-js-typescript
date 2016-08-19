// FUNCTION / FUNCTION / FUNCTION / FUNCTION / FUNCTION / FUNCTION / FUNCTION / FUNCTION / FUNCTION / FUNCTION / FUNCTION /

// // optional params (c):
// function getAverage(a: number, b: number, c?: number): string {
//     let total = a;
//     let count = 1;
//     total += b;
//     count += 1;
//     if (typeof c !== "undefined") {
//         total += c;
//         count += 1;
//     }
//     let average = (total / count).toFixed(3);
//     return `Result: ${average}`;
// }
// console.log(getAverage(32, 12, 342));


// // default value for params (ES6 feature):
// function getAverage(a: number, b: number, c: number = 0): string {
//     let total = a + b + c;
//     let average = (total / 3).toFixed(3);
//     return `Result: ${average}`;
// }
// console.log(getAverage(12, 12));


// // rest operator (ES6 feature):
// function getAverage(first: number = 0, ...list: number[]): string {
//     let total = first;
//     let counter = list.length + 1;
//     for (let item of list) {
//         total += item;
//     }
//     let average = total / counter;
//     return `Result: ${average}`;
// }
// console.log(getAverage(12, 12, 12, 12, 12));





// FUNCTION OVERLOADING / FUNCTION OVERLOADING / FUNCTION OVERLOADING / FUNCTION OVERLOADING / FUNCTION OVERLOADING / FUNCTION OVERLOADING /

// // unspecial (simple) overloading signature
// // type definition:
// function getAverage(a: number, b: number, c: number): string;    // unspecial signature
// function getAverage(a: string, b: string, c: string): string;    // unspecial signature
// // for example you can use this construct when you set certain HTMLelement-types (HTMLinput, etc...)
// // signature with body:
// function getAverage(a: any, b: any, c: any): string {            // unspecial signature
//     // attension "parseInt" has strict type in "lib.d.ts" - typeScript src files
//     let total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
//     let average = total / 3;
//     return `Result: ${average}`;
// };

// // let someVar = getAverage(12, 23, 34);       // right way
// // and...
// let someVar = getAverage("12", "23", "34"); // this one too
// console.log(someVar);

// // ----------------------------------------------
// // function getAverage(a: string|nymber, b: any, c: any): string { // unspecial (simple) overloading signature
// //    // you can set "a" param as string or number - right way.
// //    // code here....
// //}
// // let someVar =  getAverage(12, "23", "34");  // in case above
// // ----------------------------------------------


// // special overloading signature:
// class Handler {}
// class RandomHandler {}
// class ReversedHandler {}

// // type definition:
// function getHandler(a: "Random"): RandomHandler;    // special signature
// function getHandler(a: "Reversed"): RandomHandler;  // special signature
// function getHandler(a: string): Handler;            // unspecial signature required in this case - looks like hack
// // signature with body:
// function getHandler(a: string): Handler {           // special signature
//     switch (a) {
//         case "Random":
//             return new RandomHandler();
//         case "Reversed":
//             return new ReversedHandler();
//         default:
//             return new Handler();
//     }
// };
// getHandler("Reversed");





// CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS / CLASS /
class MyClass {
    // public: --------------------------------------------
    x: number;
    public y: number;
    // public: --------------------------------------------
    publicFooOne(): string {
        return "public #1";
    }
    public publicFooTwo(): string {
        return "public #2";
    }
    // private: --------------------------------------------
    private m: string;
    private n: string;
    // private: --------------------------------------------
    private privateFoo(): string {
        return 'private';
    }
    // protected: --------------------------------------------
    protected d: string;
    protected p: string;
    // protected: --------------------------------------------
    protected protectedFoo(): string {
        return "protected";
    }
    // static: --------------------------------------------
    static STTC: string;
    static MBST: string;
    // static: --------------------------------------------
    static staticFoo(): string {
        return "static";
    }
    // ======================================================
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class YourClass extends MyClass {
    i: number;
    o: number;
    constructor(i: number, o: number) {
        super(i, o);
        // we can use just protected & public method in TS notations, but js... 
        this.protectedFoo;
        this.publicFooOne;
        this.publicFooTwo;
    }
}

let a = new MyClass(43, 12);
let b = new YourClass(43, 12);
console.log(a);
console.log(b);





// CLASS and INTERFACE equal CONTRACT / CLASS and INTERFACE equal CONTRACT / CLASS and INTERFACE equal CONTRACT /

interface IA {
    getA(): string;
}
interface IB {
    getB(): string;
}
class C implements IA, IB {
    // private getA() { // TS-Error
    //     return "A";
    // }
    // we can implement only public methods:
    public getA() {
        return "A";
    }
    public getB() {
        return "B";
    }
}

