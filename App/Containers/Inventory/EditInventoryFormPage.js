/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Image, Modal, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const EditInventoryFormPage = (props) => {

    let item = props?.route?.params?.item
    const navigation = useNavigation()
    const [meatName, setMeatName] = useState('')
    const [meatNameFocus, setMeatNameFocus] = useState(false)
    const [meatStock, setMeatStock] = useState('')
    const [meatStockFocus, setMeatStockFocus] = useState(false)
    const [disableSaveButton, setDisableSaveButton] = useState(true)
    const [errorMeatNameField, setErrorMeatNameField] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showFailedModal, setShowFailedModal] = useState(false)

    const regexMeatName = /^[a-zA-Z]+$/

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    useEffect(() => {
        setMeatName(capitalizeFirstLetter(item?.Meat?.name))
        setMeatStock(String(item?.Meat?.stock))
    }, [])

    useEffect(() => {
        if(regexMeatName.test(meatName)) setErrorMeatNameField(false)
        else setErrorMeatNameField(true)
        if(meatName !== '' && !errorMeatNameField && meatStock !=='') setDisableSaveButton(false)
        else setDisableSaveButton(true)
    }, [meatName, meatStock, errorMeatNameField])

    const postMeat = () => {
        let data = {
            name: meatName,
            stock: meatStock,
            price: 1
        }
        console.log(`EditMeat: ${data}`)
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
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center' }}>Inventory has been changed successfully</Text>
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
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center', marginTop: 20 }}>Inventory changes has failed, please recheck your field!</Text>
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
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Edit Inventory</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#F1F2FE', marginTop: 35, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!meatNameFocus) ? '#000' : (!errorMeatNameField || meatName === '') ? '#505383' : '#E93939', fontSize: (!meatNameFocus) ? 12 : 14 }}>
                            Meat Name
                        </Text>
                        <TextInput
                            placeholder='Input meat name'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!meatNameFocus) ? '#000' : (!errorMeatNameField || meatName === '') ? '#505383' : '#E93939', color: (!errorMeatNameField || meatName === '') ? '#505383' : '#E93939' }}
                            onChangeText={(text) => {
                                setMeatName(text)
                            }}
                            onEndEditing={() => {
                                setMeatNameFocus(false)
                            }}
                            onFocus={() => {
                                setMeatNameFocus(true)
                            }}
                            value={meatName}
                        />
                        {(errorMeatNameField && meatName != '') 
                            ? <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#E93939', marginTop: 5, marginLeft: 10 }}>
                                This field can only contains alphabets!
                            </Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: (!meatStockFocus) ? '#000' : '#505383', fontSize: (!meatStockFocus) ? 12 : 14 }}>
                            Meat Stock
                        </Text>
                        <TextInput
                            placeholder='Input meat stock (Kg)'
                            keyboardType='numeric'
                            style={{ marginTop: -10, borderBottomWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', borderBottomColor: (!meatStockFocus) ? '#000' : '#505383'  }}
                            onChangeText={(text) => {
                                setMeatStock(text)
                            }}
                            onEndEditing={() => {
                                setMeatStockFocus(false)
                            }}
                            onFocus={() => {
                                setMeatStockFocus(true)
                            }}
                            value={meatStock}
                        />
                    </View>
                    <View style={{ marginTop: 25 }} >
                        <TouchableOpacity onPress={() => postMeat()} disabled={disableSaveButton} style={{ backgroundColor: (disableSaveButton) ? '#CACEDD' : '#505384', padding: 10, paddingHorizontal: 40, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <MaterialIcons name='save-as' size={24} color={'#FFF'} style={{ marginRight: 5 }} />
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>Edit</Text>
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

export default EditInventoryFormPage

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