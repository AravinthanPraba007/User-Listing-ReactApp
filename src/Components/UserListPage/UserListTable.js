import React, { useEffect } from 'react';
import UserRowDetails from './UserRowDetails';
import LocalStoreHelper from '../../Helper/LocalStoreHelper';

function UserListTable(props) {
    let userList = [];
    // Get user list
    userList = LocalStoreHelper.getUsers();
    console.log("UserListTable");
    console.log(userList);

    useEffect(() => {
        console.log("UserListTable Component User list Updated...");
      }, [userList]);
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
                        userList.map((user) => {
                            // console.log(user);
                            return <UserRowDetails key={user.id} user={user} />
                        })
                    }
                </thead>
                <tbody id="user-list"></tbody>
            </table>
        </div>
    );
}

export default UserListTable;