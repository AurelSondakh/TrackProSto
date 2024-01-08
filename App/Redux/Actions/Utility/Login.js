/* eslint-disable prettier/prettier */
import { URL_LOGIN } from "../../../Configs/GlobalUrl"
import * as ActionTypes from '../../Constants/Types'

export const LoginTP = (data) => {
    return dispatch => {
       dispatch({
           type: ActionTypes.LOGIN_REQUEST
       })
       fetch(URL_LOGIN, {
           method: "POST",
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data),
           redirect: "follow"
       }).then(response => {
           return response.json()
       }).then(data => {
           console.log("LOGIN: ", data);
           if(data.status === 400) {
               throw new Error("Bad Request")
           }
           dispatch({
               type: ActionTypes.LOGIN_SUCCESS,
               payload: data
           })
       }).catch(message => {
           console.log("ERROR", message)
           dispatch({
               type: ActionTypes.LOGIN_FAILURE,
               error: message,
           })
       })
   }
}