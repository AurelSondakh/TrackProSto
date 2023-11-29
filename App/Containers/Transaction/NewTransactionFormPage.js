/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { SelectList } from 'react-native-dropdown-select-list'

const NewTransactionFormPage = () => {

    const navigation = useNavigation()
    const customerList = [
        {
            key: 1,
            value: 'Jane Doe 1'
        },
        {
            key: 2,
            value: 'Jane Doe 2'
        },
        {
            key: 3,
            value: 'Jane Doe 3'
        },
        {
            key: 4,
            value: 'Jane Doe 4'
        },
        {
            key: 5,
            value: 'Jane Doe 5'
        },
        {
            key: 6,
            value: 'Jane Doe 6'
        },
        {
            key: 7,
            value: 'Jane Doe 7'
        },
        {
            key: 8,
            value: 'Jane Doe 8'
        }
    ]
    const inventoryList = [
        {
            key: 1,
            value: 'Meat Type 1',
            price: 10000
        },
        {
            key: 2,
            value: 'Meat Type 2',
            price: 20000
        },
        {
            key: 3,
            value: 'Meat Type 3',
            price: 30000
        },
        {
            key: 4,
            value: 'Meat Type 4',
            price: 40000
        },
        {
            key: 5,
            value: 'Meat Type 5',
            price: 50000
        },
        {
            key: 6,
            value: 'Meat Type 6',
            price: 60000
        },
        {
            key: 7,
            value: 'Meat Type 7',
            price: 70000
        },
        {
            key: 8,
            value: 'Meat Type 8',
            price: 80000
        }
    ]
    const transactionTypeList = [
        {
            key: 1,
            value: "In"
        },
        {
            key: 2,
            value: "Out"
        }
    ]
    const [selectedCustomer, setSelectedCustomer] = useState()
    const [selectedInventory, setSelectedInventory] = useState(null)
    const [transactionType, setTransactionType] = useState()
    console.log(selectedInventory)
    return (
        <View style={{ flex: 1, backgroundColor: '#505383' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Add New Transaction</Text>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F2FE', marginTop: 35, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <View style={{ paddingHorizontal: 30, marginTop: 50, paddingBottom: 30 }}>
                    <View>
                        <Text style={styles.dropdownTitle}>
                            Customer List
                        </Text>
                        <SelectList 
                            setSelected={(val) => setSelectedCustomer(val)} 
                            data={customerList} 
                            save="value"
                            fontFamily='Poppins-Regular'
                            placeholder="Customers"
                        />
                    </View>
                    <View style={{ marginVertical: 15 }}>
                        <Text style={styles.dropdownTitle}>
                            Transaction Type
                        </Text>
                        <SelectList 
                            setSelected={(val) => setTransactionType(val)} 
                            data={transactionTypeList} 
                            save="key"
                            fontFamily='Poppins-Regular'
                            placeholder="Transaction"
                        />
                    </View>
                    <View>
                        <Text style={styles.dropdownTitle}>
                            Add New Product
                        </Text>
                        <View style={{ padding: 15, borderWidth: 1, borderRadius: 15 }}>
                            <View style={{ marginBottom: 15}}>
                                <Text style={styles.dropdownTitle}>
                                    Inventory List
                                </Text>
                                <SelectList 
                                    setSelected={(val) => setSelectedInventory(val)} 
                                    data={inventoryList}
                                    save="price"
                                    fontFamily='Poppins-Regular'
                                    placeholder="Inventory"
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.dropdownContent}>
                                        Price
                                    </Text>
                                    <Text style={{ marginTop: -3 }}>
                                        IDR {(selectedInventory === null ? 0 : inventoryList[selectedInventory - 1].price )}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.dropdownContent}>
                                        Quantity
                                    </Text>
                                    <View style={{ marginTop: -3 }}></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default NewTransactionFormPage
const styles = StyleSheet.create({
    dropdownTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#505383',
        marginBottom: 2
    },
    dropdownContent: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    }
})