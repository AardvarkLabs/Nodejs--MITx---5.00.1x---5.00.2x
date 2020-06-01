<<<<<<< Local Changes
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

/*
Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
=======
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
>>>>>>> External Changes
        this.status = 'playing'
    }
<<<<<<< Local Changes
}*/

Handman.protopyte.calculsStatus = function () {
	const finished = this.word.every((letter) => 
	this.guessedletters.includes(letter)
	
	if (this.remainigGuesses === 0)
		this.status = 'failed'
	}
=======
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
>>>>>>> External Changes

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the work.'
        }
    }
    getPuzzle() {
        let puzzle = ''

<<<<<<< Local Changes
/*
Hangman.prototype.getPuzzle = function () {
	letpuzzle = ''
	
	this.word.forEach(letter) => {
		if (this.guessedLetter.includes(letter)) || letter === '') ´
			puzzle += '*'
	} else {
		puzzle += '*'
	}
	}
}*/

o



Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
=======
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
>>>>>>> External Changes

        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}