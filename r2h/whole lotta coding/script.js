
function submit () {
    console.log(`submitted!`)
}
document.querySelector(`.message`).textContent = (`Goodbye World`)

// var john = {
//     name: `John`,
//     yearOfBirth: 1990,
//     calculateAge: function() {
//         console.log(this);
//         console.log(2016 - this.yearOfBirth)
//     }
// }
// john.calculateAge
// console.log(john)

// let people = {
//     firstName: `micah`,
//     lastName: `norrington`,
//     occupation: `developer`,
//     printName: function() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// people.printName()

// let person2 = {
//     firstName: `Micah`,
//     numberOfApples: 2,
//     numberOfOranges: 3,
//     totalNumberOfFruit: function(){
//         console.log(this.numberOfApples + this.numberOfOranges)
//     }
// }
// person2.totalNumberOfFruit()

// for(let i = 1; i <=21; i++){
//     console.log(i)
// }

// for(let p = 1; p <=12; p++){
// //     let total = 12 * p
// //     console.log(`12 * ${p} = ${total}`)
// // }

// // for(let x = 12; x <= 144; x+=12){
// //     console.log(`12 * ${x/12} = ${x}`)
// // }

// // let x = 1;
// // while(x <= 21){ 
// //     console.log(x)
// //     x++
// // }

// let birthMonth = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]
// let month = prompt(`Enter your birth #`)

// if (month === `1`) {
//     console.log(birthMonth[0])
// } else if (month === `2`) {
//     console.log(birthMonth[1])
// } else if (month === `3`) {
//     console.log(birthMonth[2])
// } else if (month === `4`) {
//     console.log(birthMonth[3])
// } else if (month === `5`) {
//     console.log(birthMonth[4])
// } else if (month === `6`) {
//     console.log(birthMonth[5])
// } else if (month === `7`) {
//     console.log(birthMonth[6])
// } else if (month === `8`) {
//     console.log(birthMonth[7])
// } else if (month === `9`) {
//     console.log(birthMonth[8])
// } else if (month === `10`) {
//     console.log(birthMonth[9])
// } else if (month === `11`) {
//     console.log(birthMonth[10])
// } else if (month === `12`) {
//     console.log(birthMonth[11])
// } else {
//     alert(`Invalid Request. Enter a # between 1-12.`)
// }

// for(let lift = 1; lift <= 10; lift++){
//     console.log(`Lifting weight rep(${lift})`)
// } // loops

// let micahArray = [`Micah`, `Norrington`, 2022-2003, `student`, [`Luffy`, `Zoro`, `Nami`]]
// for(let i = 0; i < micahArray.length; i++){
//     console.log(micahArray[i]);

// const sayLocation = (location) => console.log(`My location is ${location}`;

// sayLocation(`paris`)

// const user = {
//     exercise: `running`,
//     exercise2: `swimming`,
//     sayExercise: function () {
//         console.log(`User is ${this.exercise}`);
//         const anotherExercise = () => {
//             console.log(`User is ${this.exercise2}`)
//         }
//         anotherExercise() // caling a function
//     }
// }

// let shoppingList = [`Monkey`, `Banana`, `Tyrese`, `Lmao`]
// // shoppingList.forEach((product, index) => {
// //     console.log(`The index is ${index} and the product is ${product}`)
// // })

// //map - makes a mutable copy of an array
// const newList = shoppingList.map(item => item + `New`);

// console.log(newList)

// const filterList = shoppingList.filter(item => item === `Tyrese`);
// console.log(filterList)

// class ShoppingList{
//     constructor(items, number){
//         this.items = items;
//         this.number = number;
//     }
//     sayList(){
//         console.log(this.items)
//     }
// }
// const myList = new ShoppingList([`Milk`, `Eggs`, `Bananas`])
// myList.sayList();

// class Product extends /*adds the items from ShoppingList */ ShoppingList{
//     constructor(items, number, ammount, cost){
//         super /* ^^^ */(items, number)
//         this.ammount = ammount;
//         this.cost = cost;
//     }
// }
// const product = new Product([`Milk`, `Eggs`, `Bananas`], 3, 2, 20)
// console.log(product)

/* Objects */
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.work = `working`
//         this.rest = `resting`
//         }
//         login(){
//             console.log(this.email, `just logged in`);
//             return this;
//             }
//         logout(){
//             console.log(this.email, `just logged out`);
//             return this;
//         }
//         isWorking(){
//             console.log(this.email, `is currently`, this.work);
//             return this;
//         }
//         isResting(){
//             console.log(this.email, `is currently`, this.rest);
//             return this;
//         }
//     }

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// } 

/* Function Constructor and Prototype */
// function User(email, name){
//     this.email = email;
//     this.name = name;
//     this.status = false;
//     this.login = function(){
//         console.log(this.email, `has logged in`);
//     }
//     }

// User.prototype.login = function(){
//     this.online = true;
//     console.log(this.email, `has logged in`);
// }
// User.prototype.logout = function(){
//     this.online = true;
//     console.log(this.email, `has logged out`);
// }

// function Admin(...args){
//     User.apply(this, args)
// }
// Admin.prototype = Object.create(User.prototype) //prototype inheritance

// Admin.prototype.deleteUser = function(u){
//     users = users.filter(user => {
//         return user.email != u.email;
//     })
// }

// let userOne = new User(`user@email.com`, `use`);
// let userTwo = new User(`princesour14@outlook.com`, `Mickell`);
// let admin = new Admin(`admin@email.com`, `Luffy`);

// let users = [userOne, userTwo, admin]

// console.log(userOne, userTwo, admin);
// userOne.login();
