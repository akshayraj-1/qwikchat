import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useChatRoomSocket from "../../hooks/useChatRoomSocket.js";

import Join from "./subpages/Join.jsx";
import Chat from "./subpages/Chat.jsx";
import BannerModal from "../../components/Modals/BannerModal.jsx";
import MainBackground from "../../components/Backgrounds/MainBackground.jsx";


function Room() {

    const {roomId} = useParams();
    const [children, setChildren] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const ChatSocket = useChatRoomSocket();

    useEffect(() => {
        setTimeout(() => {
            const hasConsent = window.localStorage.getItem("chat-consent")
            if (!hasConsent) {
                setShowModal(true);
            }
        }, 1000);
    }, []);

    useEffect(() => {
        if (!ChatSocket.data.user || !ChatSocket.data.room?.id) {
            setChildren(<Join socket={ChatSocket} roomId={roomId}/>);
        } else {
            setChildren(<Chat socket={ChatSocket} />);
        }

    }, [roomId, ChatSocket.data.user]);

    return (
        <MainBackground className="relative size-full" glowOpacity={0.2} isBackgroundBlur={true}>
            <BannerModal
                showModal={showModal}
                title="Hey there!"
                message="Thank you for visiting our app. Please be aware that due to limited server capacity, it may take some time to connect to a room. We appreciate your patience and welcome your feedback to help us improve the app for everyone."
                onConfirm={() => {
                    setShowModal(false);
                    window.localStorage.setItem("chat-consent", Date.now().toString());
                }}
                onCancel={() => setShowModal(false)}
            />
            {children}
        </MainBackground>
    )
}

export default Room;