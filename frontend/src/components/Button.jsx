import { motion } from "framer-motion";
import cn from "../utils/cn.util.js";

// eslint-disable-next-line react/prop-types
function Button({ type = "button", size = "sm", variant = "primary", effect = {hover: null, click: null}, disabled= false, label = "", onClick, className = "" }) {

    const bgColor = variant === "primary"
                           ? "bg-white text-primary"
                           : "border border-secondaryLight bg-secondaryVariant text-white";
    const textSizeClass = size === "md" ? "text-[1rem]" : "text-sm";
    const styles = cn(`
        ${textSizeClass}
        ${bgColor}
        font-normal
        rounded-md
        px-7 py-[0.65rem]
        ${className}
    `);

    const Element = type === "button" ? motion.button : motion.a;

    return (
        <Element
            whileTap={effect?.click}
            whileHover={effect?.hover}
            transition={{ duration: 0.1, ease: "easeIn" }}
            className={styles}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{label}</span>
        </Element>
    );
}

export default Button;
