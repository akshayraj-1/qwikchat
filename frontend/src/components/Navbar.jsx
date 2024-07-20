import { Link } from "react-router-dom";
import cn from "../utils/cn.util.js";

function Navbar(props) {
  return (
      // eslint-disable-next-line react/prop-types
    <nav className={cn("fixed top-0 left-0 z-[45] flex justify-between w-full px-5 sm:px-9 py-5 backdrop-blur-sm", props.className)}>
    <Link to="/" className="text-lg font-normal">
    <span className="text-white">Qwik</span>
    <span className="text-white">Chat</span>
    </Link>
    </nav>
  )
}

export default Navbar;