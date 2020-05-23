/*
const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('Cat', 2)
console.log(game1)

const game2 = new Hangman('New Jersey', 4)
console.log(game2)
*/

// prototypol inheritance 

const Hangman = function (word, remaningGuesses) {
	this.word = word.toLowerCase().split('')
	this.remainingGuesses = remainingGuesses
	this.guessedLetters = ['c']
}

// half part of the code.
Hangman.prototype.getPuzzle = function () {
	let puzzle = ''
	
	this.word.forEach((letter) => {
		if (this.guessedLetters.includes(letter)) {
			
		} else {
			puzzle = puzzle + '*'
		}
	})
	
	return puzzle
}

const game1 = new Hangman('cat', 2)
console.log(game1)

const game2 = new Hangman('New Jersey', 4)
console.log(game2)


/*

----

*/
