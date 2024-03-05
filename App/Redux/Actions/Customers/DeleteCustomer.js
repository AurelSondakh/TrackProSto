/* eslint-disable prettier/prettier */
import { URL_CUSTOMERS } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const DeleteCustomers = (loginToken, customerId) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.DELETE_CUSTOMERS_REQUEST
       })
       fetch(`${URL_CUSTOMERS}/${customerId}`, {
        method: "DELETE",
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${loginToken}`
        },
        redirect: "follow"
    }).then(response => {
           return response.json()
       }).then(data => {
           console.log("DELETE_CUSTOMERS: ", data);
           if(data.statuscode === 400) {
                dispatch({
                    type: ActionTypes.DELETE_CUSTOMERS_FAILURE,
                    payload: data
                })
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.DELETE_CUSTOMERS_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.DELETE_CUSTOMERS_FAILURE,
               error: data.message,
           })
       })
   }
}