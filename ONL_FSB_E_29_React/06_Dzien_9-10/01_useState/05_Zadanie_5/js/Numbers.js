import React, {useState} from "react";

const Numbers = () => {
    const basicListOfNumbers =[54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]

    const [listOfNumbers, setNumbers] = useState(basicListOfNumbers);

    const renderNumberList = () => {

        const testList = [];
        for(let listNumber = 0; listNumber < listOfNumbers.length; listNumber ++) {
            let delistNumber = listOfNumbers[listNumber]
            testList.push(<li>{delistNumber}</li>);
        }
        return testList;
    }

    const showOnlyParzyste = () => {
        setNumbers((prevState) => 
            prevState.filter(singlePart => singlePart % 2 === 0)
        )
    }

    const showOnlyNieParzyste = () => {
        setNumbers((prevState) => 
            prevState.filter(singlePart => singlePart % 2 != 0)
        )
    }

    const showAll = () => {
        setNumbers((prevState) => 
            prevState = basicListOfNumbers)
            
    }

    return (
        <>
            <button onClick={showOnlyParzyste}>Poka parzyste</button>
            <button onClick={showOnlyNieParzyste}>Poka nie parzyste</button>
            <button onClick={showAll}>Poka wszysko</button>
            <ul>
                {renderNumberList()}
            </ul>
        </>
    )


}

export default Numbers