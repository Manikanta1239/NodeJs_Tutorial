//There are two ways to create an array in JavaScript:
//The Array constructor can also be used to create arrays with a single element
//1. Using an array literal
let arr = [];
//2. Using an Array constructor
let arr1 = new Array();


//initialling an array with values
let fruits = ["Pine","apple","banana","orange"];
console.log( fruits );


//printing or accessing the array elements
console.log( `\nThe total length of the fruits in the array = ${fruits.length} `);
console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[2] );
console.log( fruits[3] );


//replace an element in the array
console.log( 'Before Replace ' + fruits[2] );
fruits[2] = 'grapes';
console.log( 'After Replace ' + fruits[2] );


//Add a new element to the existing array
fruits[4] = 'mango';
console.log( fruits );