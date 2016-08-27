function getId<T>(id: T): T {
    return id;
}

// Generic type for class:
class A <T> {
    private _id: T;

    constructor(id: T) {
        this._id = id;
    }

    getId(): T {
        return this._id;
    }
}

var cat = new A<number>(16);
var dog = new A<string>("2327c575-2f7c-46c3-99f2-a267fac1db5d");

console.log("Cat id = " + cat.getId());
console.log("Dog id = " + dog.getId());