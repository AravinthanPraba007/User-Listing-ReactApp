import React from 'react';

function UserRowDetails({ user, deleteUser }) {
    console.log("UserRowDetails");

    function handleDeleteUser() {
        deleteUser(user.id);
    }
    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td><button type="button" className="btn btn-primary" onClick={handleDeleteUser}>Delete</button></td>
        </tr>
    )
}

export default UserRowDetails;