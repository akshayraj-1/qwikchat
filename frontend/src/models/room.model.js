class RoomModel {
    constructor({ id = null, users }) {
        this.id = id;
        this.users = users || [];
    }
}

export default RoomModel;