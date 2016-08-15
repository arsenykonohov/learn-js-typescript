class Phone {
    id: number;
    name: string;
    model: string;

    // constructor init:
    constructor(phoneId: number, phoneName: string, phoneModel) {
        this.id = phoneId;
        this.name = phoneName;
        this.model = phoneModel;
    }

    getPhoneInfo(): string {
        return "Phone: model - " + this.name + " " + this.model + ", vendor code - " + this.id;
    }
}

var sg3 = new Phone(3574357890, "Samsung", "Galaxy-S5");

console.log(sg3.getPhoneInfo());