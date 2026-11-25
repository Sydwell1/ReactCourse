import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Table } from 'react-bootstrap';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        firebase.database().ref('/')
            .on('value', snapshot => {
                let returnArr = [];
                //loops through database
                //pushes values to state
                snapshot.forEach(data => {
                    let user = data.val();
                    user['key'] = data.key;
                    returnArr.push(user);
                });
                //users array now has 10 objects
                this.setState({
                    users: returnArr
                })
            });
    }

    render() {
        //populates table rows with database objects
        const listUsers = this.state.users.map((user) =>
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>Edit</td>
                <td>Remove</td>
            </tr>
        );

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default User;