import React, {useMemo} from "react";
import {motion} from "framer-motion";
import cn from "../../utils/cn.util.js";
import getEmoteIcon from "../../utils/emoteicon.util.js";
import SocketMessageConfig from "../../../../backend/socket-message-config.json";
import ImageView from "./ImageView.jsx";
import TextView from "./TextView.jsx";


const variants = {
    parentBubble: {
        initial: {y: 10, opacity: 0},
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.15,
                ease: "easeIn",
            }
        }
    }
}

function MessageBubble({user, messageModel, onImageClick, onTextClick}) {

    const {isSender, emoteIcon} = useMemo(
        () => ({
            isSender: user.id === messageModel.senderId,
            emoteIcon: messageModel.type === SocketMessageConfig.type.TEXT && getEmoteIcon(messageModel.content)
        }),
        [messageModel]
    );

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

    const UserMessage = () => {
        return (
            <div className={cn(
                "flex w-auto md:max-w-[80%] my-3",
                isSender ? "flex-col items-end gap-1.5 self-end ms-8" : "gap-2 items-start self-start me-16"
            )}>
                {!isSender && <ImageView className={"rounded-full size-8 object-cover p-0 cursor-default"}
                                         imageUrl={messageModel.senderAvatar}/>
                }
                <div className={cn("flex flex-col gap-1.5", isSender && "items-end self-end")}>
                    <span
                        className={"block text-xs text-textSecondary select-none"}>{isSender ? "you" : messageModel.senderName}</span>
                    {
                        messageModel.type === SocketMessageConfig.type.TEXT
                            ? emoteIcon
                                ? <ImageView imageUrl={emoteIcon.url} isEmote={true}/>
                                : <TextView message={messageModel.content} onTextClick={onTextClick}
                                            className={cn(isSender ? "rounded-l-xl rounded-br-xl" : "rounded-r-xl rounded-bl-xl")}/>
                            : <ImageView imageUrl={URL.createObjectURL(new Blob([messageModel.content]))}
                                         onClick={onImageClick}/>
                    }
                </div>
            </div>
        );
    }

    return (
        <motion.div className="flex flex-col w-full" variants={variants.parentBubble} initial={"initial"} animate={"animate"}>
            {
                messageModel.senderId === SocketMessageConfig.sender.SYSTEM
                    ? <SystemMessage/>
                    : <UserMessage/>
            }
        </motion.div>
    )
}

export default React.memo(MessageBubble, (prevProps, nextProps) => {
    return prevProps.messageModel === nextProps.messageModel && prevProps.user.id === nextProps.user.id
});
