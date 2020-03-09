let getTip = function (total, tipPercent = .1) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip} `
}

let tip = getTip(10000)
console.log(tip)
/* 
let name = 'jen'

console.log(`hey my name is ${name}`) */