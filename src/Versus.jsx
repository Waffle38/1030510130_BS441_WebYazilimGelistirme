import React from "react";

export function Versus()
{
    return (
        <div className="versus">
            <h1>Versus</h1>
            <p>Choose a button</p>
            <div className="buttons">
                <button><img src="images/Rock.png" alt="Rock"/></button>
                <button><img src="images/Paper.png" alt="Papers"/></button>
                <button><img src="images/Scissors.png" alt="Scissors"/></button>
            </div>
        </div>
    );
}