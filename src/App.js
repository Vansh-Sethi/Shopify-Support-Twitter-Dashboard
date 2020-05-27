import React from 'react';
import logo from './logo.svg';
import './App.css';
import TweetCard from "./Components/TweetCard"
import DashBoardHeader from "./Components/DashBoardHeader"
const axios = require('axios');

class App extends React.Component {
  
  render() {
    return(
    <div className="App">
      <div style={{textAlign: "center"}}>
        <DashBoardHeader />
        <TweetCard handle ="Vansh" tweet="@ShopifySupport I love the actual product but it's not actually working for me"/>
        <br />
        <TweetCard handle ="Vansh" tweet="@ShopifySupport I love the actual product but it's not actually working for me"/>
        <br />
        <TweetCard handle ="Vansh" tweet="@ShopifySupport I love the actual product but it's not actually working for me"/>

      </div>
    </div>
    )
  };
}

var i = axios.get('https://api.twitter.com/1.1/statuses/mentions_timeline.json?count=2&since_id=14927799')
console.log(i)

export default App;
