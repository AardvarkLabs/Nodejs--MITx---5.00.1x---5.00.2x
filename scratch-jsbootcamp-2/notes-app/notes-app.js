const notes = [{
    title: 'My next trip',
    body: 'I would like to go Spain'
}, {
    title: 'habbit to work on',
    body: 'Excersive. Eating a bit healthy'
}, {
    title: 'Office modification',
    body: 'Get a new seat'

}]

// DOM - document object model

/* const p = document.querySelector('h1')
// console.log(p)

p.remove() */

// query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*******'
    // console.log(p.textContent)
    //p.remove()
})
/* 
const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is a new element from JS'
document.querySelector('body').appendChild(newParagraph) */

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)


