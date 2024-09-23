import {motion} from "framer-motion";
import PropTypes from "prop-types";

const variants = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: "easeIn",
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut",
        }
    }
}

function Backdrop({ children, onClick }) {
    return (
        <motion.div key="modal-backdrop"
                    variants={variants} initial="initial"
                    animate="final" exit="exit" onClick={onClick}
                    className="absolute top-0 left-0 z-50 flex items-center justify-center h-full w-full bg-primary/60">
            {children}
        </motion.div>
    )
}

Backdrop.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default Backdrop;