import React from "react";
import {Link} from "react-router-dom";

export function Navbar()
{
    return (
        <nav className="navbar">
            <h1>
                <Link to="/">RPS</Link>
            </h1>
            <div className="links">
                <Link to="/how">How to Play</Link>
            </div>
        </nav>
    );
}