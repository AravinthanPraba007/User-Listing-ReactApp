import React from 'react';

function UserRowDetails(user) {
    console.log("UserRowDetails");
    console.log(user);
    return (
        <tr>
            <td>{user.user.firstName}</td>
            <td>{user.user.lastName}</td>
            <td>{user.user.age}</td>
            <td>{user.user.email}</td>
            <td><button type="button" className="btn btn-primary">Delete</button></td>
        </tr>
    )
}

export default UserRowDetails;