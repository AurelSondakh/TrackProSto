/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    meatList: [],
    addMeatResponse: []
}

export const MeatReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= GET_ALL_MEAT ===================
    case actionTypes.GET_ALL_MEATS_REQUEST:
      return {
        ...state
      };
    case actionTypes.GET_ALL_MEATS_SUCCESS:
      return {
        ...state,
        meatList: action.payload,
      };
    case actionTypes.GET_ALL_MEATS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.ADD_MEATS_REQUEST:
      return {
        ...state
      };
    case actionTypes.ADD_MEATS_SUCCESS:
      return {
        ...state,
        addMeatResponse: action.payload,
      };
    case actionTypes.ADD_MEATS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case 'RESET_DATA_ADD_MEAT_RESPONSE':
      return {
        ...state,
        addMeatResponse: [],
      };
    default:
      return state;
  }
};