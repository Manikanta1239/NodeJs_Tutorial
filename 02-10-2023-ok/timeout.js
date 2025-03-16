// delay the execution

const { setTimeout } = require("node:timers");

setTimeout(
    () => {
    console.log('After 3 seconds');
},
3000
);



const func = () => {
    console.log('After 4 seconds');
}

setTimeout(func, 4 * 1000);



const functionName = param => {
    console.log(param + 'Rocks');
}

setTimeout(functionName, 2000, 'Mani');