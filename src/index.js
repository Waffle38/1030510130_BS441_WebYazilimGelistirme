import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./client/Navbar";
import {Home} from "./client/Home";
import {About} from "./client/About";
import {Versus} from "./client/Versus";
import {FactoryWars} from "./client/FactoryWars";
import {NotFound} from "./client/NotFound";
import {Col, Container, Row, ThemeProvider} from "react-bootstrap";


const App = () => {

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="">
                        <BrowserRouter>
                            <div className="App">
                                <Navbar/>
                                <div className="Content">
                                    <Routes>
                                        <Route path="/" element={<Home/>}/>
                                        <Route path="/about" element={<About/>}/>
                                        <Route path="/versus" element={<Versus/>}/>
                                        <Route path="/factory" element={<FactoryWars/>}/>
                                        <Route path="*" element={<NotFound/>}/>
                                    </Routes>
                                </div>
                            </div>
                        </BrowserRouter>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
}

ReactDOM.render(<React.StrictMode> <App/> </React.StrictMode>, document.getElementById("root"));