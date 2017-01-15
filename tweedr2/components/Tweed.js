import React from 'react';

class Tweed extends React.Component {
  constructor(props) {
    super(props);
    //this.value = '';
    
  }
  
  render() {
    let theTweed = '';
    let props = {...this.props};
    if (props.currentlyEditing === props.dataKey && props.isEditing === 'dynamic') {
      theTweed = (
        <div className="dynamictweed">
          <textarea
            defaultValue={props.message}
            onChange={(e) => props.message = e.target.value}
            /> 
          <button type="submit" onClick={(e) => props.submitEditClick(e, props.message, props.dataKey, props.dataOrder)} className="savebtn blbg tanlt">Save</button>
          <p className="tweed-time">{this.props.time}</p>
        </div>
        );
    } else {
      theTweed = (
        <div className="statictweed">
          <p className="tweed-content">{props.message}</p>
          <span className="tweed-time">{this.props.time} {(this.props.edited) ? <span className="edited tanlt pinkbg">Edited</span> : null}</span>
          <div className="editandsave">
            <button className="edit" 
              onClick={(e) => this.props.editClick(this.props.dataKey, this.props.dataOrder)}>
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button className="delete"
              onClick={(e) => this.props.deleteClick(this.props.dataKey, this.props.dataOrder)}>
                <i className="fa fa-trash-o"></i>
              </button>
          </div>
        </div>
        )
    }
    
    return (
      <li data-key={this.props.dataKey} data-order={this.props.dataOrder} className={`tweed ${this.props.isEditing} tandkbg`}>{theTweed}</li>
    )
  }
}

export default Tweed;