import React, {useState} from "react";
import {Variation} from "./Variation";
import {Button, Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Condition({condition})
{
    let conditions = ["you lost", "draw", "you won"];
    return <h2>{conditions[condition - 1]}</h2>
}

export function Versus()
{
    // selection 0 = empty, 1 = rock, 2 = paper, 3 = scissor
    const [selection , setSelection] = useState(0);
    const [selectionAI , setSelectionAI] = useState(0);
    const [defeat , setDefeat] = useState(0);
    const [draw , setDraw] = useState(0);
    const [victory , setVictory] = useState(0);
    const [condition , setCondition] = useState(0); // 0 = empty, 1 = defeat, 2 = draw, 3 = victory

    const possibleSelections =
        {
            Empty: 0,
            Rock: 1,
            Paper: 2,
            Scissors: 3
        }
    const possibleConditions =
        {
            Empty: 0,
            Defeat: 1,
            Draw: 2,
            Victory: 3
        }

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

            switch (selection)
            {
                case possibleSelections.Rock:
                    if(randomSelection === possibleSelections.Rock)
                    {
                        setCondition(possibleConditions.Draw);
                        setDraw(draw + 1);
                    }
                    else if(randomSelection === possibleSelections.Paper)
                    {
                        setCondition(possibleConditions.Defeat);
                        setDefeat(defeat + 1);
                    }
                    else if(randomSelection === possibleSelections.Scissors)
                    {
                        setCondition(possibleConditions.Victory);
                        setVictory(victory + 1);
                    }
                    break;
                case possibleSelections.Paper:
                    if(randomSelection === possibleSelections.Rock)
                    {
                        setCondition(possibleConditions.Victory);
                        setVictory(victory + 1);
                    }
                    else if(randomSelection === possibleSelections.Paper)
                    {
                        setCondition(possibleConditions.Draw);
                        setDraw(draw + 1);
                    }
                    else if(randomSelection === possibleSelections.Scissors)
                    {
                        setCondition(possibleConditions.Defeat);
                        setDefeat(defeat + 1);
                    }
                    break;
                case possibleSelections.Scissors:
                    if(randomSelection === possibleSelections.Rock)
                    {
                        setCondition(possibleConditions.Defeat);
                        setDefeat(defeat + 1);
                    }
                    else if(randomSelection === possibleSelections.Paper)
                    {
                        setCondition(possibleConditions.Victory);
                        setVictory(victory + 1);
                    }
                    else if(randomSelection === possibleSelections.Scissors)
                    {
                        setCondition(possibleConditions.Draw);
                        setDraw(draw + 1);
                    }
                    break;

            }
        }
    }

    function restart()
    {
        setSelectionAI(0);
        setSelection(0);
        setCondition(0);
    }

    return (

        <div className="versus">
            <Col>
                <h1>Versus</h1>
                <p>Choose a button</p>
                <Row>
                    <div className="buttons">
                        <button onClick={() => {handleSelection(1)}} disabled={!!selectionAI}><img src={rockPath} alt="Rock"/></button>
                        <button onClick={() => {handleSelection(2)}} disabled={!!selectionAI}><img src={paperPath} alt="Papers"/></button>
                        <button onClick={() => {handleSelection(3)}} disabled={!!selectionAI}><img src={scissorPath} alt="Scissors"/></button>
                    </div>
                </Row>
                <div>
                    <Variation selection={selection}/>
                    <p>Versus</p>
                    <Variation selection={selectionAI}/>
                </div>
                {!!condition && <Condition condition={condition}/>}
                {!!!selectionAI && <Button onClick={handlePlay} variant="outline-success">Play</Button>}
                {!!selectionAI  && <Button onClick={restart} variant="outline-success">Play again</Button>}
                <div>
                    <h2>defeats: {defeat}</h2>
                    <h2>draws: {draw}</h2>
                    <h2>victories: {victory}</h2>
                </div>
            </Col>
        </div>
    );
}