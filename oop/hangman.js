const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('Cat', 2)
console.log(game1)

const game2 = new Hangman('New Jersey', 4)
console.log(game2)