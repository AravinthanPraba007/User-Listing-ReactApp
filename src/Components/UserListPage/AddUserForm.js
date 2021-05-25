import React from 'react';
import { useRef, useContext, useState } from "react";
import LocalStoreHelper from '../../Helper/LocalStoreHelper';
import User from '../../Helper/User';
import { v4 as uuidv4 } from 'uuid';
import { UserListContext } from './../../Context/UserListContext';
import InputFeild from '../InputFeild/InputFeild';

function AddUserForm(props) {

    const initalInputFeild = { firstName: '',lastName: '',age: '', email: ''}

    const [inputFeild, setInputFeild] = useState(initalInputFeild);

    const [userList, setUserList] = useContext(UserListContext);

    function handleInputFeildValueChange(key, value) {
        setInputFeild((prevState) => {
            return { ...prevState, [key]: value }
        });

    }

    function handleAddUser(e) {
        e.preventDefault();

        // Get form values
        const firstName = inputFeild.firstName;
        const lastName = inputFeild.lastName;
        const age = inputFeild.age;
        const email = inputFeild.email;

        // Instatiate a user
        const user = new User(uuidv4(), firstName, lastName, age, email);

        // Add user to Store
        LocalStoreHelper.addUser(user);

        setUserList(LocalStoreHelper.getUsers());

        // Clear Feilds
        setInputFeild(initalInputFeild);

    }

    return (
        <div>
            <form id="user-form" className="mb-3" onSubmit={handleAddUser}>

                <div className="form-group mb-1">
                    <InputFeild labelName="firstName" type="text" id="firstName" placeholder="Enter first name" className="form-control"
                       value={inputFeild.firstName} onchange={handleInputFeildValueChange}></InputFeild>
                </div>

                <div className="form-group mb-1">
                    <InputFeild labelName="lastName" type="text" id="lastName" placeholder="Enter last name" className="form-control"
                        value={inputFeild.lastName} onchange={handleInputFeildValueChange}></InputFeild>
                </div>

                <div className="form-group mb-1">
                    <InputFeild labelName="age" type="number" id="age" placeholder="Enter age [18-100]" className="form-control"
                        value={inputFeild.age} onchange={handleInputFeildValueChange}></InputFeild>
                </div>

                <div className="form-group mb-1">
                    <InputFeild labelName="email" type="email" id="email" placeholder="Enter Email Id" className="form-control"
                        value={inputFeild.email} onchange={handleInputFeildValueChange}></InputFeild>
                </div>
                <input type="submit" value="Add User" className="btn btn-primary" />
            </form>
        </div>
    );
}

export default AddUserForm;