let myBook = {
    title : '1984', 
    author: 'Gorge orwell',
    pageCount: 325
}
let otherBook = {
    title : 'New York pictures', 
    author: 'G. Zin',
    pageCount: 233
}

let getSummary = function (book) {
    return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}
    /* console.log(`${book.title} by ${book.author}`)
} */

let bookSumary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSumary.pageCountSummary)


/* 
challenge
create function - like fahrenheit in - return  object with all three



*/


let convertFah = function (fahren) {
    return {
        fahren : fahren,
        // algorithms to calculate temperature 
        kelvin : (fahren + 459.67) * (5/9),
        celcius : (fahren - 32) * (5/9)
    }
}


let temps = convertFah(74)
console.log(temps)