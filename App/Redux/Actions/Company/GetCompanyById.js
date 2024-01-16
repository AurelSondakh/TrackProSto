/* eslint-disable prettier/prettier */
import { URL_COMPANY } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const GetCompanyById = (loginToken, companyId) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.GET_COMPANY_BY_ID_REQUEST
       })
       fetch(`${URL_COMPANY}/${companyId}`, {
           method: "GET",
           redirect: "follow",
           headers: {
            Authorization: `Bearer ${loginToken}`
           }
       }).then(response => {
           return response.json()
       }).then(data => {
           console.log("GET COMPANY BY ID: ", data);
           if(data.statuscode === 400) {
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.GET_COMPANY_BY_ID_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.GET_COMPANY_BY_ID_FAILURE,
               error: data.message,
           })
       })
   }
}