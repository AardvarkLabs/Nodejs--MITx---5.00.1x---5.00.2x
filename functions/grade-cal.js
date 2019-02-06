// calculartor function

// 15/20 -> you got a C (75%)

let gradeCalc = function (score, totalScore) {
     let percent = (score / totalScore) * 100

     if (percent >= 90) {
         return `You got a A (${percent}%)!`

     } else if (percent >= 80) {
         return `you got a B (${percent}%)!`
     }
}


let result = gradeCalc(19, 20)
console.log(result)


