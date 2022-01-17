import searchTypes from './searchTypes';

const INITIAL_STATE = {
    searchTerm: ''
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case(searchTypes.SEARCH_INPUT): 
    return {
        ...state,
        searchTerm: action.payload
    }
    default:
      return state;
  }
};

export default searchReducer;
