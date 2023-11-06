/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react"
import { View, Text, FlatList, StatusBar, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment'
import { enableScreens } from 'react-native-screens'

// Component
import TransactionList from "../Components/TransactionList"

enableScreens()

const TransactionPage = () => {
    let date = `${moment().format('dddd')}, ${moment().format('MMM Do YYYY')}`
    const navigation = useNavigation();
    const transactionData = [
        {
            "id": "9a5b385b-1c3d-42f3-bdc2-b6656b9bd3845",
            "date": "2023-11-01T00:00:00Z",
            "invoice_number": "MJP-20231101-0002",
            "customer_id": "1fa4b6d6-7561-4803-9d93-6e39563ce759",
            "name": "customerNew",
            "email": "customerNew@gmail.com",
            "address": "dummyaddress",
            "company": "dummyname",
            "phone_number": "081239238918",
            "tx_type": "in",
            "payment_status": "unpaid",
            "payment_amount": 460000,
            "total": 560000,
            "is_active": true,
            "created_at": "2023-11-01T10:40:34.789617Z",
            "updated_at": "2023-11-01T10:40:34.789617Z",
            "created_by": "admin",
            "updated_by": "admin",
            "debt": 100000,
            "transaction_details": [
                {
                    "id": "b0bfc840-d79d-4a89-a3e7-9b4f7aa9a386",
                    "transaction_id": "9a5b385b-1c3d-42f3-bdc2-b6656b9bd384",
                    "meat_id": "9f666fc9-2a73-4530-8726-1afdc65c85de",
                    "meat_name": "buntut",
                    "qty": 2,
                    "price": 100000,
                    "total": 200000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:40:34.790349Z",
                    "updated_at": "2023-11-01T10:40:34.790349Z",
                    "created_by": "",
                    "updated_by": ""
                },
                {
                    "id": "20f95603-d6c0-41c4-849d-6a4a426bf3ad",
                    "transaction_id": "9a5b385b-1c3d-42f3-bdc2-b6656b9bd384",
                    "meat_id": "d9f026fd-b338-41ae-9a0d-1a66608a84ba",
                    "meat_name": "sirloin",
                    "qty": 3,
                    "price": 120000,
                    "total": 360000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:40:34.790349Z",
                    "updated_at": "2023-11-01T10:40:34.790349Z",
                    "created_by": "",
                    "updated_by": ""
                }
            ]
        },
        {
            "id": "eee7995d-6a5d-470d-9f95-eb3db7192058",
            "date": "2023-11-01T00:00:00Z",
            "invoice_number": "INV-20231101-0001",
            "customer_id": "1fa4b6d6-7561-4803-9d93-6e39563ce759",
            "name": "customerNew",
            "email": "customerNew@gmail.com",
            "address": "dummyaddress",
            "company": "dummyname",
            "phone_number": "081239238918",
            "tx_type": "out",
            "payment_status": "paid",
            "payment_amount": 560000,
            "total": 560000,
            "is_active": true,
            "created_at": "2023-11-01T10:40:17.658588Z",
            "updated_at": "2023-11-01T10:40:17.658588Z",
            "created_by": "admin",
            "updated_by": "admin",
            "debt": 0,
            "transaction_details": [
                {
                    "id": "c85142cd-d9b0-457e-8f44-54049150d125",
                    "transaction_id": "eee7995d-6a5d-470d-9f95-eb3db7192058",
                    "meat_id": "9f666fc9-2a73-4530-8726-1afdc65c85de",
                    "meat_name": "buntut",
                    "qty": 2,
                    "price": 100000,
                    "total": 200000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:40:17.66113Z",
                    "updated_at": "2023-11-01T10:40:17.66113Z",
                    "created_by": "",
                    "updated_by": ""
                },
                {
                    "id": "50781c10-81d8-433a-85f1-edca08c0a20e",
                    "transaction_id": "eee7995d-6a5d-470d-9f95-eb3db7192058",
                    "meat_id": "d9f026fd-b338-41ae-9a0d-1a66608a84ba",
                    "meat_name": "sirloin",
                    "qty": 3,
                    "price": 120000,
                    "total": 360000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:40:17.66113Z",
                    "updated_at": "2023-11-01T10:40:17.66113Z",
                    "created_by": "",
                    "updated_by": ""
                }
            ]
        },
        {
            "id": "03f78f67-7047-4cab-bb01-f1b816a7bcb3",
            "date": "2023-11-01T00:00:00Z",
            "invoice_number": "MJP-20231101-0000",
            "customer_id": "1fa4b6d6-7561-4803-9d93-6e39563ce759",
            "name": "customerNew",
            "email": "customerNew@gmail.com",
            "address": "dummyaddress",
            "company": "dummyname",
            "phone_number": "081239238918",
            "tx_type": "in",
            "payment_status": "unpaid",
            "payment_amount": 460000,
            "total": 560000,
            "is_active": true,
            "created_at": "2023-11-01T10:39:55.280033Z",
            "updated_at": "2023-11-01T10:39:55.280033Z",
            "created_by": "admin",
            "updated_by": "admin",
            "debt": 100000,
            "transaction_details": [
                {
                    "id": "6b17f250-9746-4c13-9405-0f530936e8d4",
                    "transaction_id": "03f78f67-7047-4cab-bb01-f1b816a7bcb3",
                    "meat_id": "9f666fc9-2a73-4530-8726-1afdc65c85de",
                    "meat_name": "buntut",
                    "qty": 2,
                    "price": 100000,
                    "total": 200000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:39:55.282815Z",
                    "updated_at": "2023-11-01T10:39:55.282815Z",
                    "created_by": "",
                    "updated_by": ""
                },
                {
                    "id": "8d335a83-4925-457a-9fc2-da1cab02fdc0",
                    "transaction_id": "03f78f67-7047-4cab-bb01-f1b816a7bcb3",
                    "meat_id": "d9f026fd-b338-41ae-9a0d-1a66608a84ba",
                    "meat_name": "sirloin",
                    "qty": 3,
                    "price": 120000,
                    "total": 360000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:39:55.282815Z",
                    "updated_at": "2023-11-01T10:39:55.282815Z",
                    "created_by": "",
                    "updated_by": ""
                }
            ]
        },
        {
            "id": "9a5b385b-1c3d-42f3-bdc2-b6656b9bd384",
            "date": "2023-11-01T00:00:00Z",
            "invoice_number": "MJP-20231101-0002",
            "customer_id": "1fa4b6d6-7561-4803-9d93-6e39563ce759",
            "name": "customerNew",
            "email": "customerNew@gmail.com",
            "address": "dummyaddress",
            "company": "dummyname",
            "phone_number": "081239238918",
            "tx_type": "in",
            "payment_status": "unpaid",
            "payment_amount": 460000,
            "total": 560000,
            "is_active": true,
            "created_at": "2023-11-01T10:40:34.789617Z",
            "updated_at": "2023-11-01T10:40:34.789617Z",
            "created_by": "admin",
            "updated_by": "admin",
            "debt": 100000,
            "transaction_details": [
                {
                    "id": "b0bfc840-d79d-4a89-a3e7-9b4f7aa9a386",
                    "transaction_id": "9a5b385b-1c3d-42f3-bdc2-b6656b9bd384",
                    "meat_id": "9f666fc9-2a73-4530-8726-1afdc65c85de",
                    "meat_name": "buntut",
                    "qty": 2,
                    "price": 100000,
                    "total": 200000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:40:34.790349Z",
                    "updated_at": "2023-11-01T10:40:34.790349Z",
                    "created_by": "",
                    "updated_by": ""
                },
                {
                    "id": "20f95603-d6c0-41c4-849d-6a4a426bf3ad",
                    "transaction_id": "9a5b385b-1c3d-42f3-bdc2-b6656b9bd384",
                    "meat_id": "d9f026fd-b338-41ae-9a0d-1a66608a84ba",
                    "meat_name": "sirloin",
                    "qty": 3,
                    "price": 120000,
                    "total": 360000,
                    "is_active": false,
                    "created_at": "2023-11-01T10:40:34.790349Z",
                    "updated_at": "2023-11-01T10:40:34.790349Z",
                    "created_by": "",
                    "updated_by": ""
                }
            ]
        },
    ]

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          StatusBar.setBackgroundColor('#505383');
          StatusBar.setBarStyle('light-content')
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.titleCard}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: '#FFF', marginLeft: 10 }}>
                    Transaction
                </Text>
                <MaterialIcons name='payments' size={28} color={'#FFF'} />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', backgroundColor: '#FFF', padding: 10, borderRadius: 20, paddingHorizontal: 25, marginRight: 15, marginTop: -25 }}>
                <Ionicons name='calendar' size={22} color={'#000'} />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, marginLeft: 7 }}>{date}</Text>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 20, paddingBottom: 8 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14 }}>Transaction Overview</Text>
                <TouchableOpacity style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                    <AntDesign name="pluscircle" color={'#FFF'} size={18} style={{ marginRight: 10,alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF', alignSelf: 'center' }}>
                        Add New Transaction
                    </Text>
                </TouchableOpacity>
                {/* <Text style={{ fontFamily: 'Popping-Regular', fontSize: 13 }}>Total Inventory Value: {totalStockInventory} Kg</Text> */}
            </View>
            {/* <View style={{ flexDirection: 'row', marginHorizontal: 15, backgroundColor: '#FFF', borderWidth: 1, borderRadius: 10 }}>

                <Octicons name="search" size={14} style={{ marginTop: 14, marginLeft: 15, marginRight: 5 }}  />
                <TextInput 
                    placeholder='Search meat name'
                    style={{ fontFamily: 'Poppins-Medium', height: 40, fontSize: 12, width: width }}
                />
            </View> */}
            <FlatList
                style={{ marginBottom: 70 }}
                nestedScrollEnabled
                data={transactionData}
                renderItem={({item}) => <TransactionList item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default TransactionPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F1FE',
    },
    titleCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#505383',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 30,
        borderBottomLeftRadius: 50
    }
})