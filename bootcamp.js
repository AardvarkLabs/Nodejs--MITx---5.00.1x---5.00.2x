// file part of the bootcamp js in udemy by andrew meads
// developer by Felipe f.alfonso.go@gmail.com

// no spaces as can't have broken states in a js file 

/*
let firstname = 'Blabla'
let lastname = 'ssasa'
let fulln = firstname + ' ' + lastname

console.log(fulln)

*/

/*
let x = 11
let num = x + 1 * 2

console.log(num)
*/


let age = 26
let dogYears = (age + 1) / 7

console.log(dogYears)


// --------

//







let studentScore = 41
let maxScore = 100
let percent = (studentScore / maxScore) * 100


console.log(percent)



/* ---- -*/


let petName = 'Hal'
//let petName = 'Spot'
petName = 'Spot'

console.log(petName)

let temp = 31
let isFreezing = temp === 32

console.log(isFreezing)


// ----------

/*
You are in charge of a display advertising program. Your ads are displayed
on websites all over the internet. You have some CSV input data that counts
how many times you showed an ad on each individual domain. Every line consists
of a count and a domain name. It looks like this:
*/

const counts = [
    "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org",
    "1,mobile.sports"
]

function getTotalbyDomain(counts) {

    for (let i = 0; i < counts.length; i++) {
        var clicksAndDomain = counts[i].split(','); // ['900', 'google.com']
        let clicks = clicksAndDomain[3];
        // console.log(clicks[0]);

        var IndiceClicks = counts[i].split(','); // ['900', 'google.com']
        let clicksIndice = IndiceClicks[1];
        console.log(clicks, clicksIndice);

        // mobile.sports.yahoo.com => mobile.sports.yahoo.com , sports.yahoo.com , yahoo.com , com
    }

}


// extractDomains("mobile.sports.yahoo.com")// => ['mobile.sports.yahoo.com', 'sports.yahoo.com', 'yahoo.com', 'com']

getTotalbyDomain(counts);




// -------

let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('is account locked')
} else {
    console.log('welcome')
}


if (true) {
    console.log('is account locked')
} else if (userRole === 'admin') {
    console.log('welcome admin')
} else {
    console.log('welcome')
}



// ----- 


