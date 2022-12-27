import React, {useState} from "react";
import {Variation} from "./Variation";
import {Button, Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Versus()
{
    // selection 0 = empty, 1 = rock, 2 = paper, 3 = scissor
    const [selection , setSelection] = useState(0);
    const [selectionAI , setSelectionAI] = useState(0);

    const rockPath = "images/Rock.png";
    const paperPath = "images/Paper.png";
    const scissorPath = "images/Scissors.png";

    function handleSelection(number)
    {
        setSelection(number);
    }

    function handlePlay()
    {
        if(selection !== 0)
        {
            let randomSelection = Math.floor((Math.random() * 3) + 1);
            setSelectionAI(randomSelection);
        }
    }

    function restart()
    {
        setSelectionAI(0);
        setSelection(0);
    }

    return (

        <div className="versus">
            <Col>
                <h1>Versus</h1>
                <p>Choose a button</p>
                <Row>
                    <div className="buttons">
                        <button onClick={() => {handleSelection(1)}}><img src={rockPath} alt="Rock"/></button>
                        <button onClick={() => {handleSelection(2)}}><img src={paperPath} alt="Papers"/></button>
                        <button onClick={() => {handleSelection(3)}}><img src={scissorPath} alt="Scissors"/></button>
                    </div>
                </Row>
                <div className="">
                    <Variation selection={selection}/>
                    <p>Versus</p>
                    <Variation selection={selectionAI}/>
                </div>
                {!!!selectionAI && <Button onClick={handlePlay} variant="outline-success">Play</Button>}
                {!!selectionAI  && <Button onClick={restart} variant="outline-success">Play again</Button>}
            </Col>
        </div>
    );
}