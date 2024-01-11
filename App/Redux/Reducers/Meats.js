/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    meatList: [],
    addMeatResponse: [],
    loadingGetMeatList: false,
    loadingAddMeat: false
}

export const MeatReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= GET_ALL_MEAT ===================
    case actionTypes.GET_ALL_MEATS_REQUEST:
      return {
        ...state,
        loadingGetMeatList: true
      };
    case actionTypes.GET_ALL_MEATS_SUCCESS:
      return {
        ...state,
        meatList: action.payload,
        loadingGetMeatList: false
      };
    case actionTypes.GET_ALL_MEATS_FAILURE:
      return {
        ...state,
        error: action.error,
        loadingGetMeatList: false
      };
    case actionTypes.ADD_MEATS_REQUEST:
      return {
        ...state,
        loadingAddMeat: true
      };
    case actionTypes.ADD_MEATS_SUCCESS:
      return {
        ...state,
        addMeatResponse: action.payload,
        loadingAddMeat: false
      };
    case actionTypes.ADD_MEATS_FAILURE:
      return {
        ...state,
        error: action.error,
        loadingAddMeat: false
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