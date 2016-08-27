import { Animal } from "../../animal/animal"

export class Seal extends Animal {
    name: string;
    danger: number;
    acuario: boolean;

    constructor(name: string, danger: number, acuario:boolean) {
        super(name, danger);
        this.acuario = acuario;
    }
}