// UI class : Handle UI task
export default class LocalStoreHelper {
    static getUsers() {
        let users;
        if (localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'));
        }
        return users;
    }

    static addUser(user) {
        const users = LocalStoreHelper.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    static removeUser(removeUserId) {
        const users = LocalStoreHelper.getUsers();
        users.forEach((user, index) => {
            if (user.id === removeUserId) {
                users.splice(index, 1);
            }
        });
        localStorage.setItem('users', JSON.stringify(users));
    }
}
