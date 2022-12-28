import React from "react";
import {Link} from "react-router-dom";

export function Home()
{

    return (
        <div className="home">
            <h1>Welcome to RPS</h1>
            <p>Choose a game mode</p>
            <div className="modes">
                <button><Link to="/versus">Versus</Link></button>
                <button><Link to="/factory">FactoryWars</Link></button>
            </div>
        </div>
    );
}