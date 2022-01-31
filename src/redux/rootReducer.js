import { combineReducers } from "redux";

import searchReducer from "./Search/searchReducer";
import pokemonReducer from "./Pokemons/pokemonReducer";

export const rootReducer = combineReducers({
    search: searchReducer,
    pokemonList: pokemonReducer
});



export default rootReducer;