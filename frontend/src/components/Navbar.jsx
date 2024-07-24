import {Link} from "react-router-dom";
import cn from "../utils/cn.util.js";

function Navbar(props) {
    return (
        <nav
            className={cn("fixed top-0 left-0 z-[45] flex justify-between w-full px-5 sm:px-9 py-[1.3rem] backdrop-blur-sm", props.className)}>
            <Link to="/" className="text-[1.15rem] font-normal">
                <span className="text-white">qwik</span>
                <span className="text-white">chat</span>
            </Link>
        </nav>
    )
}

export default Navbar;