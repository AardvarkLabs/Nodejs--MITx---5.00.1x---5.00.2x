
//const notes = ['note 1', 'Note 2', 'Note 3']

const todos = ['Note 1', 'Note 2', 'Note 3']

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

console.log('March' < 'January')

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1 
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1 
        } else {
            return 0
        }
    })
}



const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index) {
        // toLowerCase makes a search more clearly
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    }) 
}

notes.filter(function (notes, index) {
    
})

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
   
}



sortNotes(notes)
console.log(notes) 
/* 
console.log(findNotes(notes, 'work'))

const note = findNote(notes, 'office modification')
console.log(note)
 */
/*
const note = findNote(notes, 'Office modification')
console.log(note)

*/


/* 
console.log(notes.pop())
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note')
 */
//notes.splice(1, 1, 'this is a seconfd item')

/* notes[2] = 'this is a new note 3'

notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})


 */

/* console.log(notes.length)
console.log(notes)
 */
//console.log(notes.indexOf({}))

/* console.log(notes.length)
console.log(notes)
 */
/*
let someObject = {}
let otherObject = someObject

console.log(someObject == someObject)

 */
/* 
const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title == 'habbit to work on'

})

console.log(index)
 */


// looping in javascript

// counting ... : 1
// 
// for (let count = 0; count <= 2; count++) {
// now: in reve
/*
for (let count = 2; count >= 0; count--) {
    console.log(count)
}

// for statement with arrays

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

for (let count = notes.length -1; count >=0; count--) {
    console.log(notes[count])
}
 */
/* 
 for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo =  todos[count]
    console.log(`${num}, ${todo}`)
    console.log('----------')
 }

  */

