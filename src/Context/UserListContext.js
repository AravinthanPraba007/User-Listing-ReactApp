import React, { useState, createContext } from "react";
import LocalStoreHelper from '../Helper/LocalStoreHelper';

export const UserListContext = createContext();

export const UserListProvider = props => {
    const [userList, setUserList] = useState(LocalStoreHelper.getUsers());
    return (
        <UserListContext.Provider value={[userList, setUserList]}>
            {props.children}
        </UserListContext.Provider>
    );
}