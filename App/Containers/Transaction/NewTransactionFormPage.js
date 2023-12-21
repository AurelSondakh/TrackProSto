/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, FlatList, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SelectList } from 'react-native-dropdown-select-list'

import AddedProductList from '../../Components/AddedProductList'

const width = Dimensions.get('screen').width

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
    const [transactionType, setTransactionType] = useState(null)
    const [inventoryQuantity, setInventoryQuantity] = useState(1)
    const [currentSelectedProductPrice, setCurrentSelectedProductPrice] = useState(0)
    const [disableAddProductButton, setDisableAddProductButton] = useState(true)
    const [addedProductData, setAddedProductData] = useState([])
    const [disableAddTransactionButton, setDisableAddTransactionButton] = useState(true)

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    
    const addQuantity = () => {
        setInventoryQuantity(inventoryQuantity + 1)
    }

    const substractQuantity = () => {
        setInventoryQuantity(inventoryQuantity - 1)
    }

    const resetNewProductForm = () => {
        setSelectedInventory(null)
        setInventoryQuantity(1)
        setCurrentSelectedProductPrice(0)
        setDisableAddProductButton(true)
    }

    const addProductList = () => {
        let data = {
            meatName: inventoryList[selectedInventory - 1]?.value,
            price: currentSelectedProductPrice,
            quantity: inventoryQuantity
        }
        setAddedProductData(addedProductData => [...addedProductData, data])
        resetNewProductForm()
    }

    const addedProduct = () => {
        return (
            <View style={{ marginTop: 15 }}>
                <Text style={styles.dropdownTitle}>
                    Added Product
                </Text>
                <FlatList
                    style={{ marginBottom: 0 }}
                    nestedScrollEnabled={true}
                    data={addedProductData}
                    renderItem={({item}) => <AddedProductList item={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    useEffect(() => {
        console.log('Selected Inventory: ', selectedInventory)
        if(selectedInventory !== null) {
            setDisableAddProductButton(false)
        } else setDisableAddProductButton(true)
    }, [selectedInventory])

    useEffect(() => {
        if(selectedCustomer !== null && transactionType !== null && addedProductData.length > 0) {
            setDisableAddTransactionButton(false)
        } else {
            setDisableAddTransactionButton(true)
        }
    }, [selectedCustomer, addedProductData, transactionType])

    useEffect(() => {
        setCurrentSelectedProductPrice(inventoryList[selectedInventory - 1]?.price * inventoryQuantity)
    }, [inventoryQuantity, inventoryList])

    return (
        <View style={{ flex: 1, backgroundColor: '#505383' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Add New Transaction</Text>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F2FE', marginTop: 35, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
                <View style={{ paddingHorizontal: 30, marginTop: 50, paddingBottom: 0 }}>
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
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#505383' }}>
                                        IDR {(selectedInventory === null ? 0 : numberWithCommas(currentSelectedProductPrice) )}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={[styles.dropdownContent, { textAlign: 'center' }]}>
                                        Quantity
                                    </Text>
                                    <View style={{ marginTop: -3, flexDirection: 'row', alignItems: 'center' }}>
                                        <View>
                                            <TouchableOpacity disabled={inventoryQuantity === 1} onPress={() => substractQuantity()}>
                                                <AntDesign name='minuscircle' size={24} color={(inventoryQuantity > 1) ? '#505383' : '#CACEDD'} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginHorizontal: 10, borderWidth: 1, borderRadius: 10, width: 40, height: 40 }}>
                                            <TextInput
                                                keyboardType='numeric'
                                                onChangeText={(text) => {
                                                    setInventoryQuantity(text)
                                                }}
                                                style={{ textAlign: 'center' }}
                                                value={`${inventoryQuantity}`}
                                            />
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => addQuantity()}>
                                                <AntDesign name='pluscircle' size={24} color={'#505383'} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }} >
                                <TouchableOpacity onPress={() => addProductList()} disabled={disableAddProductButton} style={{ backgroundColor: (disableAddProductButton) ? '#CACEDD' : '#505383', padding: 10, paddingHorizontal: 40, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                        <IonIcons name='bag-add' size={24} color={'#FFF'} style={{ marginRight: 5 }} />
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>Add Product</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {addedProduct()}
                    <View style={{ marginTop: 15, marginBottom: 25 }} >
                        <TouchableOpacity onPress={() => {}} disabled={disableAddTransactionButton} style={{ backgroundColor: (disableAddTransactionButton) ? '#CACEDD' : '#505383', padding: 10, paddingHorizontal: 40, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <IonIcons name='bag-add' size={24} color={'#FFF'} style={{ marginRight: 5 }} />
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#FFF' }}>Add Transaction</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{ flex: 0, backgroundColor: '#F6F7F8', paddingHorizontal: 30, paddingBottom: 15, borderTopWidth: 2, borderColor: '#CACEDD'  }}>
                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: '#181A45' }}>Total</Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: '#505383', maxWidth: width / 2 }}>IDR 500.000.000</Text>
                </View>
            </View>
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