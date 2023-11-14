/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const NewCustomerFormPage = () => {

    const navigation = useNavigation()
    const [fullName, setFullName] = useState('')
    const [fullNameFocus, setFullNameFocus] = useState(false)
    const [errorFullNameField, setErrorFullNameField] = useState(false)
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerEmailFocus, setCustomerEmailFocust] = useState(false)
    const [errorCustomerEmailField, setErrorCustomerEmailField] = useState(false)
    const [disableSaveButton, setDisableSaveButton] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false)
    const [errorPhoneNumberField, setErrorPhoneNumberField] = useState(false)

    const postCustomer = () => {

    }

    useEffect(() => {
        if(fullName !== '' && customerEmail !== '' && phoneNumber !== '' && !errorFullNameField && !errorCustomerEmailField && !errorPhoneNumberField) {
            setDisableSaveButton(false)
        } else setDisableSaveButton(true)
    }, [fullName, customerEmail, phoneNumber, errorCustomerEmailField, errorFullNameField, errorPhoneNumberField])

    useEffect(() => {
        const regexFullName = /^(?!\s+$)[a-zA-Z\s]+$/
        if(regexFullName.test(fullName)) setErrorFullNameField(false)
        else setErrorFullNameField(true)
    }, [fullName])

    useEffect(() => {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(regexEmail.test(customerEmail)) setErrorCustomerEmailField(false)
        else setErrorCustomerEmailField(true)
    }, [customerEmail])

    useEffect(() => {
        const regexNumberPlus = /^[0-9+]+$/
        if(regexNumberPlus.test(phoneNumber)) setErrorPhoneNumberField(false)
        else setErrorPhoneNumberField(true)
    }, [phoneNumber])

    return (
        <View style={{ flex: 1, backgroundColor: '#505383' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Add New Customer</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#F1F2FE', marginTop: 35, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!fullNameFocus) ? '#000' : (!errorFullNameField || fullName === '') ? '#505383' : '#E93939', fontSize: (!fullNameFocus) ? 12 : 14 }}>
                            Full Name
                        </Text>
                        <TextInput
                            placeholder='Input your full name'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!fullNameFocus) ? '#000' : (!errorFullNameField || fullName === '') ? '#505383' : '#E93939', color: (!errorFullNameField || fullName === '') ? '#505383' : '#E93939' }}
                            onChangeText={(text) => {
                                setFullName(text)
                            }}
                            onEndEditing={() => {
                                setFullNameFocus(false)
                            }}
                            onFocus={() => {
                                setFullNameFocus(true)
                            }}
                            value={fullName}
                        />
                        {(errorFullNameField && fullName != '') 
                            ? <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#E93939', marginTop: 5, marginLeft: 10 }}>
                                This field can only contains alphabets!
                            </Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!customerEmailFocus) ? '#000' : (!errorCustomerEmailField || customerEmail === '') ? '#505383' : '#E93939', fontSize: (!customerEmailFocus) ? 12 : 14 }}>
                            Email
                        </Text>
                        <TextInput
                            placeholder='Input your email'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!customerEmailFocus) ? '#000' : (!errorCustomerEmailField || customerEmail === '') ? '#505383' : '#E93939', color: (!errorCustomerEmailField || customerEmail === '') ? '#505383' : '#E93939' }}
                            onChangeText={(text) => {
                                setCustomerEmail(text)
                            }}
                            onEndEditing={() => {
                                setCustomerEmailFocust(false)
                            }}
                            onFocus={() => {
                                setCustomerEmailFocust(true)
                            }}
                            value={customerEmail}
                            keyboardType='email-address'
                        />
                        {(errorCustomerEmailField && customerEmail != '') 
                            ? <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#E93939', marginTop: 5, marginLeft: 10 }}>
                                This field should be in email format!
                            </Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!phoneNumberFocus) ? '#000' : (!errorPhoneNumberField || phoneNumber === '') ? '#505383' : '#E93939', fontSize: (!phoneNumberFocus) ? 12 : 14 }}>
                            Phone Number
                        </Text>
                        <TextInput
                            placeholder='Input phone number'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!phoneNumberFocus) ? '#000' : (!errorPhoneNumberField || phoneNumber === '') ? '#505383' : '#E93939', color: (!errorPhoneNumberField || phoneNumber === '') ? '#505383' : '#E93939' }}
                            onChangeText={(text) => {
                                setPhoneNumber(text)
                            }}
                            onEndEditing={() => {
                                setPhoneNumberFocus(false)
                            }}
                            onFocus={() => {
                                setPhoneNumberFocus(true)
                            }}
                            value={phoneNumber}
                            keyboardType='phone-pad'
                        />
                        {(errorPhoneNumberField && phoneNumber != '') 
                            ? <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#E93939', marginTop: 5, marginLeft: 10 }}>
                                {`This field should be in phone number format (ex: 081234567890 / +6281234567890)!`}
                            </Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 25 }} >
                        <TouchableOpacity onPress={() => postCustomer()} disabled={disableSaveButton} style={{ backgroundColor: (disableSaveButton) ? '#CACEDD' : '#505384', padding: 10, paddingHorizontal: 40, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <MaterialIcons name='save-as' size={24} color={'#FFF'} style={{ marginRight: 5 }} />
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NewCustomerFormPage