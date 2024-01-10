import React from "react";

const AdultStuffBox = (props) => {
    console.log("AdultStuffBox", props)
    const {age} = props;
    
    const showInfo = (age) => {
        if(age >= 18){
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
        <p>I N F O : </p>
            {showInfo(age) ? "Lorem ipsum, treść dla pełnoletnich." : null}
        </div>
    )
}

export default AdultStuffBox;