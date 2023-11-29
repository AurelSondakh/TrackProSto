/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput, Modal, SafeAreaView, Image, StyleSheet } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const EditCompanyFormPage = (props) => {

    let item = props?.route?.params?.companyDetail
    const navigation = useNavigation()
    const [companyName, setCompanyName] = useState('')
    const [companyNameFocus, setCompanyNameFocus] = useState(false)
    const [errorCompanyNameField, setErrorCompanyNameField] = useState(false)
    const [companyEmail, setCompanyEmail] = useState('')
    const [companyEmailFocus, setCompanyEmailFocus] = useState(false)
    const [errorCompanyEmailField, setErrorCompanyEmailField] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false)
    const [errorPhoneNumberField, setErrorPhoneNumberField] = useState(false)
    const [companyAddress, setCompanyAddress] = useState('')
    const [companyAddressFocus, setCompanyAddressFocus] = useState(false)
    const [disableSaveButton, setDisableSaveButton] = useState(true)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showFailedModal, setShowFailedModal] = useState(false)

    const editCompany = () => {
        let data = {
            company_id: 'thisiscompanyid',
            company_name: companyName,
            address: companyAddress,
            email: companyEmail,
            phone_number: phoneNumber
        }
        console.log(`EditCompany: ${data}`)
        let response = {
            statuscode: 400,
        }

        if(response.statuscode === 200) {
            setShowSuccessModal(true)
        } else setShowFailedModal(true)
    }

    useEffect(() => {
        setCompanyName(item?.company_name)
        setCompanyEmail(item?.email)
        setPhoneNumber(item?.phone_number)
        setCompanyAddress(item?.address)
    }, [item])

    useEffect(() => {
        if(companyName !== '' && companyEmail !== '' && phoneNumber !== '' && companyAddress !== '' && !errorCompanyNameField && !errorCompanyEmailField && !errorPhoneNumberField) {
            setDisableSaveButton(false)
        } else setDisableSaveButton(true)
    }, [companyName, companyEmail, phoneNumber, companyAddress, errorCompanyNameField, errorCompanyEmailField, errorPhoneNumberField])

    useEffect(() => {
        const regexCompanyName = /^(?!\s+$)[a-zA-Z\s]+$/
        if(regexCompanyName.test(companyName)) setErrorCompanyNameField(false)
        else setErrorCompanyNameField(true)
    }, [companyName])

    useEffect(() => {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(regexEmail.test(companyEmail)) setErrorCompanyEmailField(false)
        else setErrorCompanyEmailField(true)
    }, [companyEmail])

    useEffect(() => {
        const regexNumberPlus = /^[0-9+]+$/
        if(regexNumberPlus.test(phoneNumber)) setErrorPhoneNumberField(false)
        else setErrorPhoneNumberField(true)
    }, [phoneNumber])

    const successModal = () => {
        return (
            <View style={{flex: 1 }}>
                <Modal animationType='fade' visible={showSuccessModal} transparent={true} statusBarTranslucent>
                    <SafeAreaView style={styles.modalDim}>
                        <View style={[styles.modalBG, {marginVertical: height / 3.5}]}>
                            <View style={{ alignSelf: 'center', marginTop: 40, marginHorizontal: 15 }}>
                                <Image source={require('../../../assets/correctModal.png')} style={{ width: 128, height: 128, alignSelf: 'center' }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center' }}>Company has been added successfully</Text>
                                <TouchableOpacity onPress={() => {setShowSuccessModal(false); navigation.goBack()}} style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#505383', borderRadius: 10, marginTop: 15 }}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#FFF', alignSelf: 'center' }}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>
        )
    }

    const failedModal = () => {
        return (
            <View style={{flex: 1 }}>
                <Modal animationType='fade' visible={showFailedModal} transparent={true} statusBarTranslucent>
                    <SafeAreaView style={styles.modalDim}>
                        <View style={styles.modalBG}>
                            <View style={{ alignSelf: 'center', marginTop: 40, marginHorizontal: 15 }}>
                                <Image source={require('../../../assets/failedModal.png')} style={{ width: 96, height: 96, alignSelf: 'center' }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center', marginTop: 20 }}>Company addition has failed, please recheck your field!</Text>
                                <TouchableOpacity onPress={() => {setShowFailedModal(false)}} style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#505383', borderRadius: 10, marginTop: 15 }}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#FFF', alignSelf: 'center' }}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#505383' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Edit Customer</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#F1F2FE', marginTop: 35, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!companyNameFocus) ? '#000' : (!errorCompanyNameField || companyName === '') ? '#505383' : '#E93939', fontSize: (!companyNameFocus) ? 12 : 14 }}>
                            Company Name
                        </Text>
                        <TextInput
                            placeholder='Input your full name'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!companyNameFocus) ? '#000' : (!errorCompanyNameField || companyName === '') ? '#505383' : '#E93939', color: (!errorCompanyNameField || companyName === '') ? '#505383' : '#E93939' }}
                            onChangeText={(text) => {
                                setCompanyName(text)
                            }}
                            onEndEditing={() => {
                                setCompanyNameFocus(false)
                            }}
                            onFocus={() => {
                                setCompanyNameFocus(true)
                            }}
                            value={companyName}
                        />
                        {(errorCompanyNameField && companyName != '') 
                            ? <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#E93939', marginTop: 5, marginLeft: 10 }}>
                                This field can only contains alphabets!
                            </Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!companyEmailFocus) ? '#000' : (!errorCompanyEmailField || companyEmail === '') ? '#505383' : '#E93939', fontSize: (!companyEmailFocus) ? 12 : 14 }}>
                            Company Email Address
                        </Text>
                        <TextInput
                            placeholder='Input your email'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!companyEmailFocus) ? '#000' : (!errorCompanyEmailField || companyEmail === '') ? '#505383' : '#E93939', color: (!errorCompanyEmailField || companyEmail === '') ? '#505383' : '#E93939' }}
                            onChangeText={(text) => {
                                setCompanyEmail(text)
                            }}
                            onEndEditing={() => {
                                setCompanyEmailFocus(false)
                            }}
                            onFocus={() => {
                                setCompanyEmailFocus(true)
                            }}
                            value={companyEmail}
                            keyboardType='email-address'
                        />
                        {(errorCompanyEmailField && companyEmail != '') 
                            ? <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#E93939', marginTop: 5, marginLeft: 10 }}>
                                This field should be in email format!
                            </Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!phoneNumberFocus) ? '#000' : (!errorPhoneNumberField || phoneNumber === '') ? '#505383' : '#E93939', fontSize: (!phoneNumberFocus) ? 12 : 14 }}>
                           Company Phone Number
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
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!companyAddressFocus) ? '#000' : '#505383', fontSize: (!companyAddressFocus) ? 12 : 14 }}>
                            Company Address
                        </Text>
                        <TextInput
                            placeholder='Input your address'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!companyAddressFocus) ? '#000' : '#505383', color: '#505383' }}
                            onChangeText={(text) => {
                                setCompanyAddress(text)
                            }}
                            onEndEditing={() => {
                                setCompanyAddressFocus(false)
                            }}
                            onFocus={() => {
                                setCompanyAddressFocus(true)
                            }}
                            value={companyAddress}
                        />
                    </View>
                    <View style={{ marginTop: 25 }} >
                        <TouchableOpacity onPress={() => editCompany()} disabled={disableSaveButton} style={{ backgroundColor: (disableSaveButton) ? '#CACEDD' : '#505384', padding: 10, paddingHorizontal: 40, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <MaterialIcons name='save-as' size={24} color={'#FFF'} style={{ marginRight: 5 }} />
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {(showFailedModal) ? failedModal() : null}
                {(showSuccessModal) ? successModal() : null}
            </View>
        </View>
    )
}

export default EditCompanyFormPage
const styles = StyleSheet.create({
    modalDim: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalBG: {
        flex: 1,
        borderRadius: 15,
        marginHorizontal: width / 8,
        marginVertical: height / 3.4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    modalTitle: {
        flexDirection: 'row',
        marginLeft: 21,
        marginTop: 21,
        marginBottom: 14
    },
})