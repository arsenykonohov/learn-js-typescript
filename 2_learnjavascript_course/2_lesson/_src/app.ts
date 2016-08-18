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











