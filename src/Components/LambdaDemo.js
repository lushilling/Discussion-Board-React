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
        const { loading, msg } = this.state

        return (
            <p>
                <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
                <button onClick={this.handleClick("dad-joke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
                <button onClick={this.handleClick("random-dog")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
                <br />
                <span>{msg}</span>
            </p>
        )
    }
}