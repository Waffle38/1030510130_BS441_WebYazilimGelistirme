import React from "react";
import ReactDOM from "react-dom";
import {Modes} from "./Modes";


const App = () => {

    return (
        <div className="App">
            <h1>Welcome to RPS</h1>
            <p>Choose a mode</p>
            <Modes/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));