/* eslint-disable prettier/prettier */
// GetLoginToken.js
import React from 'react';
import jwtDecode from "jwt-decode";
import GetLoginToken from './GetLoginToken';

const GetUserRole = async () => {
  try {
    const loginToken = await GetLoginToken()
    const decodedToken = jwtDecode(loginToken)
    return decodedToken.role
  } catch (error) {
    console.log('getLoginTokenError: ', error);
    throw error; // Rethrow the error to handle it in the calling code if needed
  }
};

export default GetUserRole;