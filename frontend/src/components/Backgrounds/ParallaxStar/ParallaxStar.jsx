import "./ParallaxStar.scss"
import cn from "../../../utils/cn.util.js";

// eslint-disable-next-line react/prop-types
function ParallaxStar({ children, ...props }) {
    return (
        <>
            <div id="parallax-stars" className={cn("fixed h-full w-full", props.className)}
                 style={{opacity: props.opacity ? props.opacity : 1}}>
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>
            <div className="relative z-[2] h-full w-full">
                {children}
            </div>
        </>
    );
}

export default ParallaxStar;