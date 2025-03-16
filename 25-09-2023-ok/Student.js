// class User{
//     _name = '';
//     _age = 0;
//     constructor(name,age){
//         this._name=name;
//         this._age=age;
//     }
//     sayHi(){
//         console.log(`Hi, I am ${this._name}`);
//         console.log(`And my age is ${this._age}`);
//     }
// }
// var user = new User('John', 30);
// user.sayHi();


// class Animal{

//     constructor(name){
//         this._name=name;
//     }
//     speaks(){
//         console.log(`${this._name} animal makes a sound`);
//     }
// }
// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }
//     bark(){
//         console.log(`${this._name} dog barks`);
//     }
// }
// var d = new Dog('Dogs like kutha');
// d.speaks();
// d.bark();


class Student {
    constructor(Id,FName,LName,Addr,Phn){
        this._id = Id;
        this._firstname = FName;
        this._lastname = LName;
        this._fullname = FName + ' ' + LName;
        this._addr = Addr;
        this._phn = Phn;
    }
    data(){
        console.log(`\nThe Id of a person : ${this._id}`);
        console.log(`The First Name of a person : ${this._firstname}`);
        console.log(`The Last Name of a person : ${this._lastname}`);
        console.log(`The Full Name of a person : ${this._fullname}`);
        console.log(`The Address of a person : ${this._addr}`);
        console.log(`The Phone Number of a person : ${this._phn}\n`);
    }
}

var person_data = new Student(701,'Arkala','Vishal','Hno. 4-23/2 Boduppal Kaman near water tank','+91 90876 64537');
person_data.data();

// class Le extends Student{
//     constructor(name){
//         super(name);
//     }
//     le_data(){
//         console.log(`${this._name} is a Lateral Entry Student `);
//     }
// }
// var l = new Student(701,'Arkala','Vishal','Hno. 4-23/2 Boduppal Kaman near water tank','+91 90876 64537');
// var ld = new Le('Vishal');
// l.data();
// ld.le_data();