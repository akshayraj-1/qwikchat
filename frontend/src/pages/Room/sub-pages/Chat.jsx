import React, {useEffect, useRef, useState} from "react";
import {ArrowUpFromDot, Paperclip} from 'lucide-react';
import MessageBubble from "../../../components/Chat/MessageBubble.jsx";
import ImageModal from "../../../components/Modals/ImageModal.jsx";
import cn from "../../../utils/cn.util.js";
import useCustomToast from "../../../hooks/useCustomToast.jsx";

function Chat({socket}) {

    const chatsRef = useRef(null);
    const inputRef = useRef(null);
    const pickerRef = useRef(null);
    const [inputMessage, setInputMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [newMessageCount, setNewMessageCount] = useState(0);
    const { CustomToastModal, showToast } = useCustomToast();

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
                document.title = `QwikChat (${prevState + 1})`;
                return prevState + 1;
            } else {
                document.title = "QwikChat";
                return 0;
            }
        });
    }, [socket.data.messages])

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                document.title = "QwikChat";
                setNewMessageCount(0);
            }
        }
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        }
    }, []);

    // Handle
    const autoResize = () => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        autoResize();
    }, [inputMessage]);


    const sendTextMessage = () => {
        if (inputRef === null || inputRef.current === null) return;
        if (inputMessage.trim().length > 0) {
            socket.actions.sendMessage(inputMessage, true);
            setInputMessage("");
        }
    }

    const sendImageMessage = (e) => {
        const file = e.target.files[0];
        const maxSize = 3 * 1024 * 1024;

        if (file && file.size > maxSize) {
            window.alert("File size exceeds 3MB. Please choose a smaller file.");
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
        <div className="relative h-full w-full">

            <CustomToastModal/>

            {
                selectedImage &&
                <ImageModal show={selectedImage && true} image={selectedImage} onCancel={() => setSelectedImage(null)}/>
            }
            <div
                className="relative z-40 flex flex-col h-full w-full md:max-w-[50%] min-w-80 md:px-0 px-5 pt-16 mx-auto">
                <div ref={chatsRef}
                     className="flex flex-col flex-1 h-full w-full overflow-y-scroll">
                    {
                        socket.data?.messages?.map(message => {
                            return <MessageBubble key={message.id}
                                                  user={socket.data.user}
                                                  messageModel={message}
                                                  handleImageClick={(e) => setSelectedImage(e.target.src)}
                                                  handleMessageClick={() => {
                                                      console.log(message);
                                                      showToast("Copied to clipboard", "success")
                                                  }}
                            />
                        })
                    }
                </div>
                <div
                    className="flex items-center gap-3 w-full mb-4 mt-2 p-2 text-sm rounded-xl border border-secondaryLight bg-secondaryVariant">

                    <input ref={pickerRef} hidden={true} type="file"
                           accept={"image/png, image/jpg, image/jpeg, image/gif"} onChange={sendImageMessage}/>

                    <div
                        className={cn("bg-transparent p-2 rounded-full flex items-center justify-center self-end cursor-pointer")}
                        onClick={() => pickerRef.current.click()}
                        onMouseDown={(e) => e.preventDefault()}>
                        <Paperclip size="18" color={"#838C96"}/>
                    </div>

                    <textarea
                        ref={inputRef}
                        rows={1}
                        className="text-base sm:text-sm w-full bg-transparent outline-none whitespace-pre-wrap resize-none overflow-auto max-h-[130px]"
                        placeholder="Write your message"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key.toLowerCase() === "enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendTextMessage();
                            }
                        }}
                    />
                    <div
                        className={cn("bg-secondaryLight p-2 rounded-full flex items-center justify-center self-end", inputMessage?.length > 0 ? "cursor-pointer text-secondaryVariant bg-textPrimary transition-all duration-100" : "text-textSecondary cursor-default")}
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