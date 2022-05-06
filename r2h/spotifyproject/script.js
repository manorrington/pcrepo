let newSongs = [`#1 Time to pretend`, `#2 Time to live`]

document.querySelector(`#showme`).addEventListener(`click`, function() {
    document.querySelector(`.songs`).textContent = `${newSongs[0]} \n` +
    `${newSongs[1]}`;
})
