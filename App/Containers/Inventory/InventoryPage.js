/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment';
import { enableScreens } from 'react-native-screens';
import InventoryList from '../../Components/InventoryList';

enableScreens();

const InventoryPage = () => {

    let date = `${moment().format('dddd')}, ${moment().format('MMM Do YYYY')}`;
    const navigation = useNavigation();
    const invenData = {
        'statuscode': 200,
        'message': 'Success',
        'data': [
            {
                'Meat': {
                    'id': 'd9f026fd-b338-41ae-9a0d-1a66608a84ba',
                    'name': 'sirloin',
                    'stock': 79,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-08-23T15:08:00.980402Z',
                    'updated_at': '2023-08-23T15:08:00.980402Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 27,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': '49a534d8-98c5-4281-b355-bcad383fafcd',
                    'name': 'kikil',
                    'stock': 100,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-10-27T16:07:25.190536Z',
                    'updated_at': '2023-10-27T16:07:25.190536Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 0,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': '9f666fc9-2a73-4530-8726-1afdc65c85de',
                    'name': 'buntut',
                    'stock': 86,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-08-23T15:08:08.11459Z',
                    'updated_at': '2023-08-23T15:08:08.11459Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 18,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': 'd9f026fd-b338-41ae-9a0d-1a66608a84ba',
                    'name': 'sirloin',
                    'stock': 79,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-08-23T15:08:00.980402Z',
                    'updated_at': '2023-08-23T15:08:00.980402Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 27,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': '49a534d8-98c5-4281-b355-bcad383fafcd',
                    'name': 'kikil',
                    'stock': 100,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-10-27T16:07:25.190536Z',
                    'updated_at': '2023-10-27T16:07:25.190536Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 0,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': '9f666fc9-2a73-4530-8726-1afdc65c85de',
                    'name': 'buntut',
                    'stock': 86,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-08-23T15:08:08.11459Z',
                    'updated_at': '2023-08-23T15:08:08.11459Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 18,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': 'd9f026fd-b338-41ae-9a0d-1a66608a84ba',
                    'name': 'sirloin',
                    'stock': 79,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-08-23T15:08:00.980402Z',
                    'updated_at': '2023-08-23T15:08:00.980402Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 27,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': '49a534d8-98c5-4281-b355-bcad383fafcd',
                    'name': 'kikil',
                    'stock': 100,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-10-27T16:07:25.190536Z',
                    'updated_at': '2023-10-27T16:07:25.190536Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 0,
                'StockOut': 0,
            },
            {
                'Meat': {
                    'id': '9f666fc9-2a73-4530-8726-1afdc65c85de',
                    'name': 'buntut',
                    'stock': 86,
                    'price': 100000,
                    'is_active': true,
                    'created_at': '2023-08-23T15:08:08.11459Z',
                    'updated_at': '2023-08-23T15:08:08.11459Z',
                    'created_by': 'admin',
                    'updated_by': '',
                },
                'StockIn': 18,
                'StockOut': 0,
            },
        ],
    };

    const [totalStockInventory, setTotalStockInventory] = useState(0);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          StatusBar.setBackgroundColor('#505383');
          StatusBar.setBarStyle('light-content');
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.titleCard}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: '#FFF', marginLeft: 10 }}>
                    Inventory
                </Text>
                <Octicons name="stack" size={24} color={'#FFF'} />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', backgroundColor: '#FFF', padding: 10, borderRadius: 20, paddingHorizontal: 25, marginRight: 15, marginTop: -25 }}>
                <Ionicons name="calendar" size={22} color={'#000'} />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, marginLeft: 7 }}>{date}</Text>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 20, paddingBottom: 8 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14 }}>Inventory Overview</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NewInventoryFormPage')} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                    <AntDesign name="pluscircle" color={'#FFF'} size={18} style={{ marginRight: 10,alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF', alignSelf: 'center' }}>
                        Add New Inventory
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
                data={invenData?.data}
                renderItem={({item}) => <InventoryList item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default InventoryPage;

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
        borderBottomLeftRadius: 50,
    },
});
