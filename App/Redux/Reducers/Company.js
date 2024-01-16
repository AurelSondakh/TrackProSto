/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    companyDetail: [],
    companySpinner: false
}

export const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= GET_ALL_CUSTOMER ===================
    case actionTypes.GET_COMPANY_BY_ID_REQUEST:
      return {
        ...state,
        companySpinner: true
      };
    case actionTypes.GET_COMPANY_BY_ID_SUCCESS:
      return {
        ...state,
        companyDetail: action.payload,
        companySpinner: false
      };
    case actionTypes.GET_COMPANY_BY_ID_FAILURE:
      return {
        ...state,
        error: action.error,
        companySpinner: false
      };
    default:
      return state;
  }
};