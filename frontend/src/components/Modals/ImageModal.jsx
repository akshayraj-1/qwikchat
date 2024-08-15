import {motion, AnimatePresence} from "framer-motion";
import Backdrop from "./Backdrop.jsx";
import {useEffect, useState} from "react";
import cn from "../../utils/cn.util.js";

function ImageModal({show = false, image, onCancel}) {

    const [zoomedIn, setZoomedIn] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onCancel();
            }
        };

        const handlePopState = () => {
            onCancel();
        };

        if (show) {
            window.addEventListener("keydown", handleKeyDown);
            window.history.pushState({}, "");
            window.addEventListener("popstate", handlePopState);
        }

        if (show) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (show) {
                window.history.back();
                window.removeEventListener("popstate", handlePopState);
            }
        };
    }, [show, onCancel]);

    const handleImageClick = (e) => {
        e.stopPropagation();
        setZoomedIn(!zoomedIn);
    };

    return (
        <AnimatePresence mode="wait">
            {
                show &&
                <Backdrop onClick={onCancel}>
                    <div className="flex justify-center items-center size-full overflow-auto">
                        <motion.img
                            className={cn("max-h-[80%] w-auto object-contain touch-pinch-zoom", zoomedIn ? "scale-[2] cursor-zoom-out" : "scale-100 cursor-zoom-in")}
                            style={{transition: "all 0.3s ease-in-out"}}
                            src={image}
                            onClick={handleImageClick}
                        />
                    </div>
                </Backdrop>
            }
        </AnimatePresence>
    )
}

export default ImageModal;