import React from 'react';
import '../App.css';
import axios from 'axios';



export default function Posted(props) {

    let handleClick = () => {
        let itemToDelete = {
            username: props.username,
            content: props.content
        }

        axios.delete("http://localhost:5000/item/deleteItem", { data: itemToDelete })
            .then(res => props.onLoadFunction())
    }

    return (
        <tr>
            <td>
                <h4>{props.username}</h4>
                <p>{props.content}</p>
                <button onClick={handleClick}>Delete Post</button>
            </td>
        </tr>
    );

}
