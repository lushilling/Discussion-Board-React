import React, { Component } from 'react';
import axios from "axios";

export default class Post extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            content: ""
        }
    }

    postRequest = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/item/createItem", {
                username: e.target[0].value,
                email: e.target[1].value,
                content: e.target[2].value
            })

            .then(response => {
                { console.log("created webpage") }
                //componentDidUpdate();
                this.setState({
                    data: response.data
                });
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.postRequest}>
                    <label for="accUsername" id="accUsernameLabel">Username: </label>
                    <input type="text" id="accUsername" class="form-control" name="accUsername" required />
                    <br />
                    <label for="accEmail" id="accEmailLable">Email: </label>
                    <input type="email" id="accEmail" class="form-control" name="accEmail" required />
                    <br />
                    <label for="accContent" id="accContentLable">Content: </label>
                    <input type="content" id="accContent" class="form-control" name="accContent" required />
                    <br />
                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>
            </div>
        );
    }
}
