var Phone = (function () {
    // constructor init:
    function Phone(phoneId, phoneName, phoneModel) {
        this.id = phoneId;
        this.name = phoneName;
        this.model = phoneModel;
    }
    Phone.prototype.getPhoneInfo = function () {
        return "Phone: model - " + this.name + " " + this.model + ", vendor code - " + this.id;
    };
    return Phone;
}());
var sg3 = new Phone(3574357890, "Samsung", "Galaxy-S5");
console.log(sg3.getPhoneInfo());
