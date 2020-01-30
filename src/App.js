// import React, { Component } from 'react';
// import './App.css';
// import axios from "axios";

// import NavigationBar from './Components/NavigationBar';
// import Post from './Components/Post';
// import Thread from './Components/Thread';

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }

    


//   componentDidMount() {
//     this.onLoad();
//   }

//   onLoad = () => {
//     axios.get("http://localhost:5000/item/all")
//       .then(response => {
//         this.setState({
//           data: response.data
//         })
//       })
//   }

//   render() {
//     return (
//       <div >
//         <NavigationBar />
//         <Post onLoadFunction={this.onLoad} data={this.state.data} />
//         <Thread onLoadFunction={this.onload} data={this.state.data} />
//       </div >
//     )
//   }

// }

import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
