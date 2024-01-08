/* eslint-disable prettier/prettier */
import {combineReducers} from "redux"
import { UtilityReducer } from "./Utility"

const rootReducer = combineReducers({
    utility: UtilityReducer
});


export default rootReducer;