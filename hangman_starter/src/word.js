/* jshint maxerr: 2000 */

console.log('word.js is connected');

class Word {
  constructor(value) { /// accepts a word argument, so you can type `let Aleph = new Word('aleph')` in the console and it will create a Word object based on the string `Aleph`
  this.value = value; //// I don't think this was in the checker but I decided I liked having the string accessible from within the object without having the rely on the word argument from the constructor function.... if this doesn't make sense to you don't worry about it
  this.letters = []; /// our blank array 
  this.getLetters(); /// okay, this is a little tricky. when you create the word object you want the getLetters function below to run automatically, otherwise there's going to be an intermediate step. see line 48 of game.js for more discussion
  }
  new() { /// left this guy blank bc i didn't need it
  }
  
  getLetters() { /// here is our getLetters function.
    let letterArray = this.value.split(''); //// because I had this.value defined in the constructor function, this is what it looked like for me. if you hadn't defined `this.value = value`, your code might have looked something like this:
    //// getLetters(value) {
      //// let letterArray = value.split('');
    let x; 
    for (let i = 0; i < letterArray.length; i++) { /// loop-de-doop
      x = new Letter(letterArray[i]); /// we want to create a new Letter object for each character in our value string. so, we're referring back to the `Letter` class we made back in letter.js and using the syntax to create a new _object_ from the _class_.  this is what the instructions meant by "creating individual `Letters` objects for each letter in the given word".
      this.letters.push(x); /// we gotta add the letter object to the `this.letters` array
    }
  }
  
  isFound() {
    let foundChecker = true; /// as we have all discovered the _very_ hard way, you can't have a return inside a loop. we've got a loop in this method, so we gotta put the return outside the loop. easiest way to do that 
    for (let i = 0; i < this.letters.length; i++) { /// here's a nifty loop!
      if (this.letters[i].hidden === true) { /// so here we're checking each _object_ in our `this.letters` _array_ to see if the _value_ `hidden` is `true`. 
        foundChecker = false;
      } /// don't need an else statement bc we don't want to change our checker back to true if it's changed to false above. there only needs to be one hidden letter for `isFound()` to be false.
    }
    return foundChecker; /// returning outside the loop
  }
  
  try(attempt) { /// we have to be able to pass an argument into this method, otherwise it won't run on anything.
    let tryChecker = false; /// see note about foundChecker above
    for (let i = 0; i < this.letters.length; i++) { /// sets the loop for the letters
      if (this.letters[i].value == attempt) { /// ok, so! our `Letters` class was constructed with two paramaters: `value` and `hidden`. we're looping through all of the `Letter` _objects_ in our `this.letters` _array_ and seeing if any of them are equal to the argument we're passing...
        this.letters[i].show(); //// ... and if they are, we're running the `show` method from letter.js line 10....
        tryChecker = true; //// and setting our tryChecker to true, because we want the method to return `true` when it runs.
      } /// we don't need an else here because we tryChecker was false in the beginning and if no `Letter` objects in the array `letters` have a value of whatever our attempt was, we want the result to be `false` anyway
    }
    return tryChecker; //// here's our return, well outside the loop
  }
  
  render() {
    let returnString = []; //// putting our return outside the loop once again... this time it's a blank array
    for (let i = 0; i < this.letters.length; i++) { /// loop loop loop
      returnString.push(this.letters[i].render()); /// running the `render` method from line 13 of letters.js and pushing it into our returnString array
    }
    return returnString.join(' '); /// running the `join` method on our returnString array
  }
}
