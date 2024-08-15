import {Link} from "react-router-dom";
import cn from "../../utils/cn.util.js";
import qwikchat_logo from "../../assets/images/qwikchat_logo.svg";

function Navbar(props) {
    return (
        <nav
            className={cn("fixed top-0 left-0 z-[45] flex justify-between w-full px-5 sm:px-9 py-[1.3rem] backdrop-blur-sm", props.className)}>
            <Link to="/" className="flex items-center justify-center text-[1.15rem] font-normal text-textPrimary">
                <img className="h-5 me-2 -mb-[1px] " src={qwikchat_logo} alt="qwikchat"/>
                <span>qwikchat</span>
            </Link>
        </nav>
    )
}

export default Navbar;