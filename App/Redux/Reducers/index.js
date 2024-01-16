/* eslint-disable prettier/prettier */
import {combineReducers} from "redux"
import { UtilityReducer } from "./Utility"
import { MeatReducer } from "./Meats"
import { CustomerReducer } from "./Customers";
import { CompanyReducer } from "./Company";

const rootReducer = combineReducers({
    utility: UtilityReducer,
    meat: MeatReducer,
    customer: CustomerReducer,
    company: CompanyReducer
});


export default rootReducer;