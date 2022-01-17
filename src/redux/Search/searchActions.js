import searchTypes from "./searchTypes";

export const searchTerm = (searchTerm) => ({
    type: searchTypes.SEARCH_INPUT,
    payload: searchTerm
})