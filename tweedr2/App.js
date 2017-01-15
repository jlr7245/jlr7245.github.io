import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import config from './components/key'; /// didn't include because it has my API key but it's just that object you get from the "add Firebase to your web app" popup, see ln 129
import Input from './components/Input';
import TweedrFeed from './components/TweedrFeed';
//import theConfig from './components/key';

import './App.css';

const fireBase = config.baseURL; /// "databaseURL" (I was trying something else first & changed ), ln 133



class App extends Component {
  constructor() {
    super();
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.grabTweed = this.grabTweed.bind(this);
    this.editClick = this.editClick.bind(this);
    this.submitEditClick = this.submitEditClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.getTweeds = this.getTweeds.bind(this);
    //this.writeNewTweed = this.writeNewTweed.bind(this);
    this.state = {
      isready: false,
      isEditing: 'static',
      currentlyEditing: '',
      tweeds: [],
    }
  }

  componentDidMount() {
    this.getTweeds();
  }


  getTweeds() {
    axios.get(`${fireBase}/tweet.json`)
    .then((res) => {
      let tweedArray = Object.keys(res.data)
        .map((index) => {
          res.data[index].key = index;
          return res.data[index]}).reverse();
      this.setState({
        tweeds: tweedArray,
        isready: true,
      });
    })
  }

  grabTweed(e, t) {
    let messageObj = { message: t.value, time: moment().format('dddd M/DD/YY h:mm a') }
    t.value = "";
    axios.post(`${fireBase}/tweet.json`, messageObj)
      .then((res) => {
        messageObj.key = res.data.name;
        let tweedCopy = [...this.state.tweeds]; /// allows us to only make one API call
        tweedCopy.unshift(messageObj);
        this.setState({ tweeds: tweedCopy });
      });
  }

  editClick(key, index) {
    this.setState({
      isEditing: 'dynamic',
      currentlyEditing: key
    })
  }

  submitEditClick(e, msg, key, i) {
    axios.patch(`${fireBase}/tweet/${key}.json`, { message: msg, edited: true })
      .then((res) => console.log(res));
    let tweedCopy = [...this.state.tweeds]; /// allows us to only make one API call
    tweedCopy[i].message = msg;
    tweedCopy[i].edited = true;
    this.setState({
      isEditing: 'static',
      currentlyEditing: null,
      tweeds: tweedCopy,
    });
    //this.getTweeds();
  }

  deleteClick(key, index) {
    axios.delete(`${fireBase}/tweet/${key}.json`)
      .then((res) => console.log(res));
    let tweedCopy = [...this.state.tweeds];
    tweedCopy.splice(index, 1);
    this.setState({tweeds: tweedCopy});
  }


  render() {
    return (
      <div className="App container blbg">
        <div className="header">
          <h3 className="pink"> Almighty Tweedr 2.0</h3>
          <h1>The Tweedening</h1>
        </div>
        <Input grabTweed={this.grabTweed} />
        <TweedrFeed
          tweeds={this.state.tweeds}
          isready={this.state.isready}
          editClick={this.editClick}
          submitEditClick={this.submitEditClick}
          deleteClick={this.deleteClick}
          isEditing={this.state.isEditing}
          currentlyEditing={this.state.currentlyEditing}/>
      </div>
    )
  }
}

export default App;


/// ====== HERE IS A SUCCESSFUL POST =======
//    console.log('heyo');
//    console.log(config);
//    const time = moment();
//    axios.post(`${fireBase}/tweet.json`, {
//      message: 'This is the first tweet!',
//      time: time,
//      by: 'J'
//    })
//

/* ====== this is what config is up on ln 4 
var config = {
  apiKey: (api key here),
  authDomain: (authdomain here),
  databaseURL: (url here) <== this is what i renamed to baseURL & set to my fireBase const
  storageBucket: (...),
  messagingSenderId: (...)
} */