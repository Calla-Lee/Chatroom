class UserList {
    constructor() {
        this.list = [];
    }

    add(socket) {
        let uid = this.list.length + 1;

        this.list[uid] = {
            id: uid,
            resource: socket
        };

        return this.list[uid];
    }
}

module.exports = new UserList();
