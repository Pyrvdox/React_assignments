import React, {useState} from "react";

const Bulb = () => {
    const [bulbState, setBulbState] = useState(false)

    const bulbSwitchHandler = () => {
        
        setBulbState((prevState) => 
            prevState === true ? false : true
            
        )
        
    }

    const style = {
        width: 100,
        height:100,
        backgroundColor: bulbState ? "yellow" : "grey"
    }
    return (     
        <>
            <div style={style}></div>
            <button onClick={() => bulbSwitchHandler()}>{bulbState ? "ON" : "OFF"}</button>
            
        </>
    )
}

export default Bulb;