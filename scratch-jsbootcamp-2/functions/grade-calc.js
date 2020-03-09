// students score, total possible score
//15/20 -> you got a C (75%)!
// A 98-100. B 88-89, C 70-79, D 6069, F 8-59

let gradeCalc =  function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `you got a ${letterGrade} (${percent}%)`
}

let result = gradeCalc(13, 20)
console.log(result)