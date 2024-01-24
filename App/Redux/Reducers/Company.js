/* eslint-disable prettier/prettier */
import * as actionTypes from '../Constants/Types'

const initialState = {
    companyList: [],
    companyDetail: [],
    companySpinner: false
}

export const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    // ============= GET_ALL_COMPANY===================
    case actionTypes.GET_ALL_COMPANY_REQUEST:
      return {
        ...state,
        companySpinner: true
      };
    case actionTypes.GET_ALL_COMPANY_SUCCESS:
      return {
        ...state,
        companyList: action.payload,
        companySpinner: false
      };
    case actionTypes.GET_ALL_COMPANY_FAILURE:
      return {
        ...state,
        error: action.error,
        companySpinner: false
      };
    // ============= GET_COMPANY_BY_ID ===================
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