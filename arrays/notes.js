


const notes = [{
    title: 'my next t',
    body: 'i would like to go to spain'
}, {
    title: 'Habbits to work on',
    body: 'work out. eating a bit better'
}, {
    title: 'office',
    body: 'get a new seat'
}]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })


console.log(notes.length)
console.log(notes)



console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function (note, index) {
    return note.title === 'Habbits to work on'
})
console.log(index)