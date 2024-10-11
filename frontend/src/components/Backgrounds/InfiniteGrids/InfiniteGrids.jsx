import "./InfiniteGrids.scss";
import PropTypes from "prop-types";
import cn from "../../../utils/cn.util.js";

function InfiniteGrids({children, ...props}) {
    return (
        <>
            <div id="infinite-grids" className="fixed size-full" style={{ opacity: props.opacity }}/>
            <div className={cn("relative z-[2] size-full bg-gradient-to-t from-background/80 to-transparent", props.className)}>
                {children}
            </div>
        </>
    )
}

InfiniteGrids.propTypes = {
    children: PropTypes.node.isRequired,
    opacity: PropTypes.number,
    className: PropTypes.string
};

export default InfiniteGrids;