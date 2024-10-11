import { motion } from "framer-motion";
import cn from "../../utils/cn.util.js";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Button({ type = "button", size = "sm", variant = "primary", effect = {hover: null, click: null}, disabled= false, label = "", onClick, className }) {

    const bgColor = variant === "primary"
                           ? "bg-gradient-to-br from-primary to-primaryDark text-textPrimary border-t-[2.5px] border-primaryLight"
                           : variant === "secondary"
                           ? "border border-surfaceLight bg-surfaceVariant text-textPrimary"
                           : "border border-textPrimary text-textPrimary hover:bg-textPrimary hover:text-surfaceVariant transition duration-300";
    const textSizeClass = size === "md" ? "text-base" : "text-sm";
    const styles = cn(`
        ${textSizeClass}
        ${bgColor}
        font-normal
        rounded-md
        tracking-wide
        px-7 py-[0.5rem]
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
    variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
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
