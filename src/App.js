import React from "react";
import AddUserForm from "./Components/addUserForm";
import UserListTable from "./Components/UserListTable";

function App() {
        return (
            <>
            <h1 className="header">Hello World!!!</h1>
            <AddUserForm></AddUserForm>
            <UserListTable></UserListTable>
            </>
        );
}
export default App;