///<reference path="./animal.d.ts" />


// BaseClasse:
export class Animal implements IAnimal {
    name: string;
    danger: number;

    constructor(name: string, danger: number) {
        this.name = name;
        this.danger = danger;
    }

    getInfo(): string {
        return this.name + "; danger:" + this.danger;
    }
}

