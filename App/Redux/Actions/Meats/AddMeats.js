/* eslint-disable prettier/prettier */
import { URL_MEATS } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const AddMeats = (loginToken, data) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.ADD_MEATS_REQUEST
       })
       fetch(URL_MEATS, {
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
           console.log("ADD_MEATS: ", data);
           if(data.statuscode === 400) {
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.ADD_MEATS_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.ADD_MEATS_FAILURE,
               error: data.message,
           })
       })
   }
}