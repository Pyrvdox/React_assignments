import React from "react";
import useInput from "./hooks/useInput";

const InteractiveDiv = () => { 

    const [input, setInput] = useInput()

    const someDivStyle = {
        height: 100,
        width: input + "px",
        backgroundColor: "red"
    }

    return (
        <div>
            <input type="number" {...setInput}/>
            <div style={someDivStyle}></div>
        </div> 
    )
}

export default InteractiveDiv;