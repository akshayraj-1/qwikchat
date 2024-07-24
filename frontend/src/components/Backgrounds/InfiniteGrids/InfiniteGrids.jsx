import "./InfiniteGrids.scss";
import cn from "../../../utils/cn.util.js";

function InfiniteGrids({children, ...props}) {
    return (
        <>
            <div id="infinite-grids" className="fixed size-full" style={{ opacity: props.opacity }}/>
            <div className={cn("relative z-[2] size-full bg-gradient-to-t from-primary/80 to-transparent", props.className)}>
                {children}
            </div>
        </>
    )
}

export default InfiniteGrids;