import {useState} from "react";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";

const variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.3, ease: "easeIn" },
    },
};

function ImageView({imageUrl, isEmote = false,  onClick = () => {}, className}) {

    const [loaded, setLoaded] = useState(false);

    const styles = cn(
        isEmote ?
            "size-32 select-none animate-pulse bg-surfaceLight/50 rounded-full" :
            "h-80 w-auto p-1 cursor-pointer rounded-xl bg-surfaceVariant",
        loaded ? isEmote && "bg-transparent rounded-none animate-none" : "",
        "overflow-hidden",
        className
    );

    return (
        <div className={styles} onClick={onClick}>
            <motion.img
                variants={variants}
                initial={"initial"}
                animate={loaded && "animate"}
                className={cn("size-full", !isEmote && "rounded-xl object-cover")}
                src={imageUrl}
                draggable={false}
                onLoad={() => setLoaded(true)}
                onContextMenu={(e) => e.preventDefault()}
            />
        </div>
    );
}

ImageView.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    isEmote: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default ImageView;