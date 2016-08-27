function getId(id) {
    return id;
}
// Generic type for class:
var A = (function () {
    function A(id) {
        this._id = id;
    }
    A.prototype.getId = function () {
        return this._id;
    };
    return A;
}());
var cat = new A(16);
var dog = new A("2327c575-2f7c-46c3-99f2-a267fac1db5d");
console.log("Cat id = " + cat.getId());
console.log("Dog id = " + dog.getId());
