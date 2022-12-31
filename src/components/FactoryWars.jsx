import React, {useState} from "react";
import {Button, Col, Container, ProgressBar, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Variation} from "./Variation";


export function FactoryWars()
{
    const [round, setRound] = useState(0);
    const [turn, setTurn] = useState(1);

    const [defeat, setDefeat] = useState(false);
    const [victory, setVictory] = useState(false);

    const [disableAttack, setDisableAttack] = useState(true);
    const [disableBlock, setDisableBlock] = useState(true);
    const [disableContinue, setDisableContinue] = useState(true);
    const [disablePass, setDisablePass] = useState(false);
    const [disableFactories, setDisableFactories] = useState(false);

    const [selection, setSelection] = useState(-1);
    const [selectionAI, setSelectionAI] = useState(-1);

    const [health, setHealth] = useState(20);
    const [gold, setGold] = useState(10);
    const [productions, setProductions] = useState([1, 1, 1]);
    const [amounts, setAmounts] = useState([0, 0, 0]);
    const [costs, setCosts] = useState([2, 2, 2]);

    const [healthAI, setHealthAI] = useState(20);
    const [goldAI, setGoldAI] = useState(10);
    const [productionsAI, setProductionsAI] = useState([1, 1, 1]);
    const [amountsAI, setAmountsAI] = useState([0, 0, 0]);
    const [costsAI, setCostsAI] = useState([2, 2, 2]);

    const rockPath = "images/Rock.png";
    const paperPath = "images/Paper.png";
    const scissorPath = "images/Scissors.png";

    function restart()
    {
        setRound(0);
        setTurn(1);

        setDefeat(false);
        setVictory(false);

        setDisableAttack(true);
        setDisableBlock(true);
        setDisableContinue(true);
        setDisablePass(false);
        setDisableFactories(false);

        setSelection(-1);
        setSelectionAI(-1);

        setHealth(20);
        setGold(10);
        setProductions([1, 1, 1]);
        setAmounts([0, 0, 0]);
        setCosts([2, 2, 2]);

        setHealthAI(20);
        setGoldAI(10);
        setProductionsAI([1, 1, 1]);
        setAmountsAI([0, 0, 0]);
        setCostsAI([2, 2, 2]);
    }

    function passTurn()
    {
        let numUpgrades = Math.floor(Math.random() * 6);

        let tempGoldAI = goldAI;
        let tempProductionsAI = [...productionsAI];
        let tempCostsAI = [...costsAI];

        for(let i = 0; i < numUpgrades; i++)
        {
            let randIndex = Math.floor(Math.random() * 3);

            if(tempGoldAI - tempCostsAI[randIndex] >= 0)
            {
                tempGoldAI = tempGoldAI - tempCostsAI[randIndex];

                tempCostsAI[randIndex] = tempCostsAI[randIndex] * 2;
                tempProductionsAI[randIndex] = tempProductionsAI[randIndex] * 2;
            }
        }

        setGoldAI(tempGoldAI);
        setProductionsAI(tempProductionsAI);
        setCostsAI(tempCostsAI);
        // AI turn end

        setAmounts([amounts[0] + productions[0], amounts[1] + productions[1], amounts[2] + productions[2]]);
        setAmountsAI([amountsAI[0] + tempProductionsAI[0], amountsAI[1] + tempProductionsAI[1], amountsAI[2] + tempProductionsAI[2]]);

        let bonusGold = Math.floor(gold / 5);
        let bonusGoldAI = Math.floor(goldAI / 5);

        const income = 5;

        setGold(gold + bonusGold + income);
        setGoldAI(tempGoldAI + bonusGoldAI + income);

        if((turn + 1) % 4 === 0)
        {
            setDisableBlock(false);
        }

        if((turn + 1) % 5 === 0)
        {
            setDisableAttack(false);
        }

        if(turn + 1 >= 6)
        {
            setTurn(1);
            setRound(round + 1);
        }
        else
            setTurn(turn + 1);
    }

    function calculateDamage(selectionAttack, selectionBlock, tempAmountsAttack, tempAmountsBlock)
    {
        let damage;
        switch (selectionAttack)
        {
            case 0:
                if(selectionBlock === 0)
                {
                    if(tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock] >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock];
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock];
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - tempAmountsAttack[selectionAttack];
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                else if(selectionBlock === 1)
                {
                    if(tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock] >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock];
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock];
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - Math.floor(tempAmountsAttack[selectionAttack] / 2);
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                else if(selectionBlock === 2)
                {
                    if(tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2) >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2);
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2);
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - 2 * tempAmountsAttack[selectionAttack];
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                break;
            case 1:
                if(selectionBlock === 0)
                {
                    if(tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2) >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2);
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2);
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - 2 * tempAmountsAttack[selectionAttack];
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                else if(selectionBlock === 1)
                {
                    if(tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock] >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock];
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock];
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - tempAmountsAttack[selectionAttack];
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                else if(selectionBlock === 2)
                {
                    if(tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock] >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock];
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock];
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - Math.floor(tempAmountsAttack[selectionAttack] / 2);
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                break;
            case 2:
                if(selectionBlock === 0)
                {
                    if(tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock] >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock];
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - 2 * tempAmountsBlock[selectionBlock];
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - Math.floor(tempAmountsAttack[selectionAttack] / 2);
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                else if(selectionBlock === 1)
                {
                    if(tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2) >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2);
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - Math.floor(tempAmountsBlock[selectionBlock] / 2);
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - 2 * tempAmountsAttack[selectionAttack];
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                else if(selectionBlock === 2)
                {
                    if(tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock] >= 0)
                    {
                        damage = tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock];
                        tempAmountsAttack[selectionAttack] = tempAmountsAttack[selectionAttack] - tempAmountsBlock[selectionBlock];
                        tempAmountsBlock[selectionBlock] = 0;
                    }
                    else
                    {
                        damage = 0;
                        tempAmountsBlock[selectionBlock] = tempAmountsBlock[selectionBlock] - tempAmountsAttack[selectionAttack];
                        tempAmountsAttack[selectionAttack] = 0;
                    }
                }
                break;
        }

        return damage;
    }

    function disable()
    {
        setDisableFactories(true);
        setDisableAttack(true);
        setDisableBlock(true);
        setDisablePass(true);
        setDisableContinue(true);
    }

    function handleDefeat()
    {
        setDefeat(true);
        disable();
    }

    function handleVictory()
    {
        setVictory(true);
        disable();
    }


    function handleShape(shapeIndex)
    {
        if(turn % 4 === 0 || turn % 5 === 0)
        {
            setSelection(shapeIndex);
        }
        else
        {
            if(gold - costs[shapeIndex] >= 0)
            {
                setGold(gold - costs[shapeIndex]);
                let tempProductions = [...productions];
                let tempCosts = [...costs];

                tempCosts[shapeIndex] = 2 * tempCosts[shapeIndex];
                tempProductions[shapeIndex] = 2 * tempProductions[shapeIndex];

                setProductions(tempProductions);
                setCosts(tempCosts);
            }
        }
    }

    function handlePass()
    {
        if(turn % 4 === 0) // handle passing on block turn
        {
            let tempAmountsAI = [...amountsAI];
            let tempAmounts = [0, 0, 0];

            let randomSelection = Math.floor(Math.random() * 3);
            let damageAgainstPlayer = calculateDamage(randomSelection, randomSelection, tempAmountsAI, tempAmounts);

            if(health - damageAgainstPlayer > 0)
            {
                setHealth(health - damageAgainstPlayer);

                setSelection(-1);
                setSelectionAI(randomSelection);
                setDisableBlock(true);
                setDisablePass(true);
                setDisableContinue(false);
            }
            else
            {
                setHealth(0);
                setSelectionAI(randomSelection);
                handleDefeat();
            }

        }
        else if(turn % 5 === 0) // handle passing on attack turn
        {
            let randomSelection = Math.floor(Math.random() * 3);

            // nothing happens
            setSelection(-1);
            setSelectionAI(randomSelection);
            setDisableAttack(true);
            setDisablePass(true);
            setDisableContinue(false);
        }
        else
        {
            passTurn();
        }
    }

    function handleAttack()
    {
        let randomSelection = Math.floor(Math.random() * 3);

        let tempAmounts = [...amounts];
        let tempAmountsAI = [...amountsAI];
        let tempSelection = selection;

        if(tempSelection === -1)
        {
            tempSelection = Math.floor(Math.random() * 3);
            setSelection(tempSelection);
        }

        let damageAgainstAI = calculateDamage(tempSelection, randomSelection, tempAmounts, tempAmountsAI);

        if(healthAI - damageAgainstAI > 0)
        {
            setHealthAI(healthAI - damageAgainstAI);

            setAmounts(tempAmounts);
            setAmountsAI(tempAmountsAI);
            setSelectionAI(randomSelection);
            setDisableFactories(true);
            setDisableAttack(true);
            setDisablePass(true);
            setDisableContinue(false);
        }
        else
        {
            setHealthAI(0);
            setAmounts(tempAmounts);
            setAmountsAI(tempAmountsAI);
            setSelectionAI(randomSelection);
            handleVictory();
        }

    }

    function handleBlock()
    {
        let randomSelection = Math.floor(Math.random() * 3);

        let tempAmounts = [...amounts];
        let tempAmountsAI = [...amountsAI];
        let tempSelection = selection;

        if(tempSelection === -1)
        {
            tempSelection = Math.floor(Math.random() * 3);
            setSelection(tempSelection);
        }

        let damageAgainstPlayer = calculateDamage(randomSelection, tempSelection, tempAmountsAI, tempAmounts);

        if(health - damageAgainstPlayer > 0)
        {
            setHealth(health - damageAgainstPlayer);
            setAmounts(tempAmounts);
            setAmountsAI(tempAmountsAI);
            setSelectionAI(randomSelection);
            setDisableFactories(true);
            setDisableBlock(true);
            setDisablePass(true);
            setDisableContinue(false);
        }
        else
        {
            setHealth(0);
            setAmounts(tempAmounts);
            setAmountsAI(tempAmountsAI);
            setSelectionAI(randomSelection);
            handleDefeat();
        }
    }

    function handleContinue()
    {
        setSelection(-1);
        setSelectionAI(-1);
        setDisableFactories(false);
        setDisablePass(false);
        setDisableContinue(true);
        passTurn();
    }

    return(
        <div className="factoryWars">
            <Container>
                <Row className="justify-content-md-center">
                    <Col/>
                    <Col md="auto">
                        <h1>FactoryWars</h1>
                    </Col>
                    <Col/>
                </Row>
                <Row className="justify-content-md-center">
                    <Col/>
                    <Col md="auto">
                        <h2>Round: {round}, Turn: {turn}</h2>
                    </Col>
                    <Col/>
                </Row>
                <Row className="justify-content-md-center">
                    <Col/>
                    <Col md="auto">
                        {defeat && <h1>You Lost</h1>}
                        {victory && <h1>You Won</h1>}
                    </Col>
                    <Col/>
                </Row>
                <Row className="justify-content-md-center">
                    <Col/>
                    <Col md="auto">
                        {victory && <Button onClick={() => {restart()}}>Play Again</Button>}
                        {defeat && <Button onClick={() => {restart()}}>Play Again</Button>}
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Col>
                        <div className="factory">
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <h2>Player</h2>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <h3>Gold: {gold}</h3>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <ProgressBar now={health} max={20} label={'HP: ' + health} variant="danger"/>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <div className="buttons">
                                        <button disabled={disableFactories} onClick={() => handleShape(0)}><img src={rockPath} alt="Rock"/></button>
                                        <p>Production: {productions[0]}</p>
                                        <p>Cost: {costs[0]}</p>
                                        <p>Amount: {amounts[0]}</p>
                                    </div>
                                </Col>
                                <Col md="auto">
                                    <div className="buttons">
                                        <button disabled={disableFactories} onClick={() => handleShape(1)}><img src={paperPath} alt="Papers"/></button>
                                        <p>Production: {productions[1]}</p>
                                        <p>Cost: {costs[1]}</p>
                                        <p>Amount: {amounts[1]}</p>
                                    </div>
                                </Col>
                                <Col md="auto">
                                    <div className="buttons">
                                        <button disabled={disableFactories} onClick={() => handleShape(2)}><img src={scissorPath} alt="Scissors"/></button>
                                        <p>Production: {productions[2]}</p>
                                        <p>Cost: {costs[2]}</p>
                                        <p>Amount {amounts[2]}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Button disabled={disableAttack} onClick={() => {handleAttack()}} variant="danger">Attack</Button>
                                </Col>
                                <Col md="auto">
                                    <Button disabled={disableBlock} onClick={() => {handleBlock()}} variant="secondary">Block</Button>
                                </Col>
                                <Col md="auto">
                                    <Button disabled={disablePass} onClick={() => {handlePass()}} variant="warning">Pass</Button>
                                </Col>
                                <Col md="auto">
                                    <Button disabled={disableContinue} onClick={() => {handleContinue()}} variant="primary">Continue</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md="auto">
                        <Row>
                            <Col>
                                <div>
                                    {
                                        (turn % 4 === 0) &&
                                        <>
                                            <Variation selection={selection + 1}/>
                                            <p>Block with</p>
                                        </>

                                    }
                                    {
                                        (turn % 5 === 0) &&
                                        <>
                                            <Variation selection={selection + 1}/>
                                            <p>Attack with</p>
                                        </>

                                    }
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    {
                                        (turn % 4 === 0) &&
                                        <>
                                            <Variation selection={selectionAI + 1}/>
                                            <p>AI Attacks with</p>
                                        </>

                                    }
                                    {
                                        (turn % 5 === 0) &&
                                        <>
                                            <Variation selection={selectionAI + 1}/>
                                            <p>AI Blocks with</p>
                                        </>

                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className="factory">
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <h2>AI</h2>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <h3>Gold: {goldAI}</h3>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <ProgressBar now={healthAI} max={20} label={'HP: ' + healthAI} variant="danger"/>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <div className="buttons">
                                        <button disabled={true}><img src={rockPath} alt="Rock"/></button>
                                        <p>Production: {productionsAI[0]}</p>
                                        <p>Cost: {costsAI[0]}</p>
                                        <p>Amount: {amountsAI[0]}</p>
                                    </div>
                                </Col>
                                <Col md="auto">
                                    <div className="buttons">
                                        <button disabled={true}><img src={paperPath} alt="Papers"/></button>
                                        <p>Production: {productionsAI[1]}</p>
                                        <p>Cost: {costsAI[1]}</p>
                                        <p>Amount: {amountsAI[1]}</p>
                                    </div>
                                </Col>
                                <Col md="auto">
                                    <div className="buttons">
                                        <button disabled={true}><img src={scissorPath} alt="Scissors"/></button>
                                        <p>Production: {productionsAI[2]}</p>
                                        <p>Cost: {costsAI[2]}</p>
                                        <p>Amount {amountsAI[2]}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}