import React, {useMemo} from "react";
import {motion} from "framer-motion";
import CodeHighlight from "./CodeHighlight.jsx";

import cn from "../utils/cn.util.js";
import getEmoteIcon from "../utils/emoteicon.util.js";
import SocketMessageConfig from "../../../backend/socket-message-config.json";

const ChatBubble = React.memo(({user, messageModel, handleImageClick}) => {

    const emoteIcon = useMemo(() => messageModel.type === SocketMessageConfig.type.TEXT && getEmoteIcon(messageModel.content), [messageModel]);
    const styles = {
        textMessage: "text-base sm:text-sm text-start text-textPrimaryLight text-pretty leading-relaxed font-poppins py-2.5 px-4 bg-secondaryVariant",
        imageMessage: "h-80 w-auto p-1 object-contain rounded-xl cursor-pointer select-none"
    }

    const SystemMessage = () => {
        return (
            <span className={cn("text-xs text-center my-1 select-none",
                (messageModel.severity === SocketMessageConfig.severity.NORMAL || messageModel.severity === SocketMessageConfig.severity.NOTIFY) && "text-textSecondary",
                messageModel.severity === SocketMessageConfig.severity.ERROR && "text-red-400",
                messageModel.severity === SocketMessageConfig.severity.WARN && "text-yellow-400",
                messageModel.severity === SocketMessageConfig.severity.SUCCESS && "text-green-400")}>
                {messageModel.content}
            </span>
        )
    }

    const SenderMessage = () => {
        return (
            <div className={"flex flex-col gap-1.5 items-end w-auto md:max-w-[80%] my-3 ms-8 self-end"}>
                <span className={"block text-xs text-textSecondary select-none"}>you</span>
                {
                    messageModel.type === SocketMessageConfig.type.TEXT
                        ? emoteIcon
                            ? <img className="size-32 select-none" src={emoteIcon.url} alt={emoteIcon.description}/>
                            : <div className={cn("rounded-l-xl rounded-br-xl", styles.textMessage)}>
                                <CodeHighlight message={messageModel.content}/>
                            </div>
                        : <img className={cn(styles.textMessage, styles.imageMessage)}
                               src={URL.createObjectURL(new Blob([messageModel.content]))}
                               alt="image"
                               onClick={handleImageClick}/>
                }
            </div>
        )
    }

    const ReceiverMessage = () => {
        return (
            <div className={"flex gap-2 items-start w-auto md:max-w-[80%] my-3 me-16 self-start"}>
                <img className={"rounded-full size-8 object-cover"} src={messageModel.senderAvatar} alt="user avatar"/>
                <div className={"flex flex-col gap-1.5"}>
                    <span className={"text-xs text-textSecondary select-none"}>{messageModel.senderName}</span>
                    {
                        messageModel.type === SocketMessageConfig.type.TEXT
                            ? emoteIcon
                                ? <img className="size-32 select-none" src={emoteIcon.url} alt={emoteIcon.description}/>
                                : <div className={cn("rounded-r-xl rounded-bl-xl", styles.textMessage)}>
                                    <CodeHighlight message={messageModel.content}/>
                                </div>
                            : <img className={cn(styles.textMessage, styles.imageMessage)}
                                   src={URL.createObjectURL(new Blob([messageModel.content]))}
                                   alt="image"
                                   onClick={handleImageClick}/>
                    }
                </div>
            </div>
        )
    }

    return (
        <motion.div className="flex flex-col w-full" initial={{ y:10, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.15, ease: "easeIn" } }}>
            {
                messageModel.senderId === SocketMessageConfig.sender.SYSTEM
                    ? <SystemMessage/>
                    : messageModel.senderId === user.id
                        ? <SenderMessage/>
                        : <ReceiverMessage/>
            }
        </motion.div>
    )
}, (prevProps, nextProps) => {
    return prevProps.messageModel === nextProps.messageModel && prevProps.user.id === nextProps.user.id;
});

export default ChatBubble;
