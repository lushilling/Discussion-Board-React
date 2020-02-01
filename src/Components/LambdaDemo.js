import React from 'react';

export default class LambdaDemo extends React.Component {

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
        const { loading, msg , picture} = this.state

        return (
            <div>
                <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "hello"}</button>
                <button onClick={this.handleClick("dad-joke")}>{loading ? "Loading..." : "dad joke"}</button>
                <button onClick={this.handleClick("random-dog")}>{loading ? "Loading..." : "random dog"}</button>
                <br />
                <p>
                    <span>{msg}</span>
                    <br />
                    <img src={picture} alt=""></img>
                    <br />
                </p>
                {/* <button onClick={this.handleClick("saveJoke")}>{loading ? "Saved" : "Save Joke "}</button> */}
            </div>
        )
    }
}