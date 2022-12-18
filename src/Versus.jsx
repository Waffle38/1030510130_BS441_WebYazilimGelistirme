import React, {useState} from "react";
import {VersusGame} from "./VersusGame";

export function Versus()
{
    // selection 0 = empty, 1 = rock, 2 = paper, 3 = scissor
    const [selection , setSelection] = useState(0);
    const [selectionAI , setSelectionAI] = useState(0);

    const rockPath = "images/Rock.png";
    const paperPath = "images/Paper.png";
    const scissorPath = "images/Scissors.png";

    return (
        <div className="versus">
            <h1>Versus</h1>
            <p>Choose a button</p>
            <div className="buttons">
                <button><img src={rockPath} alt="Rock"/></button>
                <button><img src={paperPath} alt="Papers"/></button>
                <button><img src={scissorPath} alt="Scissors"/></button>
            </div>
            { selection && <VersusGame sources={[rockPath, paperPath, scissorPath]} sel={selection} selAI={selectionAI}/>}
        </div>
    );
}