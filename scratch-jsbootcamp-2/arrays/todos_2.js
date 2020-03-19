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

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(sortTodos)

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}


// console.log(getThingsTodo(todos))
// 1 converest array to array of objects  =>  text, completed
// 2 create function to remove a todo by text value

deleteTodo(todos, '!!buy food')
console.log(todos)

