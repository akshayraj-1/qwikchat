import cn from "../../utils/cn.util.js";

function MeshGradient({children, ...props}) {
    return (
        <>
            <div className="relative size-full overflow-hidden">
                <div
                    className="absolute -bottom-10 left-0 right-0 mx-auto h-[85vh] w-full md:w-[95vw] bg-glow bg-cover bg-bottom bg-no-repeat blur-3xl"
                    style={{opacity: props.opacity}}/>
                <div className={cn("relative z-[2]", props.className)}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default MeshGradient;