import React, {useState} from "react";



export function Versus()
{
    // selection 0 = empty, 1 = rock, 2 = paper, 3 = scissor
    const [selection , setSelection] = useState(0);
    const [selectionAI , setSelectionAI] = useState(0);

    const rockPath = "images/Rock.png";
    const paperPath = "images/Paper.png";
    const scissorPath = "images/Scissors.png";

    function handleClick(number)
    {
        setSelection(number);
    }

    return (
        <div className="versus">
            <h1>Versus</h1>
            <p>Choose a button</p>
            <div className="buttons">
                <button onClick={() => {handleClick(1)}}><img src={rockPath} alt="Rock"/></button>
                <button onClick={() => {handleClick(2)}}><img src={paperPath} alt="Papers"/></button>
                <button onClick={() => {handleClick(3)}}><img src={scissorPath} alt="Scissors"/></button>
            </div>
            <p>{selection}</p>
        </div>
    );
}