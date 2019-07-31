import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import NavigationBar from './Components/NavigationBar';
import Post from './Components/Post';
import Thread from './Components/Thread';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
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
        <Post onLoadFunction={this.onLoad} data={this.state.data} />
        <Thread onLoadFunction={this.onload} data={this.state.data} />
      </div >
    )
  }

}
