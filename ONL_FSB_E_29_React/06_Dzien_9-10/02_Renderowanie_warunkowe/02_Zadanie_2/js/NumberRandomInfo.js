import React, {useState} from "react";
const NumberRandomInfo = () => {

    const [randomNumber, setRandomNumber] = useState(1)

    const interval = setInterval(()=>{
            let randomNum = Math.ceil(Math.random() * 5);
            setRandomNumber(randomNum)
    },1000)


    return (
        <>
            <h1>{randomNumber} : {randomNumber >= 3 ? "Wiekszy lub równy 3" : "Mniejszy niż 3"}</h1>
        </>
    )
}

export default NumberRandomInfo;