/* eslint-disable prettier/prettier */
import { URL_MEATS } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const DeleteMeats = (loginToken, meatId) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.DELETE_MEATS_REQUEST
       })
       fetch(`${URL_MEATS}/${meatId}`, {
        method: "DELETE",
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${loginToken}`
        },
        redirect: "follow"
    }).then(response => {
           return response.json()
       }).then(data => {
           console.log("DELETE_MEATS: ", data);
           if(data.statuscode === 400) {
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.DELETE_MEATS_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.DELETE_MEATS_FAILURE,
               error: data.message,
           })
       })
   }
}