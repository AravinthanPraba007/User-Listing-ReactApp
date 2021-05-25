import React from 'react';
import { useRef, useContext, useState } from "react";
import LocalStoreHelper from '../../Helper/LocalStoreHelper';
import User from '../../Helper/User';
import { v4 as uuidv4 } from 'uuid';
import { UserListContext } from './../../Context/UserListContext';
import InputField from '../InputField/InputField';
import InpuFieldValidator from '../InputField/InpuFieldValidator';

function AddUserForm(props) {

    const initalInputFeild = { firstName: '', lastName: '', age: '', email: '' }

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
                    <InputField labelName="firstName" type="text" id="firstName"
                        placeholder="Enter first name"
                        className="form-control"
                        value={inputFeild.firstName} onchange={handleInputFeildValueChange}
                        validators={
                            [
                                { check: InpuFieldValidator.required, message: "First name required", validationParameters: null },
                                { check: InpuFieldValidator.checkRegex, message: "Please enter a vaild last name", validationParameters: {checkRegex : ["only_alphabet"]} }
                            ]
                        }
                    />
                </div>

                <div className="form-group mb-1">
                    <InputField labelName="lastName" type="text" id="lastName"
                        placeholder="Enter last name"
                        className="form-control"
                        value={inputFeild.lastName} onchange={handleInputFeildValueChange}
                        validators={
                            [
                                { check: InpuFieldValidator.required, message: "Last name required", validationParameters: null },
                                { check: InpuFieldValidator.checkRegex, message: "Please enter a vaild last name", validationParameters: {checkRegex : ["only_alphabet"]} }
                            ]
                        }
                    />
                </div>

                <div className="form-group mb-1">
                    <InputField labelName="age" type="number" id="age"
                        placeholder="Enter age [18-100]"
                        className="form-control"
                        value={inputFeild.age} onchange={handleInputFeildValueChange}
                        validators={
                            [
                                { check: InpuFieldValidator.required, message: "Age required", validationParameters: null },
                                { check: InpuFieldValidator.minValue, message: "Age must greater than 18", validationParameters: {minimum : 18} },
                                { check: InpuFieldValidator.maxValue, message: "Age must be less than 100", validationParameters: {maximum : 100} }
                            ]
                        }
                    />
                </div>

                <div className="form-group mb-1">
                    <InputField labelName="email" type="text" id="email"
                        placeholder="Enter Email Id" className="form-control"
                        value={inputFeild.email} onchange={handleInputFeildValueChange}
                        validators={
                            [
                                { check: InpuFieldValidator.required, message: "Email Id required", validationParameters: null },
                                { check: InpuFieldValidator.checkRegex, message: "Please enter a vaild last name", validationParameters: {checkRegex : ["emailId"]} }
                            ]
                        }
                    />
                </div>
                <input type="submit" value="Add User" className="btn btn-primary" />
            </form>
        </div>
    );
}

export default AddUserForm;