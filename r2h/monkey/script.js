// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.
// Use console.log() at the end of the sum() function to print result.
// Use ES6 whenever possible.

// const sum = (n1, n2) => n1 + n2
// console.log(sum(1, 2))

let isNumber=(a) => typeof a === "number" ? "That's number" : "That's not a number";

  
console.log(isNumber(10));
// That's number
  
console.log(isNumber("Hey there"));
// That's not a number
  
console.log(isNumber(true));
// That's not a number



const mult =(a, b) => a * b;
  
setTimeout(() => console.log(mult(5, 10)) , 1000);
// 50

// () => is a function

/* Declare mult() function that will multiply values
of the x, y, z fields of the passed object. */

let obj= {
    x: 1,
    y: 2, 
    z: 3,
 }

 const math=({x, y, z}) => x + y + z;
 console.log(math(obj))



var a = [1, 2, 3];

let b = a.slice();

b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]

let shoppingList = [`Milk`, `Eggs`, `Cow`,]
let copyShoppingList = shoppingList.map();