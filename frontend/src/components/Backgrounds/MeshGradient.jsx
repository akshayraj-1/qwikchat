import cn from "../../utils/cn.util.js";

// eslint-disable-next-line react/prop-types
function MeshGradient({children, ...props}) {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="absolute -bottom-36 left-0 h-[80vh] w-full bg-glow bg-cover bg-bottom bg-no-repeat blur-3xl"
                 style={{opacity: props.opacity}}/>
            <div className={cn("relative z-[1]", props.className)}>
            {children}
            </div>
        </div>
    )
}

export default MeshGradient;