import React from "react";

class Line extends React.Component {
    handler = (e) => {
        const { handleClick } = this.props;
        handleClick(e.target.value)
    }

    render() {
        const { digit1 } = this.props;
        const { digit2 } = this.props;
        return (
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <button type="button" value={digit1} className="btn btn-outline-danger btn-sm" onClick={this.handler} style={{width: "150px", margin: "8px"}}>{digit1}</button>
                    </div>
                    <div className="col">
                        <button type="button" value={digit2} className="btn btn-outline-success btn-sm" onClick={this.handler} style={{width: "150px", margin: "8px"}}>{digit2}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Line;