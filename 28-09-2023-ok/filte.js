const details = [
    { name:'manikanta', age:25},    
    { name:'sai', age:21},
    { name:'sai Kiran', age:22},
    { name:'kiran sai', age:26},
    { name:'manu', age:28},
]

// const olderAge = details.filter(details => details.name === 'manu' && details.age > 25);  // people :  [ { name: 'kiran sai', age: 26 }, { name: 'manu', age: 28 } ]
const olderAge = details.filter((details) => details.age > 25); // people :  [ { name: 'manu', age: 28 } ]
console.log('people : ',olderAge);


const upperCase = details.map(details => details.name.toUpperCase());
console.log('Uppercase : ',upperCase);



const add = () => { a + b }