class RoomModel {

    constructor({id, users}) {
        this.id = id;
        this.users = users || [];
    }
}

module.exports = RoomModel;