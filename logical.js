
// logical ex. Udemy
// variable scopes
// 2019

let temp = 55

if (temp >= 60 && temp <= 90) {
    console.log('it is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('do not go outside')
} else {
    console.log('Eh. Do what you want')
}

let isGuestOneVegan = true
let isGuestTwoVegan = false


if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('only offer up vegan some dishes')
} else {
    console.log('offer anyting on the menu')
}


