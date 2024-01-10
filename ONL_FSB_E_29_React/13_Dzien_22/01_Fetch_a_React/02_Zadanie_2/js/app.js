import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {

    const [pokemons, setPokemons] = useState(false);

    const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon').then((res) => {
            if(res.ok){
            const resParsed = res.json();
            return resParsed;}
        })
        .then((data) => setPokemons(data));
    }

    useEffect(() => {
        fetchPokemons()

    }, []);

    return <ul>{pokemons.results ? pokemons.results.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>) : null}</ul>   
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
