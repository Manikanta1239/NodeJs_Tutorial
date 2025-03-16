// Date: 26-09-2023 
// Created By: Aashish Kumar
// Initialize an array in two ways
let arr = new Array();
let arr1 = [];

// Add elements to the array
// EmpData contains the employee details like 
// EmpId, EmpFirstName, EmpLastName, EmpGender, EmpAge, EmpDesignation, EmpLocation
let EmpData1 = ['101','S','Manikanta','M','25','Full Stack','Hyderabad'];
console.log( EmpData1 );

let EmpData2 = ['102','T','Rohith','M','22','UI/UX Designer','Bangalore'];
console.log( EmpData2 );

let EmpData3 = ['103','S','Sai','M','23','Front End Developer','Chennai'];
console.log( EmpData3 );

let EmpData4 = ['104','K','Sai','M','24','Back End Developer','Pune'];
console.log( EmpData4 );

// Access the array elements
console.log( `\nThe total length of the EmpData in the array = ${EmpData3.length} `);
console.log( EmpData1[3] );
console.log( EmpData2[4] );
console.log( EmpData3[5] );
console.log( EmpData4[6] );


// Replace an element in the array
console.log( 'Before Replace ' + EmpData1[2] );
EmpData1[2] = 'Manu';
console.log( 'After Replace ' + EmpData1[2] );

//Add a new element to the existing array
EmpData1[7] = 'Exp 2 years';
console.log( EmpData1 );