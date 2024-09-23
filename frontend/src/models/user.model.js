class UserModel {
    constructor({id = null, avatar = null, name = null, connected = false, joined = null}) {
        this.id = id;
        this.avatar = avatar;
        this.name = name;
        this.connected = connected;
        this.joined = joined;
    }
}

export default UserModel;