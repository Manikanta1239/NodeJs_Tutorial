// all are in the html pages

// Reverse a string
// Take user input for Fn an Ln. Display in output Ln Fn -- only use one text box 'Mani Kanta' should be displayed as 'Kanta Mani'
// Finds whether a given word is a palindrome -- madam  ,  racecar


// all are in the html pages

// Reverse a string
const reverseString = (str) => {
    return str.split('').reverse().join('');
};

const reverseStringOrder = () => {
    const strVar = document.getElementById('stringInput').value;
    const reversedString = reverseString(strVar);
    document.getElementById('stringResult').innerText = reversedString;
};

// Reverse the order of first name and last name
const reverseNameOrder = (name) => {
    return name.split(' ').reverse().join(' ');
};

// Function to reverse name order from input and display result
const reverseName = () => {
    const name = document.getElementById('nameInput').value;
    const reversedName = reverseNameOrder(name);
    document.getElementById('nameResult').innerText = reversedName;
};

// Function to check if a word is a palindrome
const isPalindrome = (word) => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
};

// Function to check palindrome from input and display result
const checkPalindrome = () => {
    const word = document.getElementById('wordInput').value;
    const result = isPalindrome(word) ? `${word} is a palindrome` : `${word} is not a palindrome`;
    document.getElementById('result').innerText = result;
};

// Example usage
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

// Example usage of reverseString
console.log(reverseString('hello')); // 'olleh'

// Example usage of reverseNameOrder
console.log(reverseNameOrder('Mani Kanta')); // 'Kanta Mani'