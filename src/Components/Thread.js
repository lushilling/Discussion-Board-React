import React, { Component } from 'react';
import '../App.css';
import { Table } from 'reactstrap';
import _ from 'lodash';

import Posted from './Posted';

export default function Thread(props) {

    const {
        data
    } = props;

        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        {_.reverse(data).map((posted) => (
                            <tr><td><Posted passedFunction={props.onLoadFunction} username={posted.username} email={posted.email} content={posted.content} /></td></tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    
}
