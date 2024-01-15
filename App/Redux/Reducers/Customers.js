/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    customerList: [],
    customerSpinner: false
}

export const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= GET_ALL_CUSTOMER ===================
    case actionTypes.GET_ALL_CUSTOMERS_REQUEST:
      return {
        ...state,
        customerSpinner: true
      };
    case actionTypes.GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customerList: action.payload,
        customerSpinner: false
      };
    case actionTypes.GET_ALL_CUSTOMERS_FAILURE:
      return {
        ...state,
        error: action.error,
        customerSpinner: false
      };
    default:
      return state;
  }
};