import "./InfiniteGrids.scss";
import cn from "../../../utils/cn.util.js";

function InfiniteGrids({children, ...props}) {
    return (
        <>
            <div id="infinite-grids" className={cn("fixed h-full w-full", props.className)}
                 style={{opacity: props.opacity ? props.opacity : 1}}>
            </div>
            <div className="relative z-[2] h-full w-full bg-gradient-to-t from-primary/80 to-transparent">
                {children}
            </div>
        </>
    )
}

export default InfiniteGrids;