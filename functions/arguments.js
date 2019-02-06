// multiplae arguments 

let add = function (a, b, c) {
   return a + b + c 
}


let result = add(10, 1, 5)

console.log(result)


// defaiult arguments 

let getScoreText = function (name = 'Anonymous', score = 0) {
   return 'Name: ' +  name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


let getTip = function (total, TipPercent = .1) {
   // return total * TipPercent
   let percent = TipPercent * 100
   let tip = total * TipPercent
   // template strings 
   return `À ${percent}% tip on $${total} would be $${tip}` 
}
let tip = getTip(100)
console.log(tip)

/*

console.log("Andrew" + 'Mead')

*/


let name = 'Vikram'
let age = 12
// example of template strings ... 
console.log(`Hey my name is ${name} and my age is ${age}`)
