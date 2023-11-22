/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const CreditPage = () => {

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          StatusBar.setBackgroundColor('#505383');
          StatusBar.setBarStyle('light-content')
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View>
            <Text>
                WELCOME TO CREDIT PAGE
            </Text>
        </View>
    )
}

export default CreditPage