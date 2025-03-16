class Animal {
    constructor(name) {
        this._name = name;
    }
    speaks() {
        console.log(`${this._name} animal makes a sound`);
    }
}
class Dog extends Animal{
    constructor(name) {
        super(name);
    }
    bark(){
        console.log(`${this._name} dog barks`);
    }
}
var d = new Dog('kukalu');
d.speaks();
d.bark();
