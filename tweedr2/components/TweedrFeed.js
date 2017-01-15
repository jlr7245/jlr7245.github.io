import React, { Component } from 'react';
import Tweed from './Tweed';


class TweedrFeed extends Component {
  
  render() {
    const newTweedArray = this.props.tweeds;
    let ourList;
    if (this.props.isready) {
      ourList = newTweedArray
        .map((obj, index) => <Tweed 
          key={obj.key} 
          dataOrder={index} 
          dataKey={obj.key}
          message={obj.message}
          edited={(obj.hasOwnProperty('edited')) ? true : false }
          time={obj.time}
          editClick={this.props.editClick}
          submitEditClick={this.props.submitEditClick}
          deleteClick={this.props.deleteClick}
          isEditing={this.props.isEditing}
          currentlyEditing={this.props.currentlyEditing}/> )
      } else ourList = <h1>Loading...</h1>;
    return(
      <div className="tweedfeed tanltbg">
        <ul>
          {ourList}
        </ul>
      </div>
      )
  }
}

export default TweedrFeed;


///    


///   (this.props.isready) ? newTweedArray.map((obj, ind) => console.log(ind, obj, obj.message)) : console.log('not ready');



