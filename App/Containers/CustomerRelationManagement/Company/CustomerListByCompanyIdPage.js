/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import CustomerList from '../../../Components/CustomerList'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'

const CustomerListByCompanyIdPage = () => {

    const navigation = useNavigation()
    const customerData= [
        {
            "customer_id": "8d73d24a-b398-4a15-a6fb-64db32c6d6b9",
            "fullname": "jane doe",
            "address": "dummyaddress",
            "company_id": "d84c6493-a14e-4bdf-9970-49a00144900f",
            "phone_number": "081239238918",
            "created_at": "2023-11-04T08:36:41.749637Z",
            "updated_at": "2023-11-04T08:36:41.749637Z",
            "created_by": "bor",
            "updated_by": "",
            "debt": 0
        },
        {
            "customer_id": "b79e46ab-22ad-4be2-b174-de0301807a82",
            "fullname": "jane doe The",
            "address": "dummyaddress",
            "company_id": "d84c6493-a14e-4bdf-9970-49a00144900f",
            "phone_number": "081239238918",
            "created_at": "2023-11-04T08:35:24.253383Z",
            "updated_at": "2023-11-07T06:02:47.494691Z",
            "created_by": "bor",
            "updated_by": "",
            "debt": 1900000
        },
        {
            "customer_id": "8d73d24a-b398-4a15-a6fb-64db32c6d6b93",
            "fullname": "jane doe",
            "address": "dummyaddress",
            "company_id": "d84c6493-a14e-4bdf-9970-49a00144900f",
            "phone_number": "081239238918",
            "created_at": "2023-11-04T08:36:41.749637Z",
            "updated_at": "2023-11-04T08:36:41.749637Z",
            "created_by": "bor",
            "updated_by": "",
            "debt": 0
        },
        {
            "customer_id": "b79e46ab-22ad-4be2-b174-de0301807a823",
            "fullname": "jane doe The",
            "address": "dummyaddress",
            "company_id": "d84c6493-a14e-4bdf-9970-49a00144900f",
            "phone_number": "081239238918",
            "created_at": "2023-11-04T08:35:24.253383Z",
            "updated_at": "2023-11-07T06:02:47.494691Z",
            "created_by": "bor",
            "updated_by": "",
            "debt": 1900000
        }
    ]

    return (
        <View style={{ flex: 1, backgroundColor: '#505383' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Customer List</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#F1F2FE', marginTop: 35, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <View style={{ paddingHorizontal: 0, marginTop: 50 }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, marginLeft: 20 }}>Customer Overview</Text>
                    <FlatList
                        style={{ marginBottom: 40 }}
                        nestedScrollEnabled
                        data={customerData}
                        renderItem={({item}) => <CustomerList item={item} swipe={false} />}
                        keyExtractor={item => item.customer_id}
                    />
                </View>
            </View>
        </View>
    )
}

export default CustomerListByCompanyIdPage