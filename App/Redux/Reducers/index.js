/* eslint-disable prettier/prettier */
import {combineReducers} from "redux"
import { UtilityReducer } from "./Utility"
import { MeatReducer } from "./Meats"
import { CustomerReducer } from "./Customers";

const rootReducer = combineReducers({
    utility: UtilityReducer,
    meat: MeatReducer,
    customer: CustomerReducer
});


export default rootReducer;