import React, { Component } from 'react';
import './App.css';

import NavigationBar from './Components/NavigationBar';
import LambdaDemo from './Components/LambdaDemo';

export default class App extends Component {

  render() {
    return (
      <div >
        <NavigationBar />
        <div1 className="App-header"> 
          <LambdaDemo />
        </div1>
      </div >
    )
  }

}
