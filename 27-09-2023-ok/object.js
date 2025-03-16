// A method is a function on an object, or a task that an object can perform.
// A method uses this to refer to the properties of the object it belongs to.
// The this keyword refers to the object it belongs to.
// The value of this is defined at the time the function is called.

const india = { 
    name:'The Country India',
    independenceOn:1947,

    describe() {
        console.log(`${this.name} got the independence on ${this.independenceOn}`);
    }
}

india.describe(); // The Country India got the independence on 1947


// In a nested object, this refers to the current object scope of the method. In the following example,
// this symbol within the details object refers to detailed symbol.
const ind = {
    name:'The country India',
    independenceOn:1947,

    details: {
        flagColor:'Tri-color also containing Ashoka Chekra',
        currency:'INR',

        printDetails() {
            console.log(`The flag color is ${this.flagColor} anthe currency of india is ${this.currency}`);
        }
    }
}

ind.details.printDetails()



function Country(name, independenceOn) {
    this.name = name
    this.independenceOn = independenceOn

    this.describe = function () {
        console.log(`This is ${this.name} and got independence on ${this.independenceOn}`);
    }
}

const indi = new Country('the Country India',1947);
indi.describe(); // This is the Country India and got independence on 1947