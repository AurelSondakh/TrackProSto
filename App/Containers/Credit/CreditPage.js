/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment'

const CreditPage = () => {

    const navigation = useNavigation()
    let date = `${moment().format('dddd')}, ${moment().format('MMM Do YYYY')}`


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
                    Credit Payment
                </Text>
                <Octicons name="stack" size={24} color={'#FFF'} />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', backgroundColor: '#FFF', padding: 10, borderRadius: 20, paddingHorizontal: 25, marginRight: 15, marginTop: -25 }}>
                <Ionicons name='calendar' size={22} color={'#000'} />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, marginLeft: 7 }}>{date}</Text>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 20, paddingBottom: 8 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14 }}>Transaction Overview</Text>
                <TouchableOpacity onPress={() => {}} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                    <AntDesign name="pluscircle" color={'#FFF'} size={18} style={{ marginRight: 10,alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF', alignSelf: 'center' }}>
                        Add New Credit Payment
                    </Text>
                </TouchableOpacity>
                {/* <Text style={{ fontFamily: 'Popping-Regular', fontSize: 13 }}>Total Inventory Value: {totalStockInventory} Kg</Text> */}
            </View>
        </View>
    )
}

export default CreditPage

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
})