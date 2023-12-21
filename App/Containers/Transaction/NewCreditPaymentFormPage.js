/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Modal, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const NewCreditPaymentFormPage = () => {

    const navigation = useNavigation()
    const [creditPaymentAmount, setcreditPaymentAmount] = useState('')
    const [creditPaymentAmountFocus, setcreditPaymentAmountFocus] = useState(false)
    const [errorcreditPaymentAmountField, setErrorcreditPaymentAmountField] = useState(false)
    const [disableSaveButton, setDisableSaveButton] = useState(true)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showFailedModal, setShowFailedModal] = useState(false)

    const numberWithCommas = (number) => {
        const cleanedNumber = number.replace(/[^\d]/g, '');
        return cleanedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const postCreditPayment = () => {
        const cleanedNumber = creditPaymentAmount.replace(/[^\d]/g, '');
        let data = {
            inv_number: 'INV',
            amount: cleanedNumber
        }
        console.log(`PostCreditPayment: ${data}`)
        let response = {
            statuscode: 200,
        }

        if(response.statuscode === 200) {
            setShowSuccessModal(true)
        } else setShowFailedModal(true)
    }

    const successModal = () => {
        return (
            <View style={{flex: 1 }}>
                <Modal animationType='fade' visible={showSuccessModal} transparent={true} statusBarTranslucent>
                    <SafeAreaView style={styles.modalDim}>
                        <View style={[styles.modalBG, {marginVertical: height / 3.5}]}>
                            <View style={{ alignSelf: 'center', marginTop: 40, marginHorizontal: 15 }}>
                                <Image source={require('../../assets/correctModal.png')} style={{ width: 128, height: 128, alignSelf: 'center' }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center' }}>Credit Payment has been added successfully</Text>
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
                                <Image source={require('../../assets/failedModal.png')} style={{ width: 96, height: 96, alignSelf: 'center' }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center', marginTop: 20 }}>Credit Payment addition has failed, please recheck your field!</Text>
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

    useEffect(() => {
        console.log(creditPaymentAmount)
        const cleanedNumber = creditPaymentAmount.replace(/[^\d]/g, '');
        const regexcreditPaymentAmount = /^(?!\s+$)[0-9\s]+$/
        if(regexcreditPaymentAmount.test(cleanedNumber)) setErrorcreditPaymentAmountField(false)
        else setErrorcreditPaymentAmountField(true)
        if(cleanedNumber !== '' && !errorcreditPaymentAmountField) setDisableSaveButton(false)
        else setDisableSaveButton(true)
    }, [creditPaymentAmount, errorcreditPaymentAmountField])

    return (
        <View style={{ flex: 1, backgroundColor: '#505383' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Add New Credit Payment</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#F1F2FE', marginTop: 35, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!creditPaymentAmountFocus) ? '#000' : (!errorcreditPaymentAmountField || creditPaymentAmount === '') ? '#505383' : '#E93939', fontSize: (!creditPaymentAmountFocus) ? 12 : 14 }}>
                            Credit Payment Amount
                        </Text>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='Input amount'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!creditPaymentAmountFocus) ? '#000' : (!errorcreditPaymentAmountField || creditPaymentAmount === '') ? '#505383' : '#E93939', color: (!errorcreditPaymentAmountField || creditPaymentAmount === '') ? '#505383' : '#E93939' }}
                            onChangeText={(text) => {
                                setcreditPaymentAmount(text)
                            }}
                            onEndEditing={() => {
                                setcreditPaymentAmountFocus(false)
                            }}
                            onFocus={() => {
                                setcreditPaymentAmountFocus(true)
                            }}
                            value={numberWithCommas(creditPaymentAmount)}
                        />
                        {(errorcreditPaymentAmountField && creditPaymentAmount != '') 
                            ? <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#E93939', marginTop: 5, marginLeft: 10 }}>
                                This field can only contains number value!
                            </Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 25 }} >
                        <TouchableOpacity onPress={() => postCreditPayment()} disabled={disableSaveButton} style={{ backgroundColor: (disableSaveButton) ? '#CACEDD' : '#505384', padding: 10, paddingHorizontal: 40, borderRadius: 10 }}>
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

export default NewCreditPaymentFormPage
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