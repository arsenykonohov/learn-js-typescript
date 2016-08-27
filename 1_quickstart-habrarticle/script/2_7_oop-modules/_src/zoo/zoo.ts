import { Tiger } from "./tiger/tiger";
import { Seal } from "./seal/seal";

export class Zoo {
    public animals: any[];
    constructor(...list) {
        this.animals = list;
    }
    public getZooInfo():any[] {
        return this.animals;
    }
}

let tiger = new Tiger("Tiger", 9, "Usuric");
let seal = new Seal("Seal", 2, true);

console.log(tiger.getInfo());
console.log(seal.getInfo());

export let animals = new Zoo(tiger, seal);