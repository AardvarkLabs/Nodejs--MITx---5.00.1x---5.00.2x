
/*
files : developed by Felipe A. Gonzalez.
f.alfonso.go@gmail.com 

*/


const notes  = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'habbits to work on',
    body: 'work out more'
}, {
    title: 'office work',
    body: 'get shit done'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title.toLowerCase() == noteTitle.toLowerCase()

    })
}

const filteredNotes = notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('me')
    const isBodyMatch = note.body.toLowerCase().includes('me')
    return isTitleMatch || isBodyMatch
})

console.log(filteredNotes)


 


/*
deleteTodo(todos, '!!buy food')
console.log(todos)
*/

const note = findNote(notes, 'same other office modification')
console.log(note)

