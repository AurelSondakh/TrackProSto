/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Modal, SafeAreaView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import CustomerList from '../Components/CustomerList'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const CompanyDetailPage = () => {

    const navigation = useNavigation()
    const companyDetail = {
        id: "d84c6493-a14e-4bdf-9970-49a00144900f",
        company_name: "dummyCompany",
        address: "dummyCompanyAddress",
        email: "dummyCompany@dummyCompany.com",
        phone_number: "09127865334",
        is_active: true,
        created_at: "2023-11-04T15:32:07.831057Z",
        updated_at: "2023-11-04T15:32:07.831057Z",
        created_by: "bor",
        updated_by: ""
    }

    return(
        <View style={{ flex: 1, backgroundColor: '#F1F2FE' }}>
            <View style={{ backgroundColor: '#505383', borderBottomLeftRadius: width / 2, borderBottomRightRadius: width / 2 }}>
                <View style={{ marginHorizontal: 15, height: height / 5.5 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 24, color: '#FFF' }}>
                            Company Detail
                        </Text>
                    </View>
                </View>      
            </View>
            <View style={{ alignSelf: 'center', padding: 15, borderWidth: 1, borderColor: '#181A45', borderRadius: width / 2, backgroundColor: '#F1F2FE', marginTop: -55 }}>
                <IonIcons name='business' size={62} color={'#505383'} />
            </View>
            <View style={{ marginBottom: 20, marginTop: 10 }}>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='business' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            {companyDetail?.company_name}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='phone-portrait-outline' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            {companyDetail?.phone_number}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='mail' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            {companyDetail?.email}
                        </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <View style={styles.listContainer}>
                        <IonIcons name='home' size={32} color={'#505383'} style={{ alignSelf: 'center' }} />
                        <Text style={styles.textContainer}>
                            {companyDetail?.address}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20, justifyContent: 'space-between' }}>
                    <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.navigate('CustomerListByCompanyIdPage')} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                        <FontAwesome name="edit" color={'#FFF'} size={18} style={{ marginRight: 10, alignSelf: 'center' }} />
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>
                            View Customer
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditCompanyFormPage')} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                        <FontAwesome name="edit" color={'#FFF'} size={18} style={{ marginRight: 10, alignSelf: 'center' }} />
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>
                            Edit Company
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CompanyDetailPage

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