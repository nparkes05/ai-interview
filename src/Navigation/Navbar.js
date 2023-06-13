import React from "react";
import {Outlet, Link} from "react-router-dom";
import "../App.css";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };

const Navbar = () => {
    return(
        <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style={linkStyle}>Home</Link>
                        </li>
                        <li>
                            <Link to="/Interview" style={linkStyle}>Interview</Link>
                        </li>
                    </ul>
                </nav>

            <Outlet />
        </>
    )
}

export default Navbar;