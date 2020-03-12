//arrays with 5 times
// have a todos
// print first and the second to olist items -> todo: walk the dog
/* 
const todos = ["read news", "walk the dog", "shower", "drive", "work"];

console.log(`you have ${todos.length} todos!`);
let firstItem = todos[0];
let lastItem = todos[[todos.length - 1]];
console.log(firstItem);
console.log(lastItem);
 */
/*
following by Andrew mead:
*/

const todos = ['food', 'clean', 'cat', 'shower', 'work out']

todos.splice(2,1)
todos.push('by Coffee')
todos.shift()

console.log(`you have ${todos.length} todos!`)

todos.forEach(function(todos,index) {
    const num = index + 1
    console.log(`${num}. ${todos}`)
})

// console.log(todos)

/*
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)
*/