import React from "react";
import {Link} from "react-router-dom";

export function Home()
{

    return (
        <div className="home">
            <h1>Welcome to RPS</h1>
            <p>Choose a mode</p>
            <div className="modes">
                <Link to="/versus">Versus</Link>
                <Link to="/town">Town</Link>
            </div>
        </div>
    );
}