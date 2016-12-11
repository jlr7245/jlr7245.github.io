/* jshint maxerr: 2000 */
////APP.JS

console.log('letter.js is connected');

var alph = "abcdefghijklmnopqrstuvwxyz";
var alphabetArray = alph.split('');

class Letter {
  constructor(value, hidden) {
    this.value = value.toLowerCase();
    this.hidden = true;
    this.isALetter();
  }
  
  isALetter() {
    if (alphabetArray.indexOf(`${this.value}`) == -1) this.hidden = false;
  }
  show() {
    this.hidden = false;
  }
  render() {
    if (this.hidden === true) return "_";
    else return this.value.toUpperCase();
  }
}
