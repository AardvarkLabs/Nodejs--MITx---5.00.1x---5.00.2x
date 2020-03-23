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
