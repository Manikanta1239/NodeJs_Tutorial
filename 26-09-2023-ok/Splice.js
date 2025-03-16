let fruits = ['banana','Pine','orange','apple'];
let middleIndex = Math.floor(fruits.length / 2); // 3/2 = 1.5 so it will return 1

// //splice() method changes the contents of an array by removing 
// //replacing existing elements and/or adding new elements in place.
// //splice(index, howmany, item1, ....., itemX)
// //splice(start, deleteCount, item1, item2, ...)
// //splice(start, deleteCount)

fruits.splice(middleIndex,2);
console.log(fruits);

fruits.splice(middleIndex,2,'mango');
console.log(fruits,fruits.length);

fruits.splice(0,1,'grapes'); // remove 1 element from index 0 and add grapes
console.log(fruits,fruits.length);

fruits.splice(1,0,'strawberry'); // add strawberry at index 1
console.log(fruits,fruits.length);

fruits.splice(1,1,'kiwi','plum'); // remove 1 element from index 1 and add kiwi and plum
console.log(fruits,fruits.length);

fruits.splice(0,fruits.length); // remove all elements
console.log(fruits,fruits.length);

fruits.splice(0,0,'banana','Pine','orange','apple');
console.log(fruits,fruits.length);