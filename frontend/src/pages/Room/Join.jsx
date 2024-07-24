import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import Button from "../../components/Button.jsx";
import Loader from "../../components/Loader.jsx";
import ToastModal from "../../components/Modal/ToastModal.jsx";

const variants = {
    initial: {
        y: 60,
        opacity: 0,
    },
    final: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "anticipate",
        },
    }
}

function Join({socket, roomId}) {

    const usernameRef = useRef(null);
    const [user, setUser] = useState({name: "", avatar: socket.actions.getRandomAvatar()});
    const [avatarLoaded, setAvatarLoaded] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [toast, setToast] = useState(null);

    const onBtnJoinRoomClick = () => {
        if (user.name && user.name.length >= 2) {
            setShowLoader(true);
            socket.actions.joinRoom(roomId, user.name, user.avatar, (res) => {
                if (!res.success) {
                    setShowLoader(false);
                    showToast(res.message);
                }
            });
        } else {
            showToast("Enter your username");
        }
    }

    const showToast = (message, type = "error") => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 2500);
    }

    const onInputChange = (e) => {
        setUser(prev => ({
            ...prev,
            name: e.target.value.toString().toLowerCase(),
        }));
    }


    return (
        showLoader
            ? <Loader />
            : <div className="relative flex justify-center items-center h-full w-full">

                <ToastModal showToast={toast && true} message={toast && toast.message} type={toast && toast.type} />

                {/*background*/}
                <motion.div initial={{opacity: 0}}
                            animate={{opacity: 0.5, transition: {duration: 0.5, ease: "easeIn"}}}
                            className="absolute h-full w-full bg-layerBlur1 bg-no-repeat bg-cover bg-center blur-[120px]"/>

                {/*input box*/}
                <motion.div variants={variants} initial="initial" animate="final"
                            className="relative flex flex-col items-center justify-center shadow-2xl px-7 py-5 min-w-80 bg-secondary border border-secondaryLight rounded-2xl text-sm
                            before:content-[''] before:absolute before:-top-14 before:size-32 before:bg-secondary before:border-t before:border-r before:-rotate-45 before:border-secondaryLight before:rounded-full">

                    {
                        !avatarLoaded && <div className="absolute z-[2] -top-[2.8rem] size-[6.8rem] p-3 bg-secondaryLight/20 rounded-full animate-pulse" ></div>
                    }
                    <motion.img className="absolute z-[2] -top-14 size-32 p-3" initial={{opacity: 0}}
                                animate={avatarLoaded && {opacity: 1, transition: {duration: 0.5, ease: "easeIn"}}}
                                src={user.avatar} alt="User Avatar"
                                onLoad={() => setAvatarLoaded(true)}
                                onContextMenu={(e) => e.preventDefault()}/>

                    <label htmlFor="roomId" className="text-textSecondary text-start w-full inline-block mt-14">Room Id</label>
                    <input id="roomId"
                           className="w-full px-3 py-2 mt-1.5 text-base sm:text-sm rounded-md border border-secondaryLight bg-secondaryVariant outline-0"
                           type="text"
                           disabled={true}
                           value={roomId}/>

                    <label htmlFor="username" className="text-textSecondary text-start w-full inline-block mt-3.5">Username</label>
                    <input ref={usernameRef}
                           id="username"
                           className="w-full px-3 py-2 mt-1.5 mb-3 text-base sm:text-sm rounded-md border border-secondaryLight bg-secondaryVariant outline-0"
                           type="text" placeholder="John"
                           required={true}
                           onInput={onInputChange}
                           onKeyDown={(e) => e.key.toString().toLowerCase() === "enter" && onBtnJoinRoomClick()}/>

                    <Button className="w-full my-3.5 py-2"
                            label="Enter"
                            effect={{click: {scale: 0.95}}}
                            onClick={onBtnJoinRoomClick}/>

                </motion.div>
            </div>
    )
}

export default Join;