/* eslint-disable prettier/prettier */
import { URL_COMPANY } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const GetAllCompany = (loginToken) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.GET_ALL_COMPANY_REQUEST
       })
       fetch(`${URL_COMPANY}`, {
           method: "GET",
           redirect: "follow",
           headers: {
            Authorization: `Bearer ${loginToken}`
           }
       }).then(response => {
           return response.json()
       }).then(data => {
           console.log("GET_ALL_COMPANY: ", data);
           if(data.statuscode === 400) {
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.GET_ALL_COMPANY_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.GET_ALL_COMPANY_FAILURE,
               error: data.message,
           })
       })
   }
}