/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    loginData: ''
}

export const UtilityReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= LOGIN ===================
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};