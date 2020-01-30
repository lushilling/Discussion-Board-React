import React, { Component } from 'react';
import './App.css';

import NavigationBar from './Components/NavigationBar';
import LambdaDemo from './Components/LambdaDemo';

export default class App extends Component {

  render() {
    return (
      <div >
        <NavigationBar />
        <header className="App-header"> 
          <LambdaDemo />
        </header>
      </div >
    )
  }

}
