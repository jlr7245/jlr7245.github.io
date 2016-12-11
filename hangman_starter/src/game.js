console.log('game.js is connected');

class Game {
  constructor() {
    this.guesses = null;
    this.guessedLetters = null;
    this.currentWord = null;
  //Put attributes here!
  }
  //Go to town on those methods below!
  startGame(theWord) {
    this.guesses = 8;
    this.guessedLetters = [];
    this.currentWord = new Word(theWord);
  }
  
  guess(theGuess) {
    if (this.guessedLetters.indexOf(theGuess) == -1) {
      this.guessedLetters.push(theGuess);
      this.currentWord.try(theGuess) ? console.log(`${ theGuess } is in the phrase!`) : this.guesses--;
    } else console.log(`${ theGuess } has already been guessed.`);
  }
  
  isOver() {
    let isItOver = false;
    if (this.guesses === 0) isItOver = true;
     else if (this.currentWord.isFound() === true) isItOver = true;
     return isItOver;
  }
  
  overMessage() {
    let theMessage;
    if (this.guesses === 0) {
      theMessage = 'Sorry, you lost!';
    } else if ((this.currentWord.isFound() === true) && (this.guesses !== 0)) theMessage = "YAY!! You won!!";
    return theMessage;
  }
  
}
