import { combineReducers } from "redux";
import LandingReducers from "./landing.reducer";

const createReducer = asyncReducers=>combineReducers({...asyncReducers,LandingReducers});

export default createReducer


