import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";
import img_glow from "../../assets/images/img_glow.png";
import img_main_bg from "../../assets/images/img_main_bg.webp";

function MainBackground({ children, isBackgroundBlur = false, backgroundOpacity = 1, glowOpacity = 1, className }) {
    return (
        <section className="relative size-full overflow-hidden">
            <div
                className="absolute size-full bg-cover bg-center bg-no-repeat
                before:absolute before:size-full before:bg-gradient-to-t before:from-background before:to-transparent"
                style={{
                    opacity: backgroundOpacity,
                    backgroundImage: `url(${img_main_bg})`,
                    filter: isBackgroundBlur ? "blur(25px)" : ""
                }}
            />
            <div
                className="absolute -bottom-16 left-0 right-0 mx-auto h-[70vh] w-full bg-cover bg-bottom bg-no-repeat blur-3xl"
                style={{
                    opacity: glowOpacity,
                    backgroundImage: `url(${img_glow})`
                }}
            />
            <div className={cn("relative z-[2]", className)}>
                {children}
            </div>
        </section>
    );
}

MainBackground.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundOpacity: PropTypes.number,
    isBackgroundBlur: PropTypes.bool,
    glowOpacity: PropTypes.number,
    className: PropTypes.string,
};

export default MainBackground;
