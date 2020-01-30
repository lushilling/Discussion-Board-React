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
                <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "hello"}</button>
                <button onClick={this.handleClick("dad-joke")}>{loading ? "Loading..." : "dad joke"}</button>
                <button onClick={this.handleClick("random-dog")}>{loading ? "Loading..." : "random dog"}</button>
                <br />
                <span>{msg}</span>
            </p>
        )
    }
}