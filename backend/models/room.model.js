class RoomModel {

    constructor({id, users}) {
        this.id = id;
        this.users = users || [];
    }
}

export default RoomModel;