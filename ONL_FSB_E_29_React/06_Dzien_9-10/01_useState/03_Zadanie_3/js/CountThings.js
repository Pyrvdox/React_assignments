import React, {useState} from "react";

const CountThings = () => {

    const [bankInfo, setBankInfo] = useState(10000);
    const [bankAgeInfo, setBankAgeInfo] = useState(25);

    const getRich = () => {
        setBankInfo((prevState) => prevState + 1000)
    }

    const getOlder = () => {
        setBankAgeInfo((prevState) => prevState + 1)
    }
    const endThisShit = () => {
        setBankAgeInfo("Dead")
    }
    
    return(
        <div>
            <p>So much money {bankInfo}</p>
            <p>Age {bankAgeInfo}</p>
            <button onClick={getRich}>Get Rich!</button>
            <button onClick={getOlder}>Get Older T-T</button>
            <button onClick={endThisShit}>End your suffering :/</button>
        </div>
    ) 

};

export default CountThings;