
//const notes = ['note 1', 'Note 2', 'Note 3']

const todos = ['Note 1', 'Note 2', 'Note 3']

const notes = [{
    title: 'My next trip',
    body: 'I would like to go Spain'
}, {
    title: 'habbit to work on',
    body: 'Excersive. Eating a bit healthy'
}, {
    title: 'Office emodification',
    body: 'Get a new seat'

}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'some other office modification')
console.log(note)

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

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title == 'habbit to work on'

})

console.log(index)



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

