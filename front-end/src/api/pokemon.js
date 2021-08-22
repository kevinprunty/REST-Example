const axios = require('axios');

// Constants
const AMOUNT_OF_POKEMON = 898;
const BASE_URL = 'https://pokeapi.co/api/v2'

// Util functions

//Get a random Pokemon number between 1 and AMOUNT_OF_POKEMON
const randomPokemon = () => {
    const random = Math.floor(Math.random() * (AMOUNT_OF_POKEMON-1));
    return random + 1; // Start with 1
}



// API
const getRandomPokemon = () => {
    return axios.get(`${BASE_URL}/pokemon/${randomPokemon()}/`);
}

module.exports = {
    getRandomPokemon,
}