/* eslint-disable prettier/prettier */
import { URL_CUSTOMERS } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const GetAllCustomer = (loginToken) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.GET_ALL_CUSTOMERS_REQUEST
       })
       fetch(`${URL_CUSTOMERS}`, {
           method: "GET",
           redirect: "follow",
           headers: {
            Authorization: `Bearer ${loginToken}`
           }
       }).then(response => {
           return response.json()
       }).then(data => {
           console.log("GET_ALL_CUSTOMERS: ", data);
           if(data.statuscode === 400) {
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.GET_ALL_CUSTOMERS_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.GET_ALL_CUSTOMERS_FAILURE,
               error: data.message,
           })
       })
   }
}