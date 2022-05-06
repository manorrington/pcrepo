// All of the `createGreeting` functions are equivalent. The idea is to do 
// all of these live for the students to demonstrarte that.

var createGreeting = function (message, name) {
    return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
    return message + ", " + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting);




//----------------------------------------

// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

var person = {
    name: "Hodor",
    saySomething: function () {
        console.log(this.name + " is thinking...");
        setTimeout(function () {
            console.log(this.name + "!");
        }, 100);
    }
};

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var person = {
    name: "Hodor",
    saySomething: function () {
        console.log(this.name + " is thinking...");
        setTimeout(() => console.log(this.name + "!"), 100);
    }
};

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later


// Avoid using arrow functions for object methods
var dog = {
    name: "Lassie",
    sound: "Woof!",
    makeSound: () => console.log(this.sound),
    readTag: () => console.log("The dog's tag reads: " + this.name + ".")
};

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window



//-------------------------------------------------

// 1. When using var, our counter exists after a for-loop is done


/// this is a popular white board 

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i); // Prints 5


// When using let, our counter is not defined outside of the for-loop block

let x = 42;

for (let j = 0; j < 5; j++) {
    console.log(j);
    console.log(x);
}

console.log(j); // ReferenceError: j is not defined

let j = 42;
console.log(j); // prints 42

// ==========================================================================

// 2. When using while loops, any values we create inside exist outside of the while-loop block

var count = 0;

while (count < 5) {
    var tripled = count * 3;
    count++;
};

console.log(tripled); // Prints 12

// ==========================================================================

// 3. When using let, values defined inside of the while-loop block don't exist outside of it

let c = 0;

while (c < 5) {
    let quadrupled = c * 3;
    c++;
}

console.log(quadrupled); // ReferenceError: quadrupled is not defined

// ==========================================================================

// 4. When writing conditionals, values defined inside the conditional block exist outside of it

if (true) {
    var favoriteColor = "red";
}

// console.log(favoriteColor); // Prints `red`

// When using let, values defined inside of a conditional block don't exist outside

let favoriteFood;

if (true) {
    favoriteFood = "pizza";
}

// This works since favoriteColor is not defined inside of a block
// console.log(favoriteFood);
// Prints `pizza`



//------------------------

//Truthy and falsey

// 1.
console.log(true || false);
console.log(true && false);
console.log(0 && "lol");
console.log(false || "IDK MY BFF JILL");

// 2.
console.log("" && [].length);
console.log("" || [].length);
console.log("" || [].length || 0);


// 3.
const likesVeggies = false;
const meal = likesVeggies ? "Vegetable Stir Fry" : "Cheeseburger";
console.log(meal);

// 4.
const feelingWell = false;
const goingOutTonight = feelingWell ? "Of course I'm going!" : "Not tonight, I'm not feeling well.";
console.log(goingOutTonight);


//----------------------------------

//Functional Loops

const moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

moviePatrons.forEach(patron => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

// const canWatchRatedR = moviePatrons.filter(function(patron) {
//   return patron.age > 17;
// });

console.log(canWatchRatedR);

// this will make a whole new array. they both would have.

const canWatchRatedR = moviePatrons.filter(patron => patron.age > 17);
// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
    //if (patron.age >= 17) {
    //  patron.canWatchRatedR = true;
    //} else {
    //  patron.canWatchRatedR = false;
    //}
    //return patron;
    return {
        movie: patron.name,
        canWatch: patron.age >= 17
    };

    // return patron.canWatchRatedR; would return an array of boolean values.
});

console.log("Carded Movie Patrons: ");
console.log(cardedMoviePatrons);

//---------------------------------

//Classes ->

const Vehicle = require("./Vehicle");

class Car extends Vehicle {
    constructor(model, topSpeed) {
        super(topSpeed);
        this.model = model;
    }

    logSpeed() {
        console.log(`${this.model} is going ${this.speed}`);
    }
}

const ferarri = new Car("Ferrari", 200);

ferarri.logSpeed();
ferarri.accelerate();
ferarri.accelerate(50);
ferarri.brake();

function Car(model, topSpeed) {
    Vehicle.call(this, topSpeed);
    this.model = model;
}
//--------- Constructors to Classes
class Pokemon {
    constructor(name) {
      this.name = name;
      this.isSleepy = true;
      this.isHungry = false;
    }
  
    sayName() {
      console.log(`${this.name}!`);
    }
  
    eat() {
      if (this.isHungry) {
        this.isHungry = false;
        this.isSleepy = true;
        console.log(`${this.name} finished eating, ${this.name} is sleepy now.`);
      } else {
        console.log(`${this.name} isn't hungry. ${this.name} is sleepy though.`);
      }
    }
  
    sleep() {
      if (this.isSleepy) {
        this.isSleepy = false;
        this.isHungry = true;
        console.log(`${this.name} went to sleep...`);
        console.log(`${this.name} woke up refreshed! And hungry!`);
      } else {
        console.log(`${this.name} isn't sleepy. ${this.name} is hungry though.`);
      }
    }
  }
  
  const pikachu = new Pokemon("Pikachu");
  
  pikachu.sayName();
  
  pikachu.sleep();
  pikachu.eat();