import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";
import glow2 from "../../assets/images/_glow2.png";
import _main_bg from "../../assets/images/_main_bg.webp";

function DynamicBackground({ children, isBackgroundBlur = false, backgroundOpacity = 1, glowOpacity = 1, className }) {
    return (
        <div className="relative size-full overflow-hidden">
            <div
                className="absolute size-full bg-cover bg-center bg-no-repeat
                before:absolute before:size-full before:bg-gradient-to-t before:from-primary before:to-primary/20"
                style={{
                    opacity: backgroundOpacity,
                    backgroundImage: `url(${_main_bg})`,
                    filter: isBackgroundBlur ? "blur(25px)" : ""
                }}
            />
            <div
                className="absolute -bottom-14 left-0 right-0 mx-auto h-[75vh] w-full bg-cover bg-bottom bg-no-repeat blur-3xl"
                style={{
                    opacity: glowOpacity,
                    backgroundImage: `url(${glow2})`
                }}
            />
            <div className={cn("relative z-[2]", className)}>
                {children}
            </div>
        </div>
    );
}

DynamicBackground.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundOpacity: PropTypes.number,
    isBackgroundBlur: PropTypes.bool,
    glowOpacity: PropTypes.number,
    className: PropTypes.string,
};

export default DynamicBackground;
