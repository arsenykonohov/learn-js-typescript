"use strict";
var InterfaceModule;
(function (InterfaceModule) {
    // ===========================================
    // BaseClasse:
    var Animal = (function () {
        function Animal(name, danger) {
            this.name = name;
            this.danger = danger;
        }
        Animal.prototype.getInfo = function () {
            return this.name + " " + this.danger;
        };
        return Animal;
    }());
    // ===========================================
    var seal = new Animal("Seal", 1);
    console.log(seal.getInfo());
})(InterfaceModule = exports.InterfaceModule || (exports.InterfaceModule = {}));
