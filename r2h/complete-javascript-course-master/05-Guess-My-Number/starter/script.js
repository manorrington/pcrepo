'use strict';
/* Math.trunc = no decimal // Math.random = a random number between 0-1 // *20 allows it be 0-20 // +1 makes it 1-20 */
let secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector(`.number`).textContent = secretNumber;

let score = 20; /* set the default score to be 20 */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

document.querySelector(`.check`).addEventListener(`click`, function() {
    let guess = Number(document.querySelector(`.guess`).value)
    console.log(guess)

    if (!guess) /* no number at all */ {
        document.querySelector(`.message`).textContent = `🚫 No Number Entered!`;
    } 
    else if (guess === secretNumber) /* if userInput equals the secretNumber */ {
        document.querySelector(`.message`).textContent = `🥳 Correct Number!`;
    } 
    else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector(`.message`).textContent = `⬆️ Too High!`;
        score--;
        document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.message`).textContent = (` 😔 You lose. Play again?`)
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
        document.querySelector(`.message`).textContent = `⬇️ Too Low!`;
        score--;
        document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.message`).textContent = (` 😔 You lose. Play again?`)
        }
    }
});

const person = {
    name: `Jake`,
    from: `State Farm`
}

person.from = `Brooklyn 99`
console.log(person);