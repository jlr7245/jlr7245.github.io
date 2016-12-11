# Hangman
This weekend we will be creating the popular game Hangman!</br>
Your goal is to create a fully functioning game in the console, by using:

1. Jasmine Testing
2. Class Objects
3. Your superstar brains!

## Jasmine Testing
You have been given a test suite for this application. To use the test suite, remember the following steps:

- Open `SpecRunner.html` in your browser to view the pretty testing to do list.
- Open `spec` folder in your text editor to view the prewritten tests for each class object (do not edit the test code).
- Open the `src` folder in your text editor to begin writing your code in the appropriate js file!

**Remember!** </br>
You will need to name the attributes/methods exactly as they are listed in the corresponding Jasmine spec.js file, in order to pass the test!</br>

## Class Objects
You will need to create the following class objects in the order listed below (letter.js first, word.js second, game.js third). The instructions below are a cheat sheet of what to tackle, but you can also look directly to the spec.js files for the steps.

### Letter

- Letter is a class that accepts a value argument

These are the attributes a Letter should have:

  - `value` -> a string
  - `hidden` -> a boolean set to true

These are the behaviors a Letter should have:

- `show` -> sets hidden to false
- `render()` -> returns a _ if the letter is hidden, returns the value if the letter is not hidden

### Word

- Word is a class that accepts an word argument

These are the attributes a Word should have:

  - `letters` -> an array

These are the behaviors a Word should have:

  - `getLetters` -> accepts a `word` argument as a string, then fills `letters` array by creating individual `Letter` objects for each letter in the given word. This method will be called in the constructor for the word, and stored as an attribute of the word.
  - `isFound` -> returns `true` if the word is found, `false` otherwise
  - `try` -> accepts a letter argument as a string, will reveal the letter if it is found, will return `true` if a letter was found and false if it wasn't
  - `render` -> returns the word in it's guessed state
    - ex: for the word 'closure', if the letters `l`, `s`, and `e` have been guessed, this function should return the string `_ l _ s _ _ e`

### Game
- Game is a class

These are the attributes a Game should have:

  - `guesses` -> initially set to null
  - `guessedLetters` -> initially set to null
  - `currentWord` -> initially set to null

These are the behaviors a Game should have:

  - `startGame`
    - accepts a word (string) as an argument
    - sets `guesses` to 8
    - resets the `guessedLetters` to an empty array
    - sets `currentWord` to an instance of the `word` object, passing in the word as a string argument

  - `guess` -> will try a letter, if the letter has not already been tried
  - `isOver` -> returns true if the current word has been guessed or there are no more guesses
  - `overMessage()`
    - returns "YAY!! You won!!" if the current word is found
    - returns "Sorry, you lost!" if there are no more guesses
    - returns undefined if neither condition is met
  - `render` -> returns rendered word, and number of guesses left, and the guessed letters so far

## BONUS!
Do you have hangman fully functioning in the console? Great! Now, create an app.js file and using your knowledge of the DOM, put this game in the browser. You can go about this however you would like.


##j scratch

```javascript
///// this one doesn't work
  guess(theGuess) {
    if (this.guesses == 8) {
      this.guessedLetters.push(theGuess);
      guessChecker(theGuess);
    } else if ((this.guesses < 9) && (this.guessedLetters.indexOf(theGuess) == -1)) {
      this.guessedLetters.push(theGuess);
      guessChecker(theGuess); //// the word "guess" is starting to look VERY fake
    } else console.log(`You've already guessed ${ theGuess }!`);
    function guessChecker(theGuess) {
      if (this.currentWord.try(theGuess)) {
        console.log('Good guess!');
      } else {
        this.guesses--;
        console.log(`Oh no, ${ theGuess } was not in the phrase. You have ${ this.guesses} guesses left!`);
      }
    }
    ////this.currentWord.try(theGuess) ? console.log('good guess!') : this.guesses--; //// this was replaced by guessChecker() but I am VERY proud of my ternary function so I'm leaving it :>
  }
  ```
  
  
  ```javascript
  //// this one passes the checker but if you guess right on the first try it'll keep adding the same letter
    guess(theGuess) {
    if (this.guesses == 8 && (this.guessedLetters.indexOf(theGuess) == -1)) {
      this.guessedLetters.push(theGuess);
      if (this.currentWord.try(theGuess) === true) {
        console.log('Good guess!');
      } else {
        this.guesses--;
        console.log(`Oh no, ${ theGuess } was not in the phrase. You have ${ this.guesses} guesses left!`);
      }
    } else if ((this.guesses < 9) && (this.guessedLetters.indexOf(theGuess) == -1)) {
      this.guessedLetters.push(theGuess);
      if (this.currentWord.try(theGuess) === true) {
        console.log('Good guess!');
      } else {
        this.guesses--;
        console.log(`Oh no, ${ theGuess } was not in the phrase. You have ${ this.guesses} guesses left!`);
      } //// the word "guess" is starting to look VERY fake
    } else console.log(`You've already guessed ${ theGuess }!`);
    ////this.currentWord.try(theGuess) ? console.log('good guess!') : this.guesses--; //// this was replaced by guessChecker() but I am VERY proud of my ternary function so I'm leaving it :>
  }
  ```
  
  
  
  ```javascript
  /// shorter, less UI centric version
guess(theGuess) {
    if (this.guesses == 8 && (this.guessedLetters.indexOf(theGuess) == -1)) {
      this.guessedLetters.push(theGuess);
      this.currentWord.try(theGuess) ? console.log('Good guess!') : this.guesses--;
    } else if ((this.guesses < 8) && (this.guessedLetters.indexOf(theGuess) == -1)) {
      this.guessedLetters.push(theGuess);
      this.currentWord.try(theGuess) ? console.log('Good guess!') : this.guesses--;
      //// the word "guess" is starting to look VERY fake
    } else console.log(`You've already guessed ${ theGuess }!`);
  }
```

```javascript
/// this one works AND passes!
  guess(theGuess) {
    if (this.guesses <= 8 && (this.guessedLetters.indexOf(theGuess) == -1)) {
      this.guessedLetters.push(theGuess);
      if (this.currentWord.try(theGuess) === true) {
        console.log('Good guess!');
      } else {
        this.guesses--;
        console.log(`Oh no, ${ theGuess } was not in the phrase. You have ${ this.guesses} guesses left!`);
      }
    } else console.log(`You've already guessed ${ theGuess }!`);
  }
  ```
  
  