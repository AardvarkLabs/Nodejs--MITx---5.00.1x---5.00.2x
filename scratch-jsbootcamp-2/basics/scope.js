
// javscript uss scope estatic scope

let varOne = 'varOne'


if (true) {
    console.log(varOne) 
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true){
        let varTwo = 'varTwo'
    }
}

if (true ){
    let varThree = 'varThree'
}

console.log(varTwo)


