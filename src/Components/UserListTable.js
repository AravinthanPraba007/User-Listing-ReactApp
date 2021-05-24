import React from 'react';
import LocalStoreHelper from '../Helper/LocalStoreHelper';
import User from '../Helper/User';
import UserRowDetails from './UserRowDetails';

function UserListTable(props) {
    let users = [];
    // Get user list
    users = LocalStoreHelper.getUsers();

    return (
        <div>
            <h4 id="no-user-table">No User data is added</h4>
            <table className="table table-striped mt-5" id="user-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    {
                        users.map((user, index) => {
                            console.log(user);
                            return <UserRowDetails key={index} user={user} />
                        })
                    }
                </thead>
                <tbody id="user-list"></tbody>
            </table>
        </div>
    );
}

export default UserListTable;