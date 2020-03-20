let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNum)
// 0 - .99999

// challenge area

// 1 -5 - true if correct - false if not correct


let makeGuess = function(guess) {
    let min = 0
    let max = 1
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum

}


console.log(makeGuess(1))