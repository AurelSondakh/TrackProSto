/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions, Modal, StyleSheet, SafeAreaView  } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import GetLoginToken from '../Utility/GetLoginToken';
import { ActionCustomer } from '../Redux/Actions/Customers'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const CustomerList = (props, {refreshFunction}) => {
    let swipe = props?.swipe
    let item = props?.item
    let userRole = props?.userRole
    const navigation = useNavigation()
    const { customerSpinner } = useSelector((state) => state.customer);
    const dispatch = useDispatch();
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const deleteCustomer = async () => {
        console.log('DELETING CUSTOMER WITH ID: ', item?.customer_id)
        try {
            const loginToken = await GetLoginToken();
            dispatch(
                ActionCustomer.DeleteCustomers(
                    loginToken, item?.customer_id
                ),
            );
        } catch (error) {
            console.log('getLoginTokenError: ', error);
        }
        refreshFunction()
    }

    const leftSwipe = (progress, dragX) => {
        return (
          <TouchableOpacity
            onPress={() => {
            setShowConfirmModal(true)
            }} style={{ justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#FFE5E8', marginBottom: 0, marginLeft: -268, borderRadius: 10, width: width - 64, borderWidth: 1, borderColor: '#CACEDD' }}
          >
            <View style={{ paddingHorizontal: 12, alignItems: 'center', marginRight: 4 }}>
              <MaterialIcons name='delete-forever' color='#FF485A' size={32} />
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#D4979D' }}>Delete</Text>
            </View>
          </TouchableOpacity>
        )
    }

    const confirmationModal = () => {
        return (
            <View style={{flex: 1 }}>
                <Modal animationType='fade' visible={showConfirmModal} transparent={true} statusBarTranslucent>
                    <SafeAreaView style={styles.modalDim}>
                        <View style={[styles.modalBG, {marginVertical: height / 3}]}>
                            <View style={{ alignSelf: 'center', marginTop: 40, marginHorizontal: 15 }}>
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', fontSize: 18, marginBottom: 10 }}>Delete Confirmation</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, paddingHorizontal: 10, textAlign: 'center' }}><Text style={{ fontFamily: 'Poppins-Bold', color: '#505383' }}>{capitalizeFirstLetter(item.fullname)}</Text> will be deleted. Are you sure ?</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                    <TouchableOpacity onPress={() => {setShowConfirmModal(false); deleteCustomer()}} style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#FF6261', borderRadius: 10 }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#FFF', alignSelf: 'center' }}>
                                            Delete
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {setShowConfirmModal(false)}} style={{ backgroundColor: '#505383', borderRadius: 10, marginLeft: 10,  paddingHorizontal: 20, paddingVertical: 15 }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#FFF', alignSelf: 'center' }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>
        )
    }

    const renderItem = () => {
        return (
            <View style={{ padding: 15, backgroundColor: '#FFF', borderRadius: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#505383' }}>{capitalizeFirstLetter(item.fullname)}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ width: width / 2 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, width: width/1.3 }}>Phone Number</Text>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383', marginTop: -5, width: width / 1.3 }}>{item?.phone_number}</Text>
                        </View>
                        <View style={{ }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13 }}>Outstanding Amount</Text>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: item?.debt == 0 ? '#505383' : '#E93939', marginTop: -5, width: width / 3.5 }}>IDR {numberWithCommas(item?.debt)}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, width: width/1.3 }}>Address</Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383', marginTop: -5 }}>{item?.address}</Text>
                </View>
            </View>
        )
    }

    return(
        <TouchableOpacity onPress={() => navigation.navigate('CustomerDetailPage', {item, userRole})} style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <GestureHandlerRootView>
                {userRole === 'employee' || userRole === 'admin'
                    ? renderItem()
                    : <Swipeable renderRightActions={(swipe) ? leftSwipe : null}>
                        {renderItem()}
                    </Swipeable>
                }
            </GestureHandlerRootView>
            {showConfirmModal ? confirmationModal() : null}
        </TouchableOpacity>
    )
}

export default CustomerList
const styles = StyleSheet.create({
    modalDim: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalBG: {
        flex: 1,
        borderRadius: 15,
        marginHorizontal: width / 8,
        marginVertical: height / 5,
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