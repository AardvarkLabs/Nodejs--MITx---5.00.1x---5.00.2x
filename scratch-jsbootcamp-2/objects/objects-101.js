let myBook = {
    title : '1984', 
    author: 'Gorge orwell',
    pageCount: 325
}
console.log(`${myBook.title} by ${myBook.author}`)

// console.log(myBook.author)

myBook.title = 'The doorman'

console.log(`${myBook.title} by ${myBook.author}`)

// name, age, location
// andrew, 27, ph, us
//increase age by 1 and print mess againt

let teacher = {
    name: 'Andrew',
    age: 27,
    location: 'phil, usa'
}


console.log(`${teacher.name} and his age is ${teacher.age}`)

teacher.age = teacher.age + 1

console.log(`${teacher.name} and his age is ${teacher.age}`)