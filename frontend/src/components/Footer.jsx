import {Link} from "react-router-dom";
import {version} from "../../package.json";

function Footer() {
    return (
        <footer className="absolute bottom-0 z-10 flex flex-wrap items-center gap-5 w-full py-5 px-5 sm:px-9 text-textSecondary text-sm transition duration-300">
            <Link className="hover:text-white" to="/about">About</Link>
            <Link className="hover:text-white" to="/help">Help</Link>
            <Link className="hover:text-white" to="/privacy">Privacy</Link>
            <span className="ms-auto opacity-30" >{version}</span>
        </footer>
    )
}

export default Footer;