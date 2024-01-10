import React, {useState} from "react";
import AdultStuffBox from "./AdultStuffBox";

const AdultStuff = () => {

    const [age, setAge] = useState(0);

    const AdultCheckHandler = (e) => { 
        setAge(e.target.value);
    }

    return (
        <>
        <form>
            <input type='number' value={age} onChange={AdultCheckHandler}/>
        </form>
        <AdultStuffBox age={age}/>
        </>


    )
}

export default AdultStuff;