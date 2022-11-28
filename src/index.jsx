import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./Home";
import {Navbar} from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./About";
import {NotFound} from "./NotFound";


const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="Content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));