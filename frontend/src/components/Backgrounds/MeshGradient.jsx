import cn from "../../utils/cn.util.js";
import glow2 from "../../assets/images/glow2.png";

function MeshGradient({children, ...props}) {
    return (
        <>
            <div className="relative size-full overflow-hidden">
                <div
                    className="absolute -bottom-14 left-0 right-0 mx-auto h-[75vh] w-full bg-cover bg-bottom bg-no-repeat blur-3xl"
                    style={{opacity: props.opacity, backgroundImage: `url(${glow2})`}}/>
                <div className={cn("relative z-[2]", props.className)}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default MeshGradient;