import {AnimatePresence, motion} from "framer-motion";
import PropTypes from "prop-types";
import { CircleAlert, CheckCheck } from "lucide-react";
import cn from "../../utils/cn.util.js";

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

function ToastModal({ showToast = false, message = "", type = "error", richColors = false}) {

    const styles = {
        parent: cn("absolute z-[50] bottom-10 flex justify-center w-screen select-none"),
        body: cn("relative flex gap-2 items-center bg-secondary w-fit px-5 py-3 rounded-md"),
        message: cn("sm:text-[0.75rem] text-sm", type === "error" ? "text-error" : "text-success")
    }

    return (
        <AnimatePresence mode="wait">
            {
                showToast &&
                <motion.div variants={variants} initial="initial" animate="final" exit="exit" className={styles.parent}>
                    <div className={styles.body}>
                        {type === "error" ? <CircleAlert size={13} className={styles.message} /> : <CheckCheck size={13} className={styles.message} />}
                        <p className={styles.message}>{message}</p>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

ToastModal.propTypes = {
    showToast: PropTypes.bool,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["error", "success"]),
    richColors: PropTypes.bool
};

export default ToastModal;