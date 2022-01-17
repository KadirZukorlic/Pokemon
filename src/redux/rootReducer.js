import { combineReducers } from "redux";
import searchReducer from "./Search/searchReducer";

export const rootReducer = combineReducers({
    search: searchReducer
})

export default rootReducer;