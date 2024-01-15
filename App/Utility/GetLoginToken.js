/* eslint-disable prettier/prettier */
// GetLoginToken.js
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const GetLoginToken = async () => {
  try {
    const loginToken = await AsyncStorage.getItem('loginToken');
    return loginToken;
  } catch (error) {
    console.log('getLoginTokenError: ', error);
    throw error; // Rethrow the error to handle it in the calling code if needed
  }
};

export default GetLoginToken;