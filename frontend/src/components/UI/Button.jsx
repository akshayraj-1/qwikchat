import { motion } from "framer-motion";
import cn from "../../utils/cn.util.js";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Button({ type = "button", size = "sm", variant = "primary", effect = {hover: null, click: null}, disabled= false, label = "", onClick, className }) {

    const bgColor = variant === "primary"
                           ? "bg-textPrimary text-primary"
                           : "border border-secondaryLight bg-secondaryVariant text-textPrimary";
    const textSizeClass = size === "md" ? "text-base" : "text-sm";
    const styles = cn(`
        ${textSizeClass}
        ${bgColor}
        font-medium
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

Button.propTypes = {
    type: PropTypes.oneOf(["button", "anchor"]),
    size: PropTypes.oneOf(["sm", "md"]),
    variant: PropTypes.oneOf(["primary", "secondary"]),
    effect: PropTypes.shape({
        hover: PropTypes.object,
        click: PropTypes.object,
    }),
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
