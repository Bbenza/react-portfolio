import React from "react";
import "./style.css";

function Navbar() {

    return (
        <div>
            <nav>
                <div className="nav-wrapper container">
                    <a href="/About" className="brand-logo">
                        <img id="nav-icon" src="../images/bobbenza-icon.png" />
                    </a>
                  
                    <ul className="right hide-on-med-and-down">
                        {/* <li><a href="/">Home</a></li> */}
                        <li><a href="/About">About</a></li>
                        <li><a href="/Projects">Projects</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {/* <li><a href="/">Home</a></li> */}
                <li><a href="/About">About</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;