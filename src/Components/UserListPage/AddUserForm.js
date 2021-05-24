import React from 'react';
import { useRef, useContext } from "react";
import LocalStoreHelper from '../../Helper/LocalStoreHelper';
import User from '../../Helper/User';
import { v4 as uuidv4 } from 'uuid';
import { UserListContext } from './../../Context/UserListContext';

function AddUserForm(props) {

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const ageInput = useRef();
    const emailInput = useRef();

    const [userList, setUserList] = useContext(UserListContext);

    function handleAddUser(e) {
        e.preventDefault();

        // Get form values
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;
        const age = ageInput.current.value;
        const email = emailInput.current.value;

        // Instatiate a user
        const user = new User(uuidv4(), firstName, lastName, age, email);

        // Add user to Store
        LocalStoreHelper.addUser(user);

        setUserList(LocalStoreHelper.getUsers());

        // Clear Feilds
        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
        ageInput.current.value = "";
        emailInput.current.value = "";

    }

    return (
        <div>
            <form id="user-form" className="mb-3" onSubmit={handleAddUser}>
                <div className="form-group mb-1">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="Enter first name"
                        ref={firstNameInput} required pattern="[A-Za-z ]*" />
                </div>
                <div className="form-group mb-1">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Enter last name"
                        ref={lastNameInput} required pattern="[A-Za-z ]*" />
                </div>
                <div className="form-group mb-1">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" className="form-control" placeholder="Enter age [18-100]"
                        ref={ageInput} required min="18" max="100" />
                </div>
                <div className="form-group mb-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Email Id" className="form-control"
                        ref={emailInput} required />
                </div>
                <input type="submit" value="Add User" className="btn btn-primary" />
            </form>
        </div>
    );
}

export default AddUserForm;