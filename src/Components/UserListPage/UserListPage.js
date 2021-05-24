import React, { useEffect } from 'react';
import AddUserForm from './AddUserForm';
import UserListTable from './UserListTable';
import { UserListProvider } from './../../Context/UserListContext';
function UserListPage(props) {
    return (

        <div className="container mt-4" id="container">
            <h1 className="text-center">
                User List
        </h1>
            <UserListProvider>
                <AddUserForm />
                <UserListTable />
            </UserListProvider>
        </div>

    );
}

export default UserListPage;