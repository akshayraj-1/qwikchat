import {AnimatePresence, motion} from "framer-motion";
import cn from "../../utils/cn.util.js";
import { CircleAlert, CheckCheck } from "lucide-react";
import {useEffect, useState} from "react";

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
}

function ToastModal({showToast = false, message = "", type = "error", richColors = false}) {

    const styles = {
        body: cn("absolute z-10 bottom-10 flex gap-2 items-center bg-secondary px-5 py-3 rounded-md"),
        message: cn("sm:text-[0.75rem] text-sm", type === "error" ? "text-error" : "text-success")
    }

    return (
        <AnimatePresence mode="wait">
            {
                showToast &&
                <motion.div variants={variants} initial="initial" animate="final" exit="exit" className={styles.body}>
                    {type === "error" ? <CircleAlert size={13} className={styles.message} /> : <CheckCheck size={13} />}
                    <p className={styles.message}>{message}</p>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default ToastModal;