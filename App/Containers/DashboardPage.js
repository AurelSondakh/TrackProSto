/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens'
import moment from 'moment/moment'

enableScreens()
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const DashboardPage = () => {
    let date = `${moment().format('ddd')}, ${moment().format('MMM Do YYYY')}`
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          StatusBar.setBackgroundColor('#F1F2FE');
          StatusBar.setBarStyle('dark-content')
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <ScrollView style={styles.container}>
            <View style={{ marginBottom: 0 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#7871F8' }}><MaterialCommunityIcon name='weather-cloudy' size={18} /> {date}</Text>
            </View>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#181A45', marginBottom: 15 }}>
                Welcome, Jane Doe
            </Text>
            <View style={{ backgroundColor: '#505383', padding: 15, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopRightRadius: 90 }}>
                <Octicons name='stack' size={24} color={'#F6F7F8'} />
                <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#F6F7F8', marginTop: 5 }}>Inventory Summary</Text>
                <View style={styles.mainCardItemRow}>
                    <View style={styles.mainCardItemList}>
                        <View style={{ marginRight: 80, width: 100 }}>
                            <Text style={styles.mainCardItemListTitleText}>Category Items</Text>
                            <Text style={styles.mainCardItemListValueText}>24</Text>
                        </View>
                    </View>
                    <View style={styles.mainCardItemList}>
                        <View>
                            <Text style={styles.mainCardItemListTitleText}>Total Weight</Text>
                            <Text style={styles.mainCardItemListValueText}>250 Kg</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainCardItemRow}>
                    <View style={styles.mainCardItemList}>
                        <View style={{ marginRight: 80, width: 100 }}>
                            <Text style={styles.mainCardItemListTitleText}>Total Transaction</Text>
                            <Text style={styles.mainCardItemListValueText}>479</Text>
                        </View>
                    </View>
                    <View style={styles.mainCardItemList}>
                        <View>
                            <Text style={styles.mainCardItemListTitleText}>Total Value</Text>
                            <Text style={styles.mainCardItemListValueText}>IDR 120,000,000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={[styles.mainCardItemRow, { justifyContent: 'space-between' }]}>
                    {/* first */}
                    <View style={styles.secondaryCard}>
                        <View style={styles.secondaryCardIcon}>
                            <MaterialIcons style={{ alignSelf: 'center' }} name='production-quantity-limits' size={18} />
                        </View>
                        <Text style={styles.secondaryCardTitle}>Low Stock</Text>
                        <Text style={styles.secondaryCardDesc}>All stock items that are low inventory</Text>
                        <Text style={styles.secondaryCardValue}>18 Items</Text>
                    </View>
                    <View style={styles.secondaryCard}>
                        <View style={styles.secondaryCardIcon}>
                            <MaterialIcons style={{ alignSelf: 'center' }} name='pending-actions' size={18} />
                        </View>
                        <Text style={styles.secondaryCardTitle}>Pend Transaction</Text>
                        <Text style={styles.secondaryCardDesc}>Transactions that have not been completed</Text>
                        <Text style={styles.secondaryCardValue}>8 Transaction</Text>
                    </View>
                </View>
                <View style={[styles.mainCardItemRow, { justifyContent: 'space-between' }]}>
                    {/* Scnd */}
                    <View style={styles.secondaryCard}>
                        <View style={styles.secondaryCardIcon}>
                            <IonIcons style={{ alignSelf: 'center' }} name='warning' size={18} />
                        </View>
                        <Text style={styles.secondaryCardTitle}>Close Expired Items</Text>
                        <Text style={styles.secondaryCardDesc}>Items in inventory are set to expire soon</Text>
                        <Text style={styles.secondaryCardValue}>4 Items</Text>
                    </View>
                    <View style={styles.secondaryCard}>
                        <View style={styles.secondaryCardIcon}>
                            <FontAwesome style={{ alignSelf: 'center' }} name='exchange' size={18} />
                        </View>
                        <Text style={styles.secondaryCardTitle}>Qty Change</Text>
                        <Text style={styles.secondaryCardDesc}>All inflows and outflows for an item</Text>
                        <Text style={styles.secondaryCardValue}>32 Items</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default DashboardPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F1FE',
        paddingHorizontal: 15
    },
    scndContainer: {
        flex: 1,
        paddingBottom: height / 2.5,
        backgroundColor: '#F6F5F9',
        paddingHorizontal: 25
    },
    mainCardItemRow: {
        flexDirection: 'row',
        marginTop: 10
    },
    mainCardItemList: {
        flexDirection: 'row'
    },
    mainCardItemListTitleText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 11,
        color: '#F6F7F8'
    },
    mainCardItemListValueText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#F6F7F8'
    },
    secondaryCard: {
        width: width / 2.25,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginTop: 20
    },
    secondaryCardTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#000'
    },
    secondaryCardDesc: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#6C5F5B',
        marginBottom: 10
    },
    secondaryCardValue: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: '#000'
    },
    secondaryCardIcon: {
        backgroundColor: '#F2F1FE',
        borderRadius: 50,
        padding: 10,
        borderWidth: 3,
        borderColor: '#FFF',
        marginRight: 100,
        marginTop: -35
    }
})