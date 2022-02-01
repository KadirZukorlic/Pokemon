import pokemonTypes from './pokemonTypes';

export const setPokemons = (pokemonData) => ({
  type: pokemonTypes.SET_POKEMONS,
  payload: pokemonData,
});
