//regular for loop
//here we can reverse the array by changing the condition in the for loop
//and also we can print the array in reverse order
let arr = ['Pine','apple','banana','orange'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// But for arrays there is another way to loop, for..of:
// used only for forward iteration
let fruits = ['banana','apple','Pine','orange'];
for (let fruit of fruits){
    console.log(fruit);
}