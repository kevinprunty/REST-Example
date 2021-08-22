import './Pokemon.css';
import { useState, useEffect } from 'react';
// API
import { getRandomPokemon } from '../../api/pokemon';

import PokemonInfo from './PokemonInfo/PokemonInfo';

function Pokemon() {
    const [pokemon, setPokemon] = useState();

    const getPokemon = () => {
        getRandomPokemon()
        .then((res)=>{
            setPokemon(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return (
        <div className="Pokemon">
            <p className="explanation">This app displays a random Pokemon. Click the button for a new Pokemon.</p>
            { pokemon ? <PokemonInfo pokemon={pokemon} /> : "NO POKEMON"}
            <button type="button" onClick={ getPokemon }>New Pokemon</button>
        </div>
    )
}

export default Pokemon
