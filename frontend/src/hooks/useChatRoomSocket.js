import {io} from "socket.io-client";
import {useEffect, useRef, useState} from "react";
import SocketConfig from "../../../backend/socket-config.json";
import SocketMessageConfig from "../../../backend/socket-message-config.json";
import RoomModel from "../models/room.model.js";
import UserModel from "../models/user.model.js";
import MessageModel from "../models/message.model.js";

function useChatRoomSocket() {

    const socket = useRef(io(import.meta.env.VITE_SERVER_URL));
    const [data, setData] = useState({user: null, room: null, messages: []});

    useEffect(() => {

        // Handle Connect
        socket.current.on(SocketConfig.events.CONNECT, () => {
            console.log("Connected");
        });

        // Handle On Disconnect
        socket.current.on(SocketConfig.events.ON_DISCONNECT, () => {
            updateData({
                user: new UserModel({ connected: false }),
                room: { users: [] },
                messages: data.messages[data.messages.length - 1]?.content.trim() !== "disconnected" ?
                    new MessageModel({
                        content: "disconnected",
                        severity: SocketMessageConfig.severity.WARN
                    }) : null
            });
        });

        // Handle On Receive Message
        socket.current.on(SocketConfig.events.BROADCAST_MESSAGE, (response) => {
            updateData({
                messages: [response.data.message],
                room: response.data.room ? new RoomModel({
                    users: response.data.room?.users
                }) : null
            });
        });

        return () => {
            socket.current.disconnect();
        }

    }, [socket.current]);

    // Join Room
    const joinRoom = (roomId, name, avatar, callback) => {

        if (!roomId || !name || typeof callback !== "function") return;
        if (name.length > 20) {
            callback({success: false, message: "username is too long"});
            return;
        }
        if (name.includes(" ")) name = name.substring(0, name.indexOf(" "));

        // Handle On Join Room
        socket.current.emit(SocketConfig.events.JOIN_ROOM, { roomId, name, avatar }, (response) => {
            if (response.success) {
                updateData({
                    room: response.data.room,
                    user: response.data.user,
                    messages: new MessageModel({
                        content: `users online: ${response.data.room.users.map(user => user.name).join(", ")}`,
                        severity: SocketMessageConfig.severity.NOTIFY
                    })
                });
                callback({success: true, message: response.message});
            } else {
                setData({ user: null, room: null, messages: [] });
                callback({success: false, message: response.message});
            }
        });

    };

    // Send Message
    const sendMessage = (message, isText) => {
        if (message === '' || !data.user.connected) return;

        // Handle Send Message
        socket.current.emit(SocketConfig.events.SEND_MESSAGE, data.room.id, new MessageModel({
            senderId: data.user.id,
            senderName: data.user.name,
            senderAvatar: data.user.avatar,
            content: message,
            type: isText ? SocketMessageConfig.type.TEXT : SocketMessageConfig.type.IMAGE
        }));
    }

    // Update Data
    const updateData = ({room = null, user = null, messages = null}) => {
        setData(prevState => ({
            ...prevState,
            room: room ? {
                id: room.id || prevState.room?.id,
                users: room.users || prevState.room?.users
            } : {...prevState.room},
            user: user ? {
                id: user.id || prevState.user?.id,
                name: user.name || prevState.user?.name,
                avatar: user.avatar || prevState.user?.avatar,
                joined: user.joined || prevState.user?.joined,
                connected: user.connected ?? prevState.user?.connected
            } : {...prevState.user},
            messages: messages ? [...prevState.messages, ...(Array.isArray(messages) ? messages : [messages])] : [...prevState.messages]
        }));
    };

    // Get Random Avatar
    const getRandomAvatar = () => {
        return "https://firebasestorage.googleapis.com/v0/b/bytethreads.appspot.com/o/avatars%2Favatar%20(" + (Math.random() * 38 + 1).toFixed(0) + ").png?alt=media"
    }

    return {
        data, actions: { joinRoom, sendMessage, getRandomAvatar }
    };

}

export default useChatRoomSocket;