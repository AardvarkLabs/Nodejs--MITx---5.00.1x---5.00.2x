// const todos = ['Other cat food', 'Clean kitchen', 'But food', 'Do work', 'Excersise']
const todos = [{
text: 'Order cat food',
completed: true
}, {
text: 'Clean kitchen',
completed: false
}, {
text: 'Buy food',
completed: true
}, {
text: 'Do work',
completed: false
}, {
text: 'Exercise',
completed: true
}]


const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// 1 converest array to array of objects  =>  text, completed
// 2 create function to remove a todo by text value

deleteTodo(todos, '!!buy food')
console.log(todos)


