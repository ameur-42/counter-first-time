let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let randomDice = document.getElementById("randomDice")
let count = 0
function dice() {
const random = Math.floor(Math.random() * 6);
randomDice.textContent = random
}
      
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
