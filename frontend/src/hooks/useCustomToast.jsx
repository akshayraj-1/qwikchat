import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cn from "../utils/cn.util.js";
import {AnimatePresence, motion} from "framer-motion";
import {CheckCheck, CircleAlert} from "lucide-react";

const variants = {
    initial: {
        y: 200,
        opacity: 0,
    },
    final: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: "anticipate",
        },
    },
    exit: {
        y: 200,
        opacity: 0,
        transition: {
            duration: 0.9,
            ease: "anticipate",
        }
    }
};

function useCustomToast() {

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("error");

    const styles = {
        parent: cn("absolute z-[50] bottom-5 sm:bottom-10 flex justify-center w-screen select-none px-5"),
        body: cn("relative flex gap-2 items-center bg-secondary w-full sm:w-fit px-5 py-3 rounded-md border border-secondaryLight/30 shadow"),
        message: cn("sm:text-[0.75rem] text-sm", toastType === "error" ? "text-error" : "text-success")
    }


    useEffect(() => {
        if (toastVisible) {
            let timer = setTimeout(() => {
                setToastVisible(false);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [toastVisible]);

    const showToast = (message, type = "error") => {
        setToastType(type);
        setToastMessage(message);
        setToastVisible(true);
    };

    const CustomToastModal = () => {
        return (
            <AnimatePresence mode="wait">
                {
                    toastVisible &&
                    <div className={styles.parent} >
                        <motion.div className={styles.body} variants={variants} initial="initial" animate="final" exit="exit">
                            {toastType === "error" ? <CircleAlert size={13} className={styles.message} /> : <CheckCheck size={13} className={styles.message} />}
                            <p className={styles.message}>{toastMessage}</p>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>
        );
    };

    showToast.propTypes = {
        message: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["error", "success"]),
    };

    return { CustomToastModal, showToast };

}


export default useCustomToast;