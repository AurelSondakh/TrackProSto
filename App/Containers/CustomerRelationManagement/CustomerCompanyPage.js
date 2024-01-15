/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, StatusBar, Dimensions, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ActionCustomer } from '../../Redux/Actions/Customers'
import GetLoginToken from '../../Utility/GetLoginToken';
import Spinner from 'react-native-loading-spinner-overlay';

// Components
import CompanyList from '../../Components/CompanyList'
import CustomerList from '../../Components/CustomerList'

const width = Dimensions.get('screen').width

const CustomerCompanyPage = () => {

    const navigation = useNavigation()
    const companyData = [
        {
            "id": "d84c6493-a14e-4bdf-9970-49a00144900f",
            "company_name": "dummyCompany",
            "address": "Jalan Sudirman No. 123, Jakarta Pusat",
            "email": "dummyCompany@dummyCompany.com",
            "phone_number": "09127865334",
            "is_active": true,
            "created_at": "2023-11-04T15:32:07.831057Z",
            "updated_at": "2023-11-04T15:32:07.831057Z",
            "created_by": "bor",
            "updated_by": ""
        },
        {
            "id": "34d2be38-40c6-458b-8267-f8dfbe34206d",
            "company_name": "dummyCompanyAgain",
            "address": "Jalan Thamrin No. 456, Jakarta Pusat",
            "email": "dummyCompany@dummyCompany.com",
            "phone_number": "09127865334",
            "is_active": true,
            "created_at": "2023-11-04T08:33:03.638214Z",
            "updated_at": "2023-11-04T08:33:03.638214Z",
            "created_by": "bor",
            "updated_by": ""
        },
        {
            "id": "733dfd3f-106a-4391-91a5-ac05288bdc1e",
            "company_name": "dummyCompanyAgain",
            "address": "Jalan Gatot Subroto No. 789, Jakarta Selatan",
            "email": "dummyCompany@dummyCompany.com",
            "phone_number": "09127865334",
            "is_active": true,
            "created_at": "2023-11-04T08:33:09.335133Z",
            "updated_at": "2023-11-04T08:33:09.335133Z",
            "created_by": "bor",
            "updated_by": ""
        }
    ]

    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: 'Customer' },
      { key: 'second', title: 'Company' },
    ]);

    const dispatch = useDispatch();
    const { customerList, customerSpinner } = useSelector((state) => state.customer);

    const getCustomerList = async () => {
        try {
            const loginToken = await GetLoginToken()
            dispatch(
                ActionCustomer.GetAllCustomer(
                   loginToken
                ),
            );
        } catch (error) {
          console.log('getLoginTokenError: ', error);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCustomerList()
        })
        return unsubscribe
    }, [dispatch, navigation])

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#F2F1FE' }} >
            <View style={{ marginHorizontal: 15, marginTop: 20, paddingBottom: 8 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14 }}>Customer Overview</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NewCustomerFormPage')} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                    <AntDesign name="pluscircle" color={'#FFF'} size={18} style={{ marginRight: 10,alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF', alignSelf: 'center' }}>
                        Add New Customer
                    </Text>
                </TouchableOpacity>
                {/* <Text style={{ fontFamily: 'Popping-Regular', fontSize: 13 }}>Total Inventory Value: {totalStockInventory} Kg</Text> */}
            </View>
            <FlatList
                style={{ marginBottom: 70 }}
                nestedScrollEnabled
                data={customerList?.data?.customers}
                renderItem={({item}) => <CustomerList item={item} swipe={true} />}
                keyExtractor={item => item.customer_id}
            />
        </View>
      );
    
    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#F2F1FE' }} >
            <View style={{ marginHorizontal: 15, marginTop: 20, paddingBottom: 8 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14 }}>Company Overview</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NewCompanyFormPage')} style={{ padding: 10, backgroundColor: '#505383', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                    <AntDesign name="pluscircle" color={'#FFF'} size={18} style={{ marginRight: 10,alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF', alignSelf: 'center' }}>
                        Add New Company
                    </Text>
                </TouchableOpacity>
                {/* <Text style={{ fontFamily: 'Popping-Regular', fontSize: 13 }}>Total Inventory Value: {totalStockInventory} Kg</Text> */}
            </View>
            {console.log(customerList)}
            <FlatList
                style={{ marginBottom: 70 }}
                nestedScrollEnabled
                data={companyData}
                renderItem={({item}) => <CompanyList item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
    
    const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'#FFF'}
            inactiveColor={'#ACB1CA'}
            indicatorStyle={{ backgroundColor: 'white', height: 4, width: 120, marginLeft: (Dimensions.get('window').width / 2 - 120) / 2 }}
            labelStyle={{fontFamily: 'Poppins-SemiBold', fontSize: 14, textTransform: 'none'}}
            style={{backgroundColor:'#505383', paddingBottom: 0, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}
        />
    );

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
                    Customer Relationship Management
                </Text>
                <MaterialIcons name='switch-account' size={36} color={'#FFF'} style={{ marginTop: 12 }} />
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={{ width: width }}
            />
            <Spinner
                visible={customerSpinner}
                textContent={'Loading...'}
                textStyle={{ color: '#FFF' }}
            />
        </View>
    )
}

export default CustomerCompanyPage

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
        paddingBottom: 10,
        // borderBottomLeftRadius: 50
    }
})