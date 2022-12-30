import React, {useState} from "react";
import {Button, Col, Container, ProgressBar, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export function FactoryWars()
{
    let factoryDefault =
    {
        health: 20,
        gold: 10,
        productions: [2, 2, 2],
        amounts: [0, 0, 0],
        costs: [2, 2, 2]
    };

    const [turn, setTurn] = useState(1);

    const [health, setHealth] = useState(20);
    const [gold, setGold] = useState(10);
    const [productions, setProductions] = useState([2, 2, 2]);
    const [amounts, setAmounts] = useState([0, 0, 0]);
    const [costs, setCosts] = useState([2, 2, 2]);

    const [healthAI, setHealthAI] = useState(20);
    const [goldAI, setGoldAI] = useState(10);
    const [productionsAI, setProductionsAI] = useState([2, 2, 2]);
    const [amountsAI, setAmountsAI] = useState([0, 0, 0]);
    const [costsAI, setCostsAI] = useState([2, 2, 2]);

    const rockPath = "images/Rock.png";
    const paperPath = "images/Paper.png";
    const scissorPath = "images/Scissors.png";

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
                        <h2>Turn: {turn}</h2>
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
                                        <button><img src={rockPath} alt="Rock"/></button>
                                        <p>Production: {productions[0]}</p>
                                        <p>Cost: {costs[0]}</p>
                                        <p>Amount: {amounts[0]}</p>
                                    </div>
                                </Col>
                                <Col md="auto">
                                    <div className="buttons">
                                        <button><img src={paperPath} alt="Papers"/></button>
                                        <p>Production: {productions[1]}</p>
                                        <p>Cost: {costs[1]}</p>
                                        <p>Amount: {amounts[1]}</p>
                                    </div>
                                </Col>
                                <Col md="auto">
                                    <div className="buttons">
                                        <button><img src={scissorPath} alt="Scissors"/></button>
                                        <p>Production: {productions[2]}</p>
                                        <p>Cost: {costs[2]}</p>
                                        <p>Amount {amounts[2]}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Button  variant="danger">Attack</Button>
                                </Col>
                                <Col md="auto">
                                    <Button variant="secondary">Block</Button>
                                </Col>
                                <Col md="auto">
                                    <Button variant="warning">Pass</Button>
                                </Col>
                                <Col md="auto">
                                    <Button variant="primary">Continue</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>

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
                                        <p>Cost: {costsAI[1]}</p>AI
                                        <p>Amount: {amountsAI[1]}</p>AI
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