import React from "react";


const Counter = () => {

    const basicCounterValue = 10;

    const [counter, setCounter] = React.useState(basicCounterValue)

    const handleValueIncreaseButton = () => {
        setCounter((prevState) => prevState +1)
    }
    const handleValueDecreaseButton = () => {
        setCounter((prevState) => prevState -1)
    }
    const handleValueResetButton = () => {
        setCounter(basicCounterValue)
    }

    return (
        <>
            <h2>Liczba kliknięć {counter}</h2>
            <button onClick={handleValueIncreaseButton}>+</button>
            <button onClick={handleValueDecreaseButton}>-</button>
            <button onClick={handleValueResetButton}>Reset</button>
        </>

    )
}

export default Counter;