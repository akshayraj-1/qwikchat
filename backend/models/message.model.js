const SocketMessageConfig = require("../socket-message-config");

class MessageModel {
    constructor({id, senderId, senderName, senderAvatar, content, type, severity, timestamp}) {
        this.id = id || Date.now() + Math.ceil(Math.random() * 200);
        this.senderId = senderId || SocketMessageConfig.sender.SYSTEM;
        this.senderName = senderName || SocketMessageConfig.sender.SYSTEM;
        this.senderAvatar = senderAvatar;
        this.content = content;
        this.type = type || SocketMessageConfig.type.TEXT;
        this.severity = severity || SocketMessageConfig.severity.NORMAL;
        this.timestamp = timestamp || Date.now() + Math.ceil(Math.random() * 200);
    }
}

module.exports = MessageModel;