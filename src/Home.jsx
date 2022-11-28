import React from "react";

export function Home()
{

    return (
        <div className="home">
            <h1>Welcome to RPS</h1>
            <p>Choose a mode</p>
            <div className="modes">
                <button>1 vs 1</button>
                <button>Town</button>
            </div>
        </div>
    );
}