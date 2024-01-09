/* eslint-disable prettier/prettier */
import { URL_GET_ALL_MEATS } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const GetAllMeats = (loginToken, pagination) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.GET_ALL_MEATS_REQUEST
       })
       fetch(`${URL_GET_ALL_MEATS}?page=${pagination}`, {
           method: "GET",
           redirect: "follow",
           headers: {
            Authorization: `Bearer ${loginToken}`
           }
       }).then(response => {
           return response.json()
       }).then(data => {
           console.log("GET_ALL_MEATS: ", data);
           if(data.status === 400) {
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.GET_ALL_MEATS_SUCCESS,
               payload: data
           })
       }).catch(message => {
           console.log("ERROR", message)
           dispatch({
               type: ActionTypes.GET_ALL_MEATS_FAILURE,
               error: message,
           })
       })
   }
}