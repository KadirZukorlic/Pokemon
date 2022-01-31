import pokemonTypes from './pokemonTypes';

export const getPokemons = (pokemonData) => ({
  type: pokemonTypes.GET_POKEMONS,
  payload: pokemonData,
});
