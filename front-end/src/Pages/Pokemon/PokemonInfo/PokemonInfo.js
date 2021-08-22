import React from 'react'

function PokemonInfo( { pokemon } ) {
    return (
        <div className="pokemon-information">
                <span className="pokemon-name">
                    Pokemon { pokemon.id }: { pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }
                </span>
                <img className="pokemon-sprite" src={pokemon.sprites.front_default} alt = {pokemon.name} />
        </div>
    )
}

export default PokemonInfo
