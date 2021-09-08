/* To make the src index.js file more lean I have created a new index.js 
in the reducers file to consolidate reducer files and import in main src index.js*/
import counterReducer from "./counter";
import loggedReducer from "./counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;