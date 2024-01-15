/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, FlatList, StatusBar, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment';
import { enableScreens } from 'react-native-screens';
import InventoryList from '../../Components/InventoryList';
import { ActionMeat } from '../../Redux/Actions/Meats'
import Spinner from 'react-native-loading-spinner-overlay';
import GetLoginToken from '../../Utility/GetLoginToken';

enableScreens();

const InventoryPage = () => {

    let date = `${moment().format('dddd')}, ${moment().format('MMM Do YYYY')}`;
    const navigation = useNavigation();

    const { meatList, meatSpinner } = useSelector((state) => state.meat);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          StatusBar.setBackgroundColor('#505383');
          StatusBar.setBarStyle('light-content');
        });
        return unsubscribe;
    }, [navigation]);

    const getInventoryList = async () => {
        try {
            const loginToken = await GetLoginToken();
            let pagination = 1
            dispatch(
                ActionMeat.GetAllMeats(
                   loginToken, pagination
                ),
            );
        } catch (error) {
          console.log('getLoginTokenError: ', error);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getInventoryList()
        })
        return unsubscribe
    }, [dispatch, navigation])

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
                data={meatList?.data?.meats}
                renderItem={({ item }) => <InventoryList item={item} refreshFunction={getInventoryList} />}
                keyExtractor={(item) => item?.Meat?.id} />
            <Spinner
                visible={meatSpinner}
                textContent={'Loading...'}
                textStyle={{ color: '#FFF' }}
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
