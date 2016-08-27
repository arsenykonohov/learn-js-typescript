var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// BaseClass: =================================================
var Animal = (function () {
    // BaseClass constructor ----------------------------------
    function Animal(name, danger) {
        this.name = name;
        this.danger = danger;
    }
    // --------------------------------------------------------
    Animal.prototype.getInfo = function () {
        console.log("1) Class Animal. Name: " + this.name + ", Danger: " + this.danger);
    };
    return Animal;
}());
// SubClass: ==================================================
var Fox = (function (_super) {
    __extends(Fox, _super);
    // SubClass constructor -----------------------------------
    function Fox(name, danger, tailLength) {
        // super — get BaseClass props ------------------------
        _super.call(this, name, danger);
        // ----------------------------------------------------
        this.tailLength = tailLength;
    }
    // --------------------------------------------------------
    Fox.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        console.log("2) Class Fox. Features: " + this.tailLength);
    };
    return Fox;
}(Animal));
// var duck: Animal = new Animal("Duck", 1);
// duck.getInfo();
var fox = new Fox("Foxygen", 10, 1);
fox.getInfo();
