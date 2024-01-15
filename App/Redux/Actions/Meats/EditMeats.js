/* eslint-disable prettier/prettier */
import { URL_MEATS } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const EditMeats = (loginToken, meatId, data) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.EDIT_MEATS_REQUEST
       })
       fetch(`${URL_MEATS}/${meatId}`, {
        method: "PUT",
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
           console.log("EDIT_MEATS: ", data);
           if(data.statuscode === 400) {
                dispatch({
                    type: ActionTypes.EDIT_MEATS_SUCCESS,
                    payload: data
                })
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.EDIT_MEATS_SUCCESS,
               payload: data
           })
       }).catch(data => {
           console.log("ERROR", data.message)
           dispatch({
               type: ActionTypes.EDIT_MEATS_FAILURE,
               error: data.message,
           })
       })
   }
}