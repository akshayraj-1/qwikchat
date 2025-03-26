class UserModel {

    constructor({id, name, avatar, connected = false, joined = Date.now()}) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.connected = connected;
        this.joined = joined;
    }
}

module.exports = UserModel;