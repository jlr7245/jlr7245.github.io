console.log('letter.js is connected');

class Letter {
  /// attributes of letter class
  constructor(value, hidden) { /// accepts a "value" argument. i also stuck 'hidden' up here but probably isn't necessary
    this.value = value; 
    this.hidden = true;
  }
  //// behaviors of letter class
  show() { //// so for any letter we have we can do Letter.show() and this will set 'hidden' to false
    this.hidden = false;
  }
  render() { /// similarly, we have a render function that we can call on any Letter and it will give us an output based on whether or not the value 'hidden' is true or false
    if (this.hidden === true) return "_";
    else return this.value;
  }
}
