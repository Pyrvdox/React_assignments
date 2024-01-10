import React from "react";

class Box extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        backgroundColor: 'green',
        width: '500px',
        height: '200px'
    }
    handleChangeStyle(color, width, height) {
        this.setState(prevState => {
            return {
                backgroundColor: color,
                width: width,
                height: height
            }
        })
    }


    render() {
        return(
            <React.Fragment>
                <div style={this.state}></div>
                <button onClick={() => this.handleChangeStyle('orange','200px', '300px') }>Orange</button>
                <button onClick={() => this.handleChangeStyle('blue', '100px', '700px')}>Blue</button>
                <button onClick={() => this.handleChangeStyle('green', '500px', '200px')}>Green</button>
            </React.Fragment>
        )
    }


}
export default Box