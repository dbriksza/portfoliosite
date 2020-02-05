import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="">Resume</Link>
                <Link to="">Projects</Link>
                <Link to="">Contact</Link>
            </nav>
        </div>
    )
}

export default NavBar;