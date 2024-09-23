import {AnimatePresence, motion} from "framer-motion";
import cn from "../../utils/cn.util.js";
import Button from "../UI/Button.jsx";
import Backdrop from "./Backdrop.jsx";
import PropTypes from "prop-types";

const variants = {
    initial: {
        y: 250,
        opacity: 0,
    },
    final: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "anticipate",
        }
    }
}

function BannerModal({ showModal = false, title, message, position = "bottom", onConfirm, onCancel }) {

    return (
        <AnimatePresence mode="wait">
            {
                showModal &&
                <Backdrop onClick={onCancel}>
                    <motion.div variants={variants}
                                initial="initial"
                                animate="final"
                                onClick={(e) => e.stopPropagation()}
                                className={cn("absolute flex flex-wrap justify-center gap-5 px-9 py-9 w-full bg-primary border-t border-secondaryLight", position === "bottom" ? "bottom-0" : "top-0")}>
                        <div className="md:max-w-[70%] w-full">
                            <h2 className="text-xl font-medium">{title}</h2>
                            <p className="text-textSecondary text-sm font-thin mt-3">{message}</p>
                        </div>
                        <Button className="my-auto w-full sm:w-auto" label="Continue" onClick={onConfirm}/>
                    </motion.div>
                </Backdrop>
            }
        </AnimatePresence>
    )
}

BannerModal.propTypes = {
    showModal: PropTypes.bool,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["top", "bottom"]),
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
};

export default BannerModal;