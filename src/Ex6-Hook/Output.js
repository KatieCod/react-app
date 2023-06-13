import React from "react";

class Output extends React.Component {
    render() {
        return (
            <div className="container d-flex justify-content-center" style={{backgroundColor: "beige", height: "70px"}}>
                <p style={{position: "relative", top: "50%", transform: "translateY(-50%)"}}>You've clicked: {this.props.x}</p>
            </div>
        )
    }
}

export default Output;