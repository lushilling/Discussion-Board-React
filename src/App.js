import React, { Component } from 'react';
import './App.css';
// import axios from "axios";

import NavigationBar from './Components/NavigationBar';
import Post from './Components/Post';
import Thread from './Components/Thread';


export default class App extends Component {

  render() {
    return (
      <div >
        <NavigationBar />
        <Post />
        <Thread />
      </div >
    );
  }

}





// <Button onClick={this.handleClick}
//   color="success"
//   outline={true}
// >Success</Button> <br>
// </br>
//   <p2>Favorite Food: <FontAwesomeIcon icon="stroopwafel" /></p2>
//   <p>Favorite Drink: <FontAwesomeIcon icon="mug-hot" /></p>
//   <p>Also Coffee : <FontAwesomeIcon icon={["fab", "java"]} /></p>