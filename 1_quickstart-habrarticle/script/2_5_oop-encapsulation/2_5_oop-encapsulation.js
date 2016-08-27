var Creature = (function () {
    function Creature(name, danger) {
        // how to implement private prop:
        this._id = this.generateGuid();
        this.name = name;
        this.danger = danger;
    }
    Creature.prototype.generateGuid = function () {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var radius = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? radius : (radius & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    Creature.prototype.getInfo = function () {
        return "Id: " + this._id + "; name: " + this.name + "; danger: " + this.danger;
    };
    return Creature;
}());
var beast = new Creature("Beast", 8);
console.log(beast.getInfo());
