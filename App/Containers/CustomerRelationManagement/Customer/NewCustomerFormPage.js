/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TouchableOpacity, TextInput, Modal, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { ActionCompany } from '../../../Redux/Actions/Company'
import { ActionCustomer } from '../../../Redux/Actions/Customers'
import { ActionUtility } from '../../../Redux/Actions/Utility';
import GetLoginToken from '../../../Utility/GetLoginToken';
import Spinner from 'react-native-loading-spinner-overlay';
import { SelectList } from 'react-native-dropdown-select-list'
import map from 'lodash/map';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const NewCustomerFormPage = () => {

    const navigation = useNavigation()
    const [fullName, setFullName] = useState('')
    const [fullNameFocus, setFullNameFocus] = useState(false)
    const [errorFullNameField, setErrorFullNameField] = useState(false)
    const [disableSaveButton, setDisableSaveButton] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false)
    const [errorPhoneNumberField, setErrorPhoneNumberField] = useState(false)
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerAddressFocus, setCustomerAddressFocus] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showFailedModal, setShowFailedModal] = useState(false)
    const [dropdownCompanyList, setDropdownCompanyList] = useState(null)
    const [selectedCompanyId, setSelectedCompanyId] = useState(null)

    const dispatch = useDispatch();
    const { companyList, companySpinner } = useSelector((state) => state.company);
    const { addCustomerResponse, customerSpinner } = useSelector((state) => state.customer);

    const getCompanyList = async () => {
        try {
            const loginToken = await GetLoginToken()
            dispatch(
                ActionCompany.GetAllCompany(
                   loginToken
                ),
            );
        } catch (error) {
          console.log('getLoginTokenError: ', error);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCompanyList()
        })
        return unsubscribe
    }, [dispatch, navigation])

    useEffect(() => {
        const mappedData = map(companyList?.data, item => (
        {
            key: item?.id,
            value: item?.company_name
        }
        ));
        setDropdownCompanyList(mappedData)
    }, [companyList])

    const postCustomer = async () => {
        let data = {
            fullname: fullName,
            address: customerAddress,
            phone_number: phoneNumber,
            company_id: selectedCompanyId
        }
        try {
            const loginToken = await GetLoginToken()
            dispatch(
                ActionCustomer.AddCustomers(
                   loginToken,
                   data
                ),
            );
        } catch (error) {
          console.log('getLoginTokenError: ', error);
        }
    }

    const resetState = () => {
        setFullName('')
        setFullNameFocus(false)
        setErrorFullNameField(false)
        setDisableSaveButton(true)
        setPhoneNumber('')
        setPhoneNumberFocus(false)
        setErrorPhoneNumberField(false)
        setDisableSaveButton(true)
        setCustomerAddress('')
        setCustomerAddressFocus(false)
        setSelectedCompanyId(null)
    }

    useEffect(() => {
        console.log(addCustomerResponse, 'addCustomerResponse')
        if('statuscode' in addCustomerResponse) {
            if(addCustomerResponse.statuscode === 200) {
                resetState()
                setShowSuccessModal(true)
                dispatch(ActionUtility.ResetDataAddCustomerResponse())
            } else {
                console.log(addCustomerResponse)
                setShowFailedModal(true)
            }
        }
    }, [addCustomerResponse, dispatch])

    useEffect(() => {
        if(fullName !== '' && customerAddress !== '' && phoneNumber !== '' && selectedCompanyId !== null && !errorFullNameField && !errorPhoneNumberField) {
            setDisableSaveButton(false)
        } else setDisableSaveButton(true)
    }, [fullName, customerAddress, phoneNumber, errorFullNameField, errorPhoneNumberField, selectedCompanyId])

    useEffect(() => {
        const regexFullName = /^(?!\s+$)[a-zA-Z\s]+$/
        if(regexFullName.test(fullName)) setErrorFullNameField(false)
        else setErrorFullNameField(true)
    }, [fullName])

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
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center' }}>Customer has been added successfully</Text>
                                <TouchableOpacity onPress={() => {setShowSuccessModal(false); navigation.navigate('BottomTabNavigator')}} style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#505383', borderRadius: 10, marginTop: 15 }}>
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
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center', marginTop: 20 }}>Customer addition has failed, please recheck your field!</Text>
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
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!customerAddressFocus) ? '#000' : '#505383', fontSize: (!customerAddressFocus) ? 12 : 14 }}>
                            Customer Address
                        </Text>
                        <TextInput
                            placeholder='Input your address'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!customerAddressFocus) ? '#000' : '#505383', color: '#505383' }}
                            onChangeText={(text) => {
                                setCustomerAddress(text)
                            }}
                            onEndEditing={() => {
                                setCustomerAddressFocus(false)
                            }}
                            onFocus={() => {
                                setCustomerAddressFocus(true)
                            }}
                            value={customerAddress}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!customerAddressFocus) ? '#000' : '#505383', fontSize: (!customerAddressFocus) ? 12 : 14 }}>
                            Selected Company
                        </Text>
                        <SelectList 
                            setSelected={(val) => setSelectedCompanyId(val)} 
                            data={dropdownCompanyList} 
                            save="key"
                            fontFamily='Poppins-Regular'
                            placeholder="Company"
                        />
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
                {(showFailedModal) ? failedModal() : null}
                {(showSuccessModal) ? successModal() : null}
            </View>
            <Spinner
                visible={companySpinner || customerSpinner}
                textContent={'Loading...'}
                textStyle={{ color: '#FFF' }}
            />
        </View>
    )
}

export default NewCustomerFormPage
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
    dropdownTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#505383',
        marginBottom: 2
    },
    dropdownContent: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    }
})