// interface:
interface IAnimal {
    name: string;
    danger: number;
    getInfo(): void;
}



// BaseClass: =================================================
class Animal implements IAnimal { 
    name: string;
    danger: number;

    // BaseClass constructor ----------------------------------
    constructor(name: string, danger: number) {
        this.name = name;
        this.danger = danger;
    }
    // --------------------------------------------------------
    getInfo(): void {
        console.log("1) Class Animal. Name: " + this.name + ", Danger: " + this.danger);
    }
}



// SubClass: ==================================================
class Fox extends Animal {
    tailLength: number;

    // SubClass constructor -----------------------------------
    constructor(name: string, danger: number, tailLength: number) {
        // super — get BaseClass props ------------------------
        super(name, danger);
        // ----------------------------------------------------
        this.tailLength = tailLength;
    }
    // --------------------------------------------------------

    getInfo(): void {
        super.getInfo();
        console.log("2) Class Fox. Features: " + this.tailLength);
    }
}




// var duck: Animal = new Animal("Duck", 1);
// duck.getInfo();

var fox: Animal = new Fox("Foxygen", 10, 1);
fox.getInfo();