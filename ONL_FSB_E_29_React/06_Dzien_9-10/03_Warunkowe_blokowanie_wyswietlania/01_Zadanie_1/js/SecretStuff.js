import React from "react";

const SecretStuff = (props) => {

    const {password, correctPassword, secret} = props

    let infoCheck    
    password === correctPassword ? infoCheck = true : infoCheck = false
    
    if(infoCheck === true){
        return (
            <div>
                {secret}
            </div>
        )
    } else {
        return null
    }
}

export default SecretStuff;