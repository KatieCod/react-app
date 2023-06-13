import React, { useState } from "react";
import Line from "./Line";
import Output from "./Output";

function App() {
    let [clicked, setClicked] = useState()

    function handleClick(e) {
        setClicked(clicked = e)
    }

    return(
            <div>
                <div>
                    <Line digit1={1} digit2={2} handleClick={handleClick}/>
                    <Line digit1={2} digit2={4} handleClick={handleClick}/>
                    <Line digit1={3} digit2={6} handleClick={handleClick}/>
                    <Line digit1={4} digit2={8} handleClick={handleClick}/>
                    <Line digit1={5} digit2={10} handleClick={handleClick}/>
                    <Line digit1={6} digit2={12} handleClick={handleClick}/>
                </div>
                <div>
                    <Output x={clicked}/>
                </div>
            </div>
        );
}
export default App;