/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    loginData: '',
    loginSpinner: false
}

export const UtilityReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= LOGIN ===================
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginSpinner: false
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginSpinner: true,
        loginData: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginSpinner: false,
        error: action.error,
      };
    default:
      return state;
  }
};