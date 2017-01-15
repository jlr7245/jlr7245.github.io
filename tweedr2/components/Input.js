import React, { Component } from 'react';


class Input extends Component {
  render() {
    return(
      <div className="inputbar">
        <input ref={(input) => this.theTweed = input} placeholder="Make a tweed!"/>
        <button onClick={(e) => this.props.grabTweed(e, this.theTweed)}>Tweed It</button>
      </div>
      )
  }
}

export default Input;