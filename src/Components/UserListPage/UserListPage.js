import React, { useEffect } from 'react';
import AddUserForm from './AddUserForm';
import UserListTable from './UserListTable';
import LocalStoreHelper from '../../Helper/LocalStoreHelper';

function UserListPage(props) {
    let userList = [];
    // Get user list
    userList = LocalStoreHelper.getUsers();
    console.log("UserListTable");
    console.log(userList);
    useEffect(() => {
        console.log("UserListPage Component User list Updated...");
      }, [userList]);
    return (
        <div className="container mt-4" id="container">
        <h1 className="text-center">
            User List
        </h1>
        <AddUserForm/>
        <UserListTable/>
        </div>
    );
}

export default UserListPage;