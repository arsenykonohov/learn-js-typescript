// function funcName (varName?:type ):typeOfReturnedValue                   // ? - optional param
// function funcName (varName:type = "defaultValue" ):typeOfReturnedValue   // default value
// function funcName (...varName?:type ):typeOfReturnedValue                // monotypes params

function getSomeName(firstName: string, lastName ? : string): string {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}




// callbacks
function numberOperation(x: number, y: number, callback: (a: number, b: number) => number) {
    return callback(x, y);
}

function addCallBackNumbers(x: number, y: number): number {
    return x + y;
}

function multiplyNumbers(x: number, y: number): number {
    return x * y;
}

console.log(numberOperation(5, 5, addCallBackNumbers)); // 10
console.log(numberOperation(5, 5, multiplyNumbers)); // 25




// string, string => string
function addOvverload(x: string, y: string): string;

// number, number => number
function addOvverload(x: number, y: number): number;

// any, any => any
function addOvverload(x, y): any {
    return x + y;
}