/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width

const CustomerList = (props) => {
    // "customer_id": "8d73d24a-b398-4a15-a6fb-64db32c6d6b9",
    // "fullname": "customerNew",
    // "address": "dummyaddress",
    // "company_id": "d84c6493-a14e-4bdf-9970-49a00144900f",
    // "phone_number": "081239238918",
    // "created_at": "2023-11-04T08:36:41.749637Z",
    // "updated_at": "2023-11-04T08:36:41.749637Z",
    // "created_by": "bor",
    // "updated_by": "",
    // "debt": 0

    let item = props?.item
    const navigation = useNavigation()

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

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

    return(
        <TouchableOpacity onPress={() => navigation.navigate('CustomerDetailPage', {item})} style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <GestureHandlerRootView>
                <Swipeable renderRightActions={leftSwipe}>
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
                </Swipeable>
            </GestureHandlerRootView>
        </TouchableOpacity>
    )
}

export default CustomerList