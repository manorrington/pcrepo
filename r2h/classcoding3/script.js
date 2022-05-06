// /1 Convert the following function into an arrow function named "arrowMyFunction".
const arrowMyFunction = (num1, num2) => num1 + num2;
console.log(arrowMyFunction(1, 2)); //3



// //2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
const add100 = (money) => money + 100;
console.log(add100(200)); //300
 
 
 
// //3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

const countLetter = (message, letter) => `${message}, ${letter}`;
console.log(countLetter(`Hello my name is John`, `i`));

const countLetter2 = (message, letter) => `${message}, ${letter}`
console.log(countLetter2(`Hello my name is John`, `h`))

const countLetter3 = (message, letter) => `${message}, ${letter}`
console.log(countLetter2('We love this city a lot, sometimes', 'e'))

