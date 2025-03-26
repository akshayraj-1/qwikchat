const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const SocketConfig = require('./socket-config.json');
const SocketMessageConfig = require('./socket-message-config.json');
const ResponseModel = require('./models/response.model.js');
const MessageModel = require('./models/message.model.js');
const UserModel = require('./models/user.model.js');
const RoomModel = require('./models/room.model.js');


const PORT = process.env.PORT || 3005;
const app = express();
app.use(cors());


// IO Server Setup
const server = http.createServer(app);
const io = new Server(server, {
    maxHttpBufferSize: SocketConfig.maxBufferSize,
    cors: { origin: process.env.User_URL || "*" },
    perMessageDeflate: {
        threshold: 1024,
        zlibDeflateOptions: { level: 6 },
        zlibInflateOptions: { chunkSize: 16 * 1024 }
    }
});

// Socket Events Handling
io.on(SocketConfig.events.ON_CONNECT, socket => {

    // Handling Leave Room
    socket.on(SocketConfig.events.ON_DISCONNECT, () => {
        const { roomId, name } = socket;
        if (!roomId) return;

        const updatedUsers = getUsersInRoom(roomId).filter(user => user.id !== socket.id) || [];
        if (updatedUsers.length === 0) return;

        io.to(roomId).emit(SocketConfig.events.BROADCAST_MESSAGE, new ResponseModel(true, "user left the room", {
            message: new MessageModel({
                id: Date.now(),
                content: `${name} left the room`,
                severity: SocketMessageConfig.severity.NOTIFY
            }),
            room: new RoomModel({
                id: roomId,
                users: updatedUsers
            })
        }));
        socket.leave(roomId);

    });

    // Handling Join Room
    socket.on(SocketConfig.events.JOIN_ROOM, ({ roomId, name, avatar }, callback) => {
        if (!roomId || !name) return;

        const usersInRoom = getUsersInRoom(roomId) || [];
        if (usersInRoom.length >= SocketConfig.maxRoomSize)
            return callback(new ResponseModel(false, "room is full", null));

        if (usersInRoom.find(user => user.name === name))
            return callback(new ResponseModel(false, "username already taken", null));

        // Joining
        socket.name = name;
        socket.roomId = roomId;
        socket.avatar = avatar;
        socket.joined = Date.now();
        usersInRoom.push(new UserModel({ id: socket.id, name, avatar, connected: true, joined: socket.joined }));
        socket.join(roomId);

        callback(new ResponseModel(true, "successfully joined the room", {
            room: new RoomModel({
                id: socket.roomId,
                users: usersInRoom
            }),
            user: new UserModel({
                id: socket.id,
                name: socket.name,
                avatar: socket.avatar,
                connected: true,
                joined: socket.joined
            })
        }));
        // Notify Others
        io.to(roomId).emit(SocketConfig.events.BROADCAST_MESSAGE, new ResponseModel(true, "new message", {
            message: new MessageModel({
                id: Date.now(),
                content: `${socket.name} joined the room`,
                severity: SocketMessageConfig.severity.NOTIFY
            }),
            room: new RoomModel({
                id: roomId,
                users: usersInRoom
            })
        }));
    });

    // Handling Received Message
    socket.on(SocketConfig.events.SEND_MESSAGE, (roomId, messageModel) => {
        if (!messageModel || !messageModel.content) return;
        io.to(roomId).emit(SocketConfig.events.BROADCAST_MESSAGE, new ResponseModel(true, "new message", {
            message: messageModel
        }));
    });

});


const getUsersInRoom = (roomId) => {
    const usersInRoom = io.sockets.adapter.rooms.get(roomId) || [];
    const users = [];
    usersInRoom.forEach((user) => {
        const socket = io.sockets.sockets.get(user);
        if (socket) {
            users.push(new UserModel({
                id: socket.id,
                name: socket.name || "unknown",
                avatar: socket.avatar || "https://i.ibb.co/z6z4z4z/default-avatar.png",
                connected: true,
                joined: socket.joined || Date.now()
            }));
        }
    });
    return users;
}


server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));