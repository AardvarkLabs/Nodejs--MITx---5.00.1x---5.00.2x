let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history',
    author: 'Howard Zinn',
    pageCount: 723
}


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountsSummary: `${book.title} is ${book.pageCount} pages long`
    }
  //  console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)


console.log(bookSummary.pageCountsSummary)




let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit, 
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)

    }
}


let temps = convertFahrenheit(74)
console.log(temps)


