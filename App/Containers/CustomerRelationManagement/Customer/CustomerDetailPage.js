/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Modal, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ActionCompany } from '../../../Redux/Actions/Company'
import GetLoginToken from '../../../Utility/GetLoginToken'
import Spinner from 'react-native-loading-spinner-overlay';
import {useDispatch, useSelector} from 'react-redux';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const CustomerDetailPage = (props) => {

    const navigation = useNavigation()
    const customerDetail = props?.route?.params?.item
    const userRole = props?.route?.params?.userRole
    const [showCompanyDetail, setShowCompanyDetail] = useState(false)

    const capitalizeFirstLetter = (str) => {
        return str?.charAt(0)?.toUpperCase() + str?.slice(1);
    };

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const dispatch = useDispatch();
    const { companyDetail, companySpinner } = useSelector((state) => state.company);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loginToken = await GetLoginToken();
                dispatch(
                    ActionCompany.GetCompanyById(
                        loginToken,
                        customerDetail.company_id
                    ),
                );
            } catch (error) {
                console.log('getLoginTokenError: ', error);
            }
        };
        fetchData();
    }, [dispatch, navigation]);

    const companyDetailModal = () => {
        return (
            <View style={{flex: 1 }}>
                <Modal animationType='fade' visible={showCompanyDetail} transparent={true} statusBarTranslucent>
                    <SafeAreaView style={styles.modalDim}>
                        <View style={[styles.modalBG, {marginVertical: height / 5}]}>
                            <View style={{ alignSelf: 'center', marginTop: 40, marginHorizontal: 15 }}>
                                <View style={{ alignSelf: 'center', padding: 15, borderWidth: 1, borderColor: '#181A45', borderRadius: width / 2, backgroundColor: '#F1F2FE', marginBottom: 10 }}>
                                    <IonIcons name='business' size={42} color={'#505383'} />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#505383', alignSelf: 'center', marginBottom: 5 }}>Company Detail</Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, textAlignVertical: 'center', width: width / 3 }}>Name: </Text>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{companyDetail?.data?.company_name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, textAlignVertical: 'center', width: width / 3 }}>Email: </Text>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{companyDetail?.data?.email}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, textAlignVertical: 'center', width: width / 3 }}>Phone Number: </Text>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{companyDetail?.data?.phone_number}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, textAlignVertical: 'center', width: width / 3 }}>Address: </Text>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{companyDetail?.data?.address}</Text>
                                </View>
                                <TouchableOpacity onPress={() => {setShowCompanyDetail(false)}} style={{ paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#505383', borderRadius: 10, marginTop: 25 }}>
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
        <View style={{ flex: 1, backgroundColor: '#F1F2FE' }}>
            <View style={{ backgroundColor: '#505383', borderBottomLeftRadius: width / 2, borderBottomRightRadius: width / 2 }}>
                <View style={{ marginHorizontal: 15, height: height / 5.5 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 24, color: '#FFF' }}>
                            Customer Detail
                        </Text>
                    </View>
                </View>      
            </View>
            <View style={{ alignSelf: 'center', padding: 15, borderWidth: 1, borderColor: '#181A45', borderRadius: width / 2, backgroundColor: '#F1F2FE', marginTop: -55 }}>
                <IonIcons name='person' size={62} color={'#505383'} />
            </View>
            <View style={{ marginBottom: 20, marginTop: 10 }}>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='person' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            {customerDetail?.fullname}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='phone-portrait-outline' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            {customerDetail?.phone_number}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <MaterialCommunityIcon name='cash-minus' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            IDR {numberWithCommas(customerDetail?.debt)}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='home' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            {customerDetail?.address}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='business' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={[styles.textContainer, { width: width / 1.9 }]}>
                            {capitalizeFirstLetter(companyDetail?.data?.company_name)}
                        </Text>
                        <TouchableOpacity onPress={() => setShowCompanyDetail(true)} style={{ alignSelf: 'center', marginLeft: 10 }}>
                            <IonIcons name='information-circle' size={24} color={'#181A45'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {userRole === 'employee'
                ? null
                : <View style={{ marginHorizontal: 50 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditCustomerFormPage', {customerDetail})} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                        <FontAwesome name="edit" color={'#FFF'} size={18} style={{ marginRight: 10, alignSelf: 'center' }} />
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>
                            Edit Customer
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            {companyDetailModal()}
            <Spinner
                visible={companySpinner}
                textContent={'Loading...'}
                textStyle={{ color: '#FFF' }}
            />
        </View>
    )
}

export default CustomerDetailPage

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 50
    },
    textContainer: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        textAlignVertical: 'center',
        marginLeft: 40,
        width: width / 1.6
    },
    modalDim: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalBG: {
        flex: 1,
        borderRadius: 15,
        marginHorizontal: width / 12,
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