class Creature {
    private _id: string;
    name: string;
    danger: number;

    constructor(name: string, danger: number) {
        // how to implement private prop:
        this._id = this.generateGuid();
        this.name = name;
        this.danger = danger;
    }

    private generateGuid(): string {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var radius = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? radius : (radius & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    public getInfo(): string {
        return `Id: ${this._id}; name: ${this.name}; danger: ${this.danger}`;
    }
}

var beast: Creature = new Creature("Beast", 8);

console.log(beast.getInfo());