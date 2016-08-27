export module InterfaceModule {
    // interface - only public methods:
    interface IAnimal {
        name: string;
        danger: number;
        getInfo(): string;
    }
    // ===========================================

    // BaseClasse:
    class Animal implements IAnimal {
        name: string;
        danger: number;

        constructor(name: string, danger: number) {
            this.name = name;
            this.danger = danger;
        }

        getInfo(): string {
            return this.name + " " + this.danger;
        }
    }
    // ===========================================

    var seal: IAnimal = new Animal("Seal", 1);
    console.log(seal.getInfo());
}