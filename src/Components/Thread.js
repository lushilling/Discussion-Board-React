import React from 'react';
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
                    {_.reverse(data).map((posted, index) => (
                        <Posted key={index} onLoadFunction={props.onLoadFunction} username={posted.username} email={posted.email} content={posted.content} />
                    ))}
                </tbody>
            </Table>
        </div>
    );

}
