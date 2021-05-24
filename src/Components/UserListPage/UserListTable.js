import React, { useContext } from 'react';
import UserRowDetails from './UserRowDetails';
import LocalStoreHelper from '../../Helper/LocalStoreHelper';
import {UserListContext} from './../../Context/UserListContext';

function UserListTable(props) {
    // let userList = [];
    // // Get user list
    // userList = LocalStoreHelper.getUsers();
    // console.log("UserListTable");
    // console.log(userList);

    const [userList, setUserList] = useContext(UserListContext);

    // Remove User
    function removeUser(id) {
        console.log("Remove user of id : "+id);
        LocalStoreHelper.removeUser(id);
        setUserList(LocalStoreHelper.getUsers());
    }



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
                            return <UserRowDetails key={user.id} user={user} deleteUser={removeUser} />
                        })
                    }
                </thead>
                <tbody id="user-list"></tbody>
            </table>
        </div>
    );
}

export default UserListTable;