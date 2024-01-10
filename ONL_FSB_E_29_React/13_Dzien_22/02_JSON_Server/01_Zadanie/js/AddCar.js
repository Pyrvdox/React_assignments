import React, { useEffect, useState } from "react";

const AddCar = () => {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [hp, setHp] = useState("");

    const inputHandler = (e, inputType) => {
        const inputValue = e.target.value

        switch(inputType){
            case 'name': setName(inputValue) ;
            break
            case 'brand': setBrand(inputValue);
            break
            case 'type': setType(inputValue);
            break
            case 'hp': setHp(inputValue);
            break
        }   

    }

    const submitHandler = (e) => {
        
        e.preventDefault();
        console.log("Nasze e to jest:" + e + e.target.name)
        const formInfo = {
            "name": name,
            "brand": brand,
            "engine": {
              "type": type,
              "hp": hp
            }
          }
        console.log(formInfo)  

        addNewCar(URL, formInfo);

        setName("")
        setBrand("")
        setType("")
        setHp("")

    }
    const URL = "http://localhost:3000/cars"

    const addNewCar = async (url, forminfo) => {
        try {
            const resp = await fetch(`${url}`, {
                method: 'POST',
                body: JSON.stringify(forminfo),
                headers: {
                  "Content-Type": "application/json"
                }
            });
            if (resp.ok) {
                console.log("Działa");
            } else {
                throw new Error ("Błąd podczas dodawania");
            } 
        } catch (error) {
            console.error(error.message);
        }

    };


    return (
        <>
            <form onSubmit={submitHandler}>
            <label>
                Nazwa
            </label>
                <input type="text" onChange={(e, inputType) => inputHandler(e,'name')} value={name}></input>
            <label>
                Marka
            </label>
                <input type="text" onChange={(e, inputType) => inputHandler(e,'brand')} value={brand}></input>
            <label>
                Typ
            </label>
                <input type="text" onChange={(e, inputType) => inputHandler(e,'type')} value={type}></input>
            <label>
                Moc
            </label>
                <input type="text" onChange={(e, inputType) => inputHandler(e,'hp')} value={hp}></input>
                <input type='submit' value="AddCar" ></input>
            </form>

        </>
    )
}

export default AddCar;