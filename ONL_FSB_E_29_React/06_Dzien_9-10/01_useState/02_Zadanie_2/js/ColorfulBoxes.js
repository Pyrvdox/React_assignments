import React, {useState} from "react";

const ColorfulBoxes = () => {
    const boxListBasicValue = [];
    
    const [boxes, setBoxes] = useState(boxListBasicValue);

    const CreateBox = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const boxStyle = {
            width: 200,
            height: 200,
            backgroundColor: "#"+randomColor
        };



        setBoxes((prevState) => [...prevState,boxStyle])
        console.log(boxes);
    };

    const BoxSpit = (boxes) => {

        return boxes.map((box, index) => 
            <div style={box} key={index}/>           
        )

    }

    return (
        <>
            <button onClick={CreateBox}>Dodaj Boxa!</button>
            {BoxSpit(boxes)}
        </>
    )

};

export default ColorfulBoxes;