import React, { Component } from 'react';
import '../App.css';
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

        let newItem = {
            username: e.target[0].value,
            email: e.target[1].value,
            content: e.target[2].value
        }

        if (newItem.username === "" || newItem.email === "" || newItem.content === ""){
            this.setState({error:"Please fill out all fields correctly"})
        }else{
            this.setState({error:""})
        }

        console.log(newItem);
        axios.post("http://localhost:5000/item/createItem", newItem)
            .then(response => {
                console.log("post made")
                this.setState({
                    data: response.data
                });
                this.props.onLoadFunction();
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.postRequest}>
                    <label for="accUsername" id="accUsernameLabel">Username: </label>
                    <input type="text" id="accUsername" class="form-control"  />
                    <br />
                    <label for="accEmail" id="accEmailLabel">Email: </label>
                    <input type="text" id="accEmail" class="form-control"  />
                    <br />
                    <label for="accContent" id="accContentLable">content: </label>
                    <input type="content" id="accContent" class="form-control"  />
                    <br />
                    <p style={{color: 'red'}}>{this.state.error}</p>
                    <br />
                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>
            </div>
        );
    }
}
