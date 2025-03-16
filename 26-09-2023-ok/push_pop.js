let fruits = ['banana','apple','Pine','orange'];
console.log('Actual Data:   Length = ' + fruits.length,'elements = ' + fruits );

//pop() method removes the last element from an array and returns that element.
fruits.pop();
console.log('Pop Last:   Length = ' + fruits.length,'elements = ' + fruits );

//push() method adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('mango');
console.log('Push Last:   Length = ' + fruits.length,'elements = ' + fruits );

//shift() method removes the first element from an array and returns that removed element.
fruits.shift();
console.log('Del First:   Length = ' + fruits.length,'elements = ' + fruits );

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('grapes');
console.log('Add First:   Length = ' + fruits.length,'elements = ' + fruits );
