/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width

const TransactionList = ({item}) => {

    const navigation = useNavigation();
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const dateFormat = (date) => {
        const dateObject = new Date(date);
        const year = dateObject.getFullYear();
        const day = String(dateObject.getDate()).padStart(2, '0'); // PadStart digunakan untuk menambahkan nol di depan tanggal jika hanya satu digit
        const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0, maka tambahkan 1 untuk mendapatkan bulan yang benar

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate
    }

    const leftSwipe = (progress, dragX) => {
        return (
          <TouchableOpacity
            onPress={() => {
            //   deleteOneHistory()
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
        <TouchableOpacity style={{ paddingHorizontal: 15, marginTop: 10 }} onPress={() => navigation.navigate('TransactionDetailPage', {item})}>
            <GestureHandlerRootView>
                <Swipeable renderRightActions={leftSwipe}>
                    <View style={{ padding: 15, backgroundColor: '#FFF', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#505383' }}>{item?.invoice_number}</Text>
                                <IonIcons name= {item?.tx_type === 'in' ? 'arrow-up-sharp' : 'arrow-down-sharp'} size={24} style={{ marginLeft: 5, fontWeight: 'bold' }} color={(item?.tx_type === 'in') ? '#04AD1F' : '#E93939'} />
                            </View>
                            <View style={{ padding: 7, borderRadius: 10, backgroundColor: item.payment_status === 'unpaid' ? '#ffc300' : '#04AD1F', width: 70, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12, color: '#FFF' }}>{item.payment_status === 'unpaid' ? 'Partly' : capitalizeFirstLetter(item.payment_status)}</Text>
                            </View>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, marginTop: -15 }}>
                            Date: {dateFormat(item?.date)}
                        </Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13 }}>
                                Name: 
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383' }}>
                                    {` ${capitalizeFirstLetter(item?.name)}`}
                                </Text>
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, marginTop: -5 }}>
                                Phone Number: 
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383' }}>
                                    {` ${item?.phone_number}`}
                                </Text>
                            </Text>
                            {(item?.payment_status === 'unpaid')
                                ?
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, marginTop: -5 }}>
                                    Debt Amount: 
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#E93939' }}>
                                        {` IDR ${numberWithCommas(item?.debt)}`}
                                    </Text>
                                </Text>
                                : null
                            }
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, marginTop: -5 }}>
                                Total Items: 
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#505383' }}>
                                    {` ${Object.keys(item?.transaction_details).length}`}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </Swipeable>
            </GestureHandlerRootView>
        </TouchableOpacity>
    )
}

export default TransactionList