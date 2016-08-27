import {Animal} from "../../animal/animal"

export class Tiger extends Animal {
    public publicname: string;
    public danger: number;
    public tigerSubSpecies: string;

    constructor(name: string, danger: number, tigerSubSpecies: string) {
        super(name, danger);
        this.tigerSubSpecies = tigerSubSpecies;
    }
}