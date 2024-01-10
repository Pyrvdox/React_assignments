import React, {useState} from "react";

const UpperLower = () => {
    const [jakiśTamNapis, setNapis] = useState("hdsadsadasdsaad321321321")



    const UpperLowerChanger = () => {
        setNapis((prevState) =>
            prevState.toUpperCase() === prevState ? prevState.toLowerCase() : prevState.toUpperCase()
        //  -----to sie dzieje-----
        // ----------------to jest if-------------
        //                                        ---to jesli if jest tru---
        //                                                                    ---jesli if jest false ---
        );
    };

    return (
        <>
            <button onClick={UpperLowerChanger}>Switch</button>
            <div>{jakiśTamNapis}</div>
        </>
    )
}

export default UpperLower;