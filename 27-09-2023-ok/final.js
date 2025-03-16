// function printThis () {
//     console.log(this);
// }

// printThis(); // window object



// const india = {
//     name:'India',
//     independenceOn:1947,

//     describe () {
//         console.log(`${this.name} got the independence on ${this.independenceOn}`);
//     }
// }

// india.describe(); // India got the independence on 1947



// const india = {
//     name:'India',
//     independenceOn:1947,

//     details: {
//         nationalGame:'Hockey',
//         nationalAnimal:'Tiger',

//         printDetails() {
//             console.log(`national game is ${this.nationalGame} and national animal is ${this.nationalAnimal}`);
//         }
//     }
// }

// india.details.printDetails();



// function Country (name,currency,independenceOn) {
//     this.name = name
//     this.currency = currency
//     this.indepencenceOn = independenceOn

//     this.describe = function () {
//         console.log(`${this.name} is our country and the currency of our ${this.name} is ${this.currency} and got independence on ${this.indepencenceOn}`);
//     }
// }

// const data = new Country('India','INR',1947);
// data.describe(); // India is our country and the currency of our India is INR and got independence on 1947
// // printThis(); // window object