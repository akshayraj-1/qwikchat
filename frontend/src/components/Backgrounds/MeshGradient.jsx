import cn from "../../utils/cn.util.js";

// eslint-disable-next-line react/prop-types
function MeshGradient({children, ...props}) {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="absolute -bottom-60 left-0 h-full w-full bg-glow bg-cover bg-bottom bg-no-repeat blur-2xl"
                 style={{opacity: props.opacity}}/>
            <div className={cn("relative z-[1]", props.className)}>
            {children}
            </div>
        </div>
    )
}

export default MeshGradient;