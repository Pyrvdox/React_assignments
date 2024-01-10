import React, {useState} from "react";

const Box = () => {
    const [boxColor, setBoxColor] = useState("grey")
    const [boxW, setBoxW] = useState(100)
    const [boxH, setBoxH] = useState(100)

    const boxColorChangeHandler = (color,w,h) => {
        setBoxColor((prevState) =>
            prevState = color)
        setBoxW((prevState) =>
            prevState = w)  
        setBoxH((prevState) =>
            prevState = h)
    }

    const style = {
        width: boxW,
        height: boxH,
        backgroundColor: boxColor
    }

    return ( 
        <>
            
            <button onClick={(color,w,h) => boxColorChangeHandler("orange",200,300)}>kolor pomarańczowy</button>
            <button onClick={(color,w,h) => boxColorChangeHandler("blue",700,100)}>kolor niebieski</button>
            <button onClick={(color,w,h) => boxColorChangeHandler("green",500,200)}>kolor zielony</button>
            <div style={style}></div>
        </>
    )
}

export default Box;