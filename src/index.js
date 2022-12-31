import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {How} from "./components/How";
import {Versus} from "./components/Versus";
import {FactoryWars} from "./components/FactoryWars";
import {NotFound} from "./components/NotFound";
import {ThemeProvider} from "react-bootstrap";

//<Container>
  //  <Row className="justify-content-md-center">
    //    <Col md="">
const App = () => {

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <div className="Content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/how" element={<How/>}/>
                            <Route path="/versus" element={<Versus/>}/>
                            <Route path="/factory" element={<FactoryWars/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

ReactDOM.render(<React.StrictMode> <App/> </React.StrictMode>, document.getElementById("root"));