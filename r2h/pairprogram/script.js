/*     Med (1)     */
const vowelChecker = (str) => {
    const vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i <= vowel.length; i++) {
        let test = str.includes(vowel[i]);
        if (test == true) {
            return true
        }
    }
    return false;

}
console.log(vowelChecker("p"));
console.log(vowelChecker('mom'));


/*    MED(2)    */
const anagram = function (str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 !== len2) {
        console.log('Invalid Input')
        return
    }
    let string1 = str1.split('').sort().join('');
    let string2 = str2.split('').sort().join('');
    if (string1 === string2) {
        console.log('True');
    } else {
        console.log('False');
    }
}
anagram('candy', 'dancy');
anagram('fool', 'hand');



/*     MED(3)   */
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(gcd_two_numbers(336, 360));
console.log(gcd_two_numbers(78, 126));




/*     MED(4)     */
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