// function funcName (varName?:type ):typeOfReturnedValue                   // ? - optional param
// function funcName (varName:type = "defaultValue" ):typeOfReturnedValue   // default value
// function funcName (...varName?:type ):typeOfReturnedValue                // monotypes params
function getSomeName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}
// callbacks
function numberOperation(x, y, callback) {
    return callback(x, y);
}
function addCallBackNumbers(x, y) {
    return x + y;
}
function multiplyNumbers(x, y) {
    return x * y;
}
console.log(numberOperation(5, 5, addCallBackNumbers)); // 10
console.log(numberOperation(5, 5, multiplyNumbers)); // 25
// any, any => any
function addOvverload(x, y) {
    return x + y;
}
