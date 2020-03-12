const notes = ['note 1', 'Note 2', 'Note 3']

const todos = ['Note 1', 'Note 2', 'Note 3']
/* 
console.log(notes.pop())
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note')
 */
//notes.splice(1, 1, 'this is a seconfd item')

notes[2] = 'this is a new note 3'

notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})




console.log(notes.length)
console.log(notes)



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

 for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo =  todos[count]
    console.log(`${num}, ${todo}`)
    console.log('----------')
 }