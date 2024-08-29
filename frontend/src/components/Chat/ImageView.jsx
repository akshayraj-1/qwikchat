import cn from "../../utils/cn.util.js";
import {useState} from "react";
import {motion} from "framer-motion";

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
        isEmote ? "size-32 select-none animate-pulse bg-secondaryLight/50 rounded-full" : "h-80 w-auto p-1 object-contain cursor-pointer rounded-xl bg-secondaryVariant",
        "overflow-hidden",
        loaded ? isEmote && "bg-transparent rounded-none animate-none" : "",
        className
    );

    return (
        <div className={styles} onClick={onClick}>
            <motion.img
                variants={variants}
                initial={"initial"}
                animate={loaded && "animate"}
                className={cn("size-full", !isEmote && "rounded-xl")}
                src={imageUrl}
                draggable={false}
                onLoad={() => setLoaded(true)}
                onContextMenu={(e) => e.preventDefault()}
            />
        </div>
    );
}

export default ImageView;