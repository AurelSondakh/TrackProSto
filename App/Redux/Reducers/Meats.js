/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    meatList: [],
    addMeatResponse: [],
    meatSpinner: false
}

export const MeatReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= GET_ALL_MEAT ===================
    case actionTypes.GET_ALL_MEATS_REQUEST:
      return {
        ...state,
        meatSpinner: true
      };
    case actionTypes.GET_ALL_MEATS_SUCCESS:
      return {
        ...state,
        meatList: action.payload,
        meatSpinner: false
      };
    case actionTypes.GET_ALL_MEATS_FAILURE:
      return {
        ...state,
        error: action.error,
        meatSpinner: false
      };
    case actionTypes.ADD_MEATS_REQUEST:
      return {
        ...state,
        meatSpinner: true
      };
    case actionTypes.ADD_MEATS_SUCCESS:
      return {
        ...state,
        addMeatResponse: action.payload,
        meatSpinner: false
      };
    case actionTypes.ADD_MEATS_FAILURE:
      return {
        ...state,
        error: action.error,
        meatSpinner: false
      };
    case actionTypes.DELETE_MEATS_REQUEST:
      return {
        ...state,
        meatSpinner: true
      };
    case actionTypes.DELETE_MEATS_SUCCESS:
      return {
        ...state,
        meatSpinner: false
      };
    case actionTypes.DELETE_MEATS_FAILURE:
      return {
        ...state,
        error: action.error,
        meatSpinner: false
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