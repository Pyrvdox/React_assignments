import React, {useState} from "react";

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);
    
    return [
        value, {
            value,
            onChange: (e)=>{
                setValue(Number(e.target.value));
            }
        }
    ]
}

export default useInput;