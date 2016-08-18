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
function getAverage(a: number, b: number, c: number): string;
function getAverage(a: string, b: string, c: string): string;
// for example you can use this construct when you set certain HTMLelement-types (HTMLinput, etc...)
function getAverage(a: any, b: any, c: any): string { // unspecial signature
    // attension "parseInt" has strict type in "lib.d.ts" - typeScript src files
    let total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    let average = total / 3;
    return `Result: ${average}`;
};

// let someVar = getAverage(12, 23, 34);       // right way
// and...
let someVar = getAverage("12", "23", "34"); // this one too
console.log(someVar);

// ----------------------------------------------
// function getAverage(a: string|nymber, b: any, c: any): string { // unspecial signature 
//    // you can set "a" param as string or number - right way.
//    // code here....
//}
// let someVar =  getAverage(12, "23", "34");  // in case above
// ----------------------------------------------






