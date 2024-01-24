/* eslint-disable prettier/prettier */
import { URL_CUSTOMERS } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const AddCustomers = (loginToken, data) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.ADD_CUSTOMERS_REQUEST
       })
       fetch(URL_CUSTOMERS, {
        method: "POST",
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${loginToken}`
        },
        body: JSON.stringify(data),
        redirect: "follow"
    }).then(response => {
           return response.json()
       }).then(data => {
           console.log("ADD_CUSTOMERS: ", data);
           if(data.statuscode === 400) {
                dispatch({
                    type: ActionTypes.ADD_CUSTOMERS_SUCCESS,
                    payload: data
                })
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.ADD_CUSTOMERS_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.ADD_CUSTOMERS_FAILURE,
               error: data.message,
           })
       })
   }
}