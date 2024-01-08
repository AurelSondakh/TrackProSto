/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useContext } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ActionUtility } from '../../Redux/Actions/Utility'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {

    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [usernameFocus, setUsernameFocus] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordFocus, setPasswordFocus] = useState(false)

    //Redux
    const {
        loginData
    } = useSelector((state) => state.utility);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          StatusBar.setBackgroundColor('#505383');
          StatusBar.setBarStyle('light-content');
        });
        return unsubscribe;
    }, [navigation]);

    const validateLoginCredential = () => {
        let loginCredential = {
            username: username,
            password: password
        }
        dispatch(
            ActionUtility.LoginTP(
                loginCredential
            ),
        );
        if(loginData?.statuscode === 200) {
            AsyncStorage.setItem('loginToken', loginData?.data)
            navigation.reset({
                index: 0,
                routes: [{ name: 'BottomTabNavigator' }]
            })
        }
    }

    return (
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/loginIllustration.png')} style={{ width: 250, height: 250, alignSelf: 'center', marginBottom: 30, marginTop: -80 }} />
            <View style={{ width: 300 }}>
                <View style={{ marginTop: 0 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: (!usernameFocus) ? '#000' : '#505383', fontSize: (!usernameFocus) ? 12 : 14 }}>
                        Username
                    </Text>
                    <TextInput
                        placeholder='Input username'
                        style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!usernameFocus) ? '#000' : '#505383'  }}
                        onChangeText={(text) => {
                            setUsername(text)
                        }}
                        onEndEditing={() => {
                            setUsernameFocus(false)
                        }}
                        onFocus={() => {
                            setUsernameFocus(true)
                        }}
                        value={username}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: (!passwordFocus) ? '#000' : '#505383', fontSize: (!passwordFocus) ? 12 : 14 }}>
                        Password
                    </Text>
                    <TextInput
                        placeholder='Input password'
                        style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!passwordFocus) ? '#000' : '#505383'  }}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        onEndEditing={() => {
                            setPasswordFocus(false)
                        }}
                        onFocus={() => {
                            setPasswordFocus(true)
                        }}
                        value={password}
                    />
                </View>
                <TouchableOpacity onPress={() => validateLoginCredential()} style={{ padding: 10, borderWidth: 1, backgroundColor: '#505383', borderRadius: 50, marginTop: 30 }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 14, textAlign: 'center' }}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage