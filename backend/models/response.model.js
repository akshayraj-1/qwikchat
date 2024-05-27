class ResponseModel {
    /**
     * Constructs a new Broadcast Model.
     * @param {boolean} success - Represents the success status.
     * @param {string} message - Represents the message content.
     * @param {Object} data - Represents additional data - user = {}, room = {}, messages = [{}].
     */
    constructor(success, message, data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}

export default ResponseModel;

