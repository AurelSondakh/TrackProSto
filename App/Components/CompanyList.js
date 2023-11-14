/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width

const CompanyList = (props) => {
    
    let item = props?.item
    const navigation = useNavigation()
    const [showCompanyDetail, setShowCompanyDetail] = useState(false)

    const toggleChevron = () => {
        if (showCompanyDetail) setShowCompanyDetail(false)
        else setShowCompanyDetail(true)
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
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

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <TouchableOpacity style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <GestureHandlerRootView>
                <Swipeable renderRightActions={leftSwipe}>
                    <View style={{ padding: 15, backgroundColor: '#FFF', borderRadius: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#505383' }}>{capitalizeFirstLetter(item.company_name)}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                             <View style={{ width: width / 2 }}>
                                 <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, width: width/1.3 }}>Phone Number</Text>
                                 <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383', marginTop: -5, width: width / 1.3 }}>{item?.phone_number}</Text>
                             </View>
                             <View style={{ }}>
                                 <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13 }}>Total Customer</Text>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383', marginTop: -5, width: width / 3.5 }}>{numberWithCommas(2000)}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, width: width/1.3 }}>Address</Text>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383', marginTop: -5, width: width / 1.3 }}>{item?.address}</Text>
                            </View>
                           {/* <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13 }}>Price: <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383' }}>IDR {numberWithCommas(item.Meat?.price)}</Text></Text> */}
                            {/* <TouchableOpacity onPress={toggleChevron}>
                                <MaterialCommunityIcons name={(!showCompanyDetail ? 'chevron-down-circle' : 'chevron-up-circle')} size={18} color={'#505383'} />
                            </TouchableOpacity> */}
                        </View>
                        {/* {(!showCompanyDetail) ? null : companyDetail()} */}
                    </View>
                </Swipeable>
            </GestureHandlerRootView>
        </TouchableOpacity>
    )
}

export default CompanyList