import React from "react";
import Line from "./Line";
import Output from "./Output";

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            clicked: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({clicked: e})
    }

    render(){
        return(
            <div>
                <div>
                    <Line digit1={1} digit2={2} handleClick={this.handleClick}/>
                    <Line digit1={2} digit2={4} handleClick={this.handleClick}/>
                    <Line digit1={3} digit2={6} handleClick={this.handleClick}/>
                    <Line digit1={4} digit2={8} handleClick={this.handleClick}/>
                    <Line digit1={5} digit2={10} handleClick={this.handleClick}/>
                    <Line digit1={6} digit2={12} handleClick={this.handleClick}/>
                </div>
                <div>
                    <Output x={this.state.clicked}/>
                </div>
            </div>
        );
    }
}

export default App;