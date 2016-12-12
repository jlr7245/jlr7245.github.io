console.log('game.js is connected');

class Game {
  constructor() { /// here's your constructor function
    this.guesses = null;
    this.guessedLetters = null;
    this.currentWord = null;

  }

  startGame(theWord) { /// startgame method
    this.guesses = 8;
    this.guessedLetters = [];
    this.currentWord = new Word(theWord); /// we don't want currentWord to just be `theWord` the string. we want a word object like we created in word.js.
  }
  
  guess(theGuess) { //// this method takes an argument because you want to do stuff with whatever you're guessing. in the console, you'll call this with `game.guess('a');` to guess `a`... so you have to let the method know that it should expect to see something.
    if (this.guessedLetters.indexOf(theGuess) == -1) { /// like on line 279 of the appAlmostComplete.js solution for the LOTR homework... if we're checking our `guessedLetters` array and expecting to see the index of the letter we're guessing, we're expecting a number, right? well, if `theGuess` isn't in our `guessedLetters` array, its index is -1.
      this.guessedLetters.push(theGuess); /// pushing the index into the array
      if (this.currentWord.try(theGuess) === true) { /// nesting an 'if' statement within another 'if' statement
        console.log('Good guess!'); 
      } else {
        this.guesses--; /// otherwise decrease the number of guesses
        console.log(`Oh no, ${ theGuess } was not in the phrase. You have ${ this.guesses} guesses left!`);
      }
    } else console.log(`You've already guessed ${ theGuess }!`); /// if the guessed letter is in our array...
  }
  
  isOver() { ///// i ran out of steam. i'll finish annotating tomorrow
    let isItOver = false;
    if (this.guesses === 0) {
      isItOver = true;
    }
     else if (this.currentWord.isFound() === true) {
       isItOver = true;
     }
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




//// HOW TO CHECK YOUR GAME IN THE CONSOLE
//// ---- type in these lines one at a time and hit enter after each one ---
//// 1. let game = new Game() //// don't need anything in the parintheses ... yet
//// 2. game.startGame('aleph') //// here is where we start the game. we're accessing the `startGame` _method_ within the `game` _object_, and passing it the _argument_ `aleph`.
//// (optional) 3. game.currentWord /// let's take a look at the Word object we created up on line 14. You'll notice it has an array of letters already. We wanted it to automatically have this array of letters, so that we dont have to run something like `game.currentWord.getLetters()` every time we start a game. see line 9 of word.js. bonus: try running `game.currentWord.getLetters()` in the console and then `game.currentWord`. you'll see that every word is doubled.
//// 4. game.guess('a') /// let's guess the letter a! 
//// 5. game.currentWord.render() /// let's see what our game looks like. you should be seeing `a _ _ _ _`...