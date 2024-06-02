import React, {useEffect, useRef, useState} from "react";
import {ArrowUpFromDot, Paperclip} from 'lucide-react';
import ChatBubble from "../../components/ChatBubble.jsx";
import ImageModal from "../../components/Modal/ImageModal.jsx";
import cn from "../../utils/cn.util.js";

function Chat({socket}) {

    const chatsRef = useRef(null);
    const inputRef = useRef(null);
    const pickerRef = useRef(null);
    const [inputMessage, setInputMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [newMessageCount, setNewMessageCount] = useState(0);

    useEffect(() => {
        if (chatsRef && chatsRef.current && socket.data.messages) {
            const chatsContainer = chatsRef.current;
            chatsContainer.scroll({
                top: chatsContainer.scrollHeight,
                left: 0,
                behavior: "smooth"
            });
        }

        setNewMessageCount(prevState => {
            if (document.visibilityState === "hidden" && prevState + 1 > 0) {
                document.title = `Byte Threads (${prevState + 1})`;
                return prevState + 1;
            } else {
                document.title = "Byte Threads";
                return 0;
            }
        });
    }, [socket.data.messages])

    useEffect(() => {
        const handleVisibilityChange = () => {
            document.visibilityState === "visible" && (document.title = "Byte Threads");
        }
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        }
    }, []);

    const sendTextMessage = () => {
        if (inputRef === null || inputRef.current === null) return;
        if (inputMessage.trim().length > 0) {
            socket.actions.sendMessage(inputMessage, true);
            setInputMessage("");
        }
    }

    const sendImageMessage = (e) => {
        const file = e.target.files[0];
        const maxSize = 5 * 1024 * 1024;

        if (file && file.size > maxSize) {
            window.alert("File size exceeds 5MB. Please choose a smaller file.");
            return;
        }
        const reader = new FileReader();
        reader.onload = function() {
            const arrayBuffer = reader.result;
            socket.actions.sendMessage(arrayBuffer, false);
        };
        file && reader.readAsArrayBuffer(file);
    }

    return (
        <div className="h-full w-full">
            {
                selectedImage &&
                <ImageModal show={selectedImage && true} image={selectedImage} onCancel={() => setSelectedImage(null)}/>
            }
            <div
                className="relative z-40 flex flex-col h-full w-full md:max-w-[50%] min-w-80 md:px-0 px-5 pt-16 mx-auto">
                <div ref={chatsRef}
                     className="flex flex-col flex-1 h-full w-full pb-2 overflow-y-scroll">
                    {
                        socket.data?.messages?.map(message => {
                            return <ChatBubble key={message.id}
                                               user={socket.data.user}
                                               messageModel={message}
                                               handleImageClick={(e) => setSelectedImage(e.target.src)}
                            />
                        })
                    }
                </div>
                <div
                    className="flex items-center gap-3 w-full my-4 px-2 text-sm rounded-full border border-secondaryLight bg-secondaryVariant">
                    <input ref={pickerRef} hidden={true} type="file"
                           accept={"image/png, image/jpg, image/jpeg, image/gif"} onChange={sendImageMessage}/>
                    <Paperclip
                        className="ms-2 cursor-pointer"
                        size={"22"}
                        color={"#838C96"}
                        onClick={() => pickerRef.current.click()}/>
                    <input
                        ref={inputRef}
                        className="text-base sm:text-sm py-4 w-full bg-transparent outline-0"
                        type="text" placeholder="Write your message"
                        value={inputMessage}
                        onInput={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key.toLowerCase() === "enter" && sendTextMessage()}
                    />
                    <div
                        className={cn("bg-secondaryLight p-2 rounded-full flex items-center justify-center", inputMessage.length > 0 ? "cursor-pointer text-secondaryVariant bg-white transition-all duration-100" : "text-textSecondary cursor-default")}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            sendTextMessage();
                        }}
                        onMouseDown={(e) => e.preventDefault()}>
                        <ArrowUpFromDot size="17" className="rotate-45"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;