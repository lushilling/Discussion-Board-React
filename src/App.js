import React, { Component } from 'react';
import './App.css';
// import axios from "axios";

import NavigationBar from './Components/NavigationBar';
import Post from './Components/Post';
import Thread from './Components/Thread';
import axios from 'axios';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/item/all")
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

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