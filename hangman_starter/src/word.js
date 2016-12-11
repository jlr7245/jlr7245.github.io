/* jshint maxerr: 2000 */

console.log('word.js is connected');

class Word {
  constructor(value) {
  this.value = value;
  this.letters = [];
  this.getLetters();
  }
  new() {
  }
  
  getLetters() {
    let letterArray = this.value.split('');
    let x;
    for (let i = 0; i < letterArray.length; i++) {
      x = new Letter(letterArray[i]);
      this.letters.push(x);
    }
  }
  
  isFound() {
    let foundChecker = true;
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i].hidden === true) foundChecker = false;
    }
    return foundChecker;
  }
  
  try(attempt) {
    let tryChecker = false;
    for (let i = 0; i < this.letters.length; i++) { /// sets the loop for the letters
      if (this.letters[i].value == attempt) {
        this.letters[i].show();
        tryChecker = true;
      }
    }
    return tryChecker;
  }
  
  render() {
    let returnString = [];
    for (let i = 0; i < this.letters.length; i++) {
      returnString.push(this.letters[i].render());
    }
    return returnString.join(' ');
  }
}
