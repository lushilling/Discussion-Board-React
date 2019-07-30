import React, { Component } from 'react';
import './App.css';
// import axios from "axios";

import NavigationBar from './Components/NavigationBar';
// import Thread from './Components/Thread';
// import Post from './Components/Post';

class App extends Component {

  render() {
    return (
      <div >
        <NavigationBar />
        {/* <Post />
        <Thread /> */}
      </div >
    );
  }

}

export default App;





// <Button onClick={this.handleClick}
//   color="success"
//   outline={true}
// >Success</Button> <br>
// </br>
//   <p2>Favorite Food: <FontAwesomeIcon icon="stroopwafel" /></p2>
//   <p>Favorite Drink: <FontAwesomeIcon icon="mug-hot" /></p>
//   <p>Also Coffee : <FontAwesomeIcon icon={["fab", "java"]} /></p>