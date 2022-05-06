// All of the `createGreeting` functions are equivalent. The idea is to do 
// all of these live for the students to demonstrarte that.


// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
    return `${message} ${name}!`
}
console.log(createGreeting(`hello, my name is`, `micah`));
// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => `${message} ${name}`
console.log(createGreeting(`hello, my name is`, `micah`));

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var createGreeting = name => `Hello my name is ${name}`;
console.log(createGreeting(`micah`));

// We call arrow functions the same way as we call regular functions







//----------------------------------------

// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object
var load = {
    name: `Loading...`,
    sayLoading: function () {
        console.log(`${this.name} `);
        setTimeout(() => {
            console.log(`Complete.`);        
    },5000);
}
}
load.sayLoading()


// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var dog = { 
    name: `Hera`,
    sound: `Woof!`,
    makeSound: function () {
        console.log(this.sound);
    },
    readTag: function (){
        console.log(`The dog tag reads ${this.name}`);
    }
}
dog.makeSound()
dog.readTag()




// Avoid using arrow functions for object methods




// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window



//-------------------------------------------------

// 1. When using var, our counter exists after a for-loop is done


/// this is a popular white board 



// When using let, our counter is not defined outside of the for-loop block




// ==========================================================================

// 2. When using while loops, any values we create inside exist outside of the while-loop block



// ==========================================================================

// 3. When using let, values defined inside of the while-loop block don't exist outside of it



// ==========================================================================

// 4. When writing conditionals, values defined inside the conditional block exist outside of it


// console.log(favoriteColor); // Prints `red`

// When using let, values defined inside of a conditional block don't exist outside



// This works since favoriteColor is not defined inside of a block
// console.log(favoriteFood);
// Prints `pizza`



//------------------------

//Truthy and falsey

// 1.
console.log(true || false);
console.log(true && false);
console.log(0 && `name`)
console.log(1 && 0) // 0 would show bc 0 is false


// 2.



// 3. Ternary Operators
let likesVeg = false;
let meal = likesVeg ? `They like veg` : `They don't like veg`
// question mark is asking is this true
// with a ternary, the first value will always be true and the ladder with always be false
console.log(meal)
// if(likesVeg) {
//     console.log(`They like veg`)
// } else {
//     console.log(`They don't like veg`)
// }

let userName = `Micah`
let userNew = false
let displayMessage = userNew ? `Welcome to the site!` : `Welcome back ${userName}`
console.log(displayMessage)

let winScore = 10;
let userScore = 8;
const winner = userScore >= winScore ? `You won` : `Keep trying`;
console.log(winner)

// 4.
let feelingWell = false
let goingOut = feelingWell ? `I'm going out tn` : `I'm going to need rain check :/`
console.log(goingOut)


//----------------------------------

//Functional Loops
const moviePatrons = [
    {name: `Tom`, age: 16},
    {name: `Sam`, age: 19},
    {name: `Jill`, age: 17},
];


// 1.

// forEach is a functional way of iterating through an array without a for-loop
moviePatrons.forEach(patron => {
    console.log(`${patron.name} is ${patron.age} years old.`)
}) // forEach calls each element at a time in the array


// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value
// const canWatchRatedR = moviePatrons.filter(patron => {
//     return patron.age > 17
// })
// console.log(canWatchRatedR)
//use filter to create an array of items you don't want, and then it makes an array of items you do want :)


// const canWatchRatedR = moviePatrons.filter(function(patron) {
//   return patron.age > 17;
// });



// this will make a whole new array. they both would have.


// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

// Map is able to display things inside of arrays ONLY // 


const cardedMoviePatrons = moviePatrons.map(patron => {
    // if (patron.age >= 17){
    //     //return the patrons that can watch rated R movies
    //     patron.canWatchRatedR = true;
    // } else {
    //     //make patrons that can't value to false
    //     patron.canWatchRatedR = false;
    // }
    // return patron    this is the long way ^
    return {
        movieGoer: patron.name,
        canWatchRatedR: patron.age >= 17
    }  //ths is the shorter way
})
console.log(cardedMoviePatrons)


//---------------------------------

//Classes ->
class Pokemon {
    constructor (name, type){ //construction is a blueprint. it gives the class it's properties
        this.name = name;
        this.type = type;
        this.isHungry = false;
    }
    sayName () {
        console.log(`${this.name}`);
        console.log(`${this.name} has a type of ${this.type}`);
    }
}

//--------- Constructors to Classes
