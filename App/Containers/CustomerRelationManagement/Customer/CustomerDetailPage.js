/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Modal, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const CustomerDetailPage = (props) => {

    const navigation = useNavigation()
    const item = props?.route?.params?.item
    const [showCompanyDetail, setShowCompanyDetail] = useState(false)

    const customerDetail = {
        customer_id: '8d73d24a-b398-4a15-a6fb-64db32c6d6b9',
        fullname: 'Jane Doe',
        phone_number: '081239238918',
        debt: 0,
        address: "dummy address dummy address dummy address dummy address",
    }

    const getCompany = {
        company_name: "dummyCompany",
        address: "Jalan Sudirman No. 123, Jakarta Pusat",
        email: "dummyCompany@dummyCompany.com",
        phone_number: "09127865334",
    }

    console.log(props)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

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
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{getCompany?.company_name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, textAlignVertical: 'center', width: width / 3 }}>Email: </Text>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{getCompany?.email}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, textAlignVertical: 'center', width: width / 3 }}>Phone Number: </Text>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{getCompany?.phone_number}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, textAlignVertical: 'center', width: width / 3 }}>Address: </Text>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, textAlign: 'center', marginTop: 10, width: width / 2.5 }}>{getCompany?.address}</Text>
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
                            IDR {customerDetail?.debt}
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
                            {capitalizeFirstLetter(getCompany?.company_name)}
                        </Text>
                        <TouchableOpacity onPress={() => setShowCompanyDetail(true)} style={{ alignSelf: 'center', marginLeft: 10 }}>
                            <IonIcons name='information-circle' size={24} color={'#181A45'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 50 }}>
                <TouchableOpacity onPress={() => navigation.navigate('EditCustomerFormPage', {customerDetail})} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                    <FontAwesome name="edit" color={'#FFF'} size={18} style={{ marginRight: 10, alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>
                        Edit Customer
                    </Text>
                </TouchableOpacity>
            </View>
            {companyDetailModal()}
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