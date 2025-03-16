const myNameIs = {
    name:'Manikanta',

    // looks at object context
    regularFunction: function() {
        console.log(`This is my name : ${this.name}`)
    },
    
    // looks at current context
    arrowFunction: () => {
        console.log(`This is my name : ${this.name}`);
    },
}

myNameIs.regularFunction() // This is my name : Manikanta
myNameIs.arrowFunction() // This is my name : undefined