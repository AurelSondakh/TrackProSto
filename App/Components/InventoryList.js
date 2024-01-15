/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { ActionMeat } from '../Redux/Actions/Meats'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from 'react-native-loading-spinner-overlay';

const width = Dimensions.get('screen').width

const InventoryList = ({item, refreshFunction}) => {
    const navigation = useNavigation()
    const [showInventoryDetail, setShowInventoryDetail] = useState(false)
    const { meatSpinner } = useSelector((state) => state.meat);
    const dispatch = useDispatch();

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const toggleChevron = () => {
        if (showInventoryDetail) setShowInventoryDetail(false)
        else setShowInventoryDetail(true)
    }

    const deleteMeat = async () => {
        console.log('Meat Id', item?.Meat?.id)
        try {
            const loginToken = await AsyncStorage.getItem('loginToken');
            if (loginToken) {
                dispatch(
                    ActionMeat.DeleteMeats(
                        loginToken, item?.Meat?.id
                    ),
                );
            }
        } catch (error) {
            console.log('getLoginTokenError: ', error);
        }
        refreshFunction()
    }

    const inventoryDetail = () => {
        return (
            <View style={{ marginTop: 10, borderTopWidth: 2, borderStyle: 'dashed', borderRadius: 1, borderColor: '#DADDDF', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, marginTop: 10, marginLeft: 10 }}>Stock In: <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13 }}>{numberWithCommas(item.StockIn)} Kg</Text></Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, marginLeft: 10 }}>Stock Out: <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13 }}>{numberWithCommas(item.StockOut)} Kg</Text></Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('EditInventoryFormPage', {item})} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignSelf: 'center' }}>
                    <FontAwesome name="edit" color={'#FFF'} size={18} style={{ marginRight: 10, alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF' }}>
                        Edit Inventory
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const leftSwipe = (progress, dragX) => {
        return (
          <TouchableOpacity
            onPress={() => {
              deleteMeat()
            }} style={{ justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#FFE5E8', marginBottom: 0, marginLeft: -268, borderRadius: 10, width: width - 64, borderWidth: 1, borderColor: '#CACEDD' }}
          >
            <View style={{ paddingHorizontal: 12, alignItems: 'center', marginRight: 4 }}>
              <MaterialIcons name='delete-forever' color='#FF485A' size={32} />
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#D4979D' }}>Delete</Text>
            </View>
          </TouchableOpacity>
        )
    }

    return (
        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <Spinner
                visible={meatSpinner}
                textContent={'Loading...'}
                textStyle={{ color: '#FFF' }}
            />
            <GestureHandlerRootView>
                <Swipeable renderRightActions={leftSwipe}>
                    <View style={{ padding: 15, backgroundColor: '#FFF', borderRadius: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#505383' }}>{capitalizeFirstLetter(item.Meat?.name)}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13 }}>Total Stock: <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383' }}>{numberWithCommas(item.Meat?.stock)} Kg</Text></Text>
                            {/* <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13 }}>Price: <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383' }}>IDR {numberWithCommas(item.Meat?.price)}</Text></Text> */}
                            <TouchableOpacity onPress={toggleChevron}>
                                <MaterialCommunityIcons name={(!showInventoryDetail ? 'chevron-down-circle' : 'chevron-up-circle')} size={18} color={'#505383'} />
                            </TouchableOpacity>
                        </View>
                        {(!showInventoryDetail) ? null : inventoryDetail()}
                    </View>
                </Swipeable>
            </GestureHandlerRootView>
        </View>
    )
}

export default InventoryList