/*         EASY (1)        */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


let isOdd = (n => n % 2); // % = mod/remainder
let odd = arr.filter(isOdd);

let isEven = n => n % 2 == 0;
let even = arr.filter(isEven);

let number= {
    odd,
    even,
} //obj literal: explicitly stating the keys and values


console.log(`numbers`, number);



/*         EASY (2)        */
function checkPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0){
                return false
            }
        }
        return true;
    }
}
let isPrime = checkPrime(5);
console.log(isPrime);

// let isAlsoPrime = arr.filter(checkPrime)
// console.log(isAlsoPrime)





/*         MEDIUM (1)        */
const arrowCharacterCount = (str, a, e, i, o, u) => {
    const answer = (str.split(a, e, i, o, u).length - -1);
    return answer
}

console.log(arrowCharacterCount('oausiasiasu', 'a', 'e', 'i', 'o', 'u'));

//A E I O U
const vowelChecker = (x) => {

}
console.log()



/*         MEDIUM (2)        */



/*         MEDIUM (3)        */




/*         MEDIUM (4)        */
class Car {
    constructor(make, model, year, millage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.millage = millage;
        this.color = color;
    }
    driveToWork(work) {
        console.log(this.millage + 20)
        return this
    }
    driveAroundTheWorld(world) {
        console.log(this.millage + 200000)
        return this
    }
    runErrands(earrands) {
        console.log(this.millage + 50)
        return this
    }
}
let car1 = new Car('Tesla', 'X', 2014, 15000, 'black')
console.log(car1)
car1.driveToWork();
car1.driveAroundTheWorld();
car1.runErrands();



/*         HARD (1)        */
function matchBrackets(word) {
    // If the string includes '{' and '}' or '[' and ']' at the same time, then console.log TRUE
    if(word.includes('{') && word.includes('}') || word.includes('[') && word.includes(']')) {
        console.log(true) 
    } else {
        console.log(false) 
    };
};

let firstName = `Micah`
console.log(firstName)
