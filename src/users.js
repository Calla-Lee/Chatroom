class UserList {
    /**
     * Called when the object is instantiated, i.e. `new UserList()`.
     *
     * Arguments passed to this method can be assigned to the object by using
     * its prototype (`this`).
     */
    constructor() {
        this.list = [];
    }


    /**
     * Appends a socket to the user list. Each user in the list is represented by
     * a plain object which stores their ID and socket resource.
     */
    add(socket) {
        let uid = this.list.length + 1;

        this.list[uid] = {
            id: uid,
            resource: socket
        };

        return this.list[uid];
    }
}

/**
 * This allows Node to pass a value from calling `require()` so that `index.js`
 * may assign the `users` variable to the result of `require('./src/users.js')`.
 *
 * (Ask me if you have questions or read the documentation on Modules, this is
*  very surface level.)
 */
module.exports = new UserList();
