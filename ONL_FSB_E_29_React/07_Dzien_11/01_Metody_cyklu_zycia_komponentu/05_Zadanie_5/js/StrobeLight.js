import React, { Component } from "react";

class StrobeLight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentColor: "grey"
        };
    }

    componentDidMount() {
        this.intervalDiv = setInterval(() => {
            this.setState(prevState => ({
                currentColor: prevState.currentColor === this.props.color ? "grey" : this.props.color
            }));
        }, this.props.frequency);
    }

    componentWillUnmount() {
        clearInterval(this.intervalDiv);
    }

    render() {
        const divStyle = {
            width: 50,
            height: 50,
            backgroundColor: this.state.currentColor
        };
        return <div style={divStyle} />;
    }
}

export default StrobeLight;