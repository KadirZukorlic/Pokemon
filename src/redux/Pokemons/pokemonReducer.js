import pokemonTypes from './pokemonTypes';

const INITIAL_STATE = {
    pokemonList: []
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case(pokemonTypes.SET_POKEMONS): 
    return {
        ...state,
        pokemonList: action.payload
    }
    default:
      return state;
  }
};

export default pokemonReducer;
