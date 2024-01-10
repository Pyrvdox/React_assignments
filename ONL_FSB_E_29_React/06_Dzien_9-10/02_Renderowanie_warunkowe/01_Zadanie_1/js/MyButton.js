import React, {useState} from "react";

const MyButton = ( ) => {
    const [daButton, setDaButton] = useState(false)

    const buttonTextSwitch = () => {

        setDaButton((prevState) =>
            prevState === true ? false : true
        )
    }

    return (
        <>
            <button onClick={buttonTextSwitch}>{daButton === true ? "NIE" : "TAK"}</button>
        </>
    )
}

export default MyButton;