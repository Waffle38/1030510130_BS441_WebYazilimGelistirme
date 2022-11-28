import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./Home";
import {Navbar} from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./About";
import {NotFound} from "./NotFound";
import {Versus} from "./Versus";
import {Town} from "./Town";


const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="Content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/versus" element={<Versus/>}/>
                        <Route path="/town" element={<Town/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

ReactDOM.render(<React.StrictMode> <App/> </React.StrictMode>, document.getElementById("root"));