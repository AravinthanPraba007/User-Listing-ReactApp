import React, { useEffect } from 'react';
import AddUserForm from './AddUserForm';
import UserListTable from './UserListTable';

function UserListPage(props) {
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