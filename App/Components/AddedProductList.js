/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'


const width = Dimensions.get('screen').width

const AddedProductList = (props) => {

    let item = props?.item
    console.log(item)

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const leftSwipe = (progress, dragX) => {
        return (
          <TouchableOpacity
            onPress={() => {
            //   deleteOneHistory()
            }} style={{ justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#FFE5E8', marginBottom: 15, marginLeft: -268, borderRadius: 10, width: width - 64, borderWidth: 1, borderColor: '#CACEDD' }}
          >
            <View style={{ paddingHorizontal: 12, alignItems: 'center', marginRight: 4 }}>
              <MaterialIcons name='delete-forever' color='#FF485A' size={32} />
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#D4979D' }}>Delete</Text>
            </View>
          </TouchableOpacity>
        )
    }

    return(
        <GestureHandlerRootView>
            <Swipeable renderRightActions={leftSwipe}>
                <View style={{ padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 15, backgroundColor: '#F1F2FE' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#505383' }}>
                            {item?.meatName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#181A45' }}>Price</Text>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383', marginTop: -5 }}>IDR {numberWithCommas(item?.price)}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#181A45' }}>Quantity</Text>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#505383', marginTop: -5, textAlign: 'center' }}>{numberWithCommas(item?.quantity)}</Text>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

export default AddedProductList