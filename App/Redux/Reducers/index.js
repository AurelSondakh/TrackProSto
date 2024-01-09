/* eslint-disable prettier/prettier */
import {combineReducers} from "redux"
import { UtilityReducer } from "./Utility"
import { MeatReducer } from "./Meats";

const rootReducer = combineReducers({
    utility: UtilityReducer,
    meat: MeatReducer
});


export default rootReducer;