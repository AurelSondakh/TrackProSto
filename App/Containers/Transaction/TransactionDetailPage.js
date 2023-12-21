/* eslint-disable prettier/prettier */
import React from "react"
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import IonIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native"

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const TransactionDetailPage = (props) => {
    console.log(props)
    const navigation = useNavigation()
    const item = props?.route?.params?.item

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const paymentListData = [
        {
            "id": "0e065bd0-28ac-4113-8e65-92b8d6c867b7",
            "inv_number": "INV-20231106-0001",
            "payment_date": "2023-11-06T00:00:00Z",
            "amount": 460000,
            "created_at": "2023-11-06T13:52:59.062928Z",
            "created_by": "babyacu",
            "updated_at": "2023-11-06T13:52:59.062928Z",
            "updated_by": "babyacu"
        },
        {
            "id": "0e065bd0-28ac-4113-8e65-92b8d6c867b78",
            "inv_number": "INV-20231106-0001",
            "payment_date": "2023-11-07T00:00:00Z",
            "amount": 660000,
            "created_at": "2023-11-06T13:52:59.062928Z",
            "created_by": "babyacu",
            "updated_at": "2023-11-06T13:52:59.062928Z",
            "updated_by": "babyacu"
        }
    ]

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

    const getItemDetail = (item) => {
        let transactionArray = item?.transaction_details;
        return transactionArray.map((transactionItem, index) => (
            <View style={{ marginHorizontal: 15, marginTop: 5, borderBottomWidth: index !== transactionArray.length - 1 ? 2 : 0, borderBottomColor: '#CACEDD' }} key={transactionItem.id}>
                {console.log(transactionItem.meat_name)}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.subTitle}>
                            Meat Name
                        </Text>
                        <Text style={styles.value}>{capitalizeFirstLetter(transactionItem?.meat_name)}</Text>
                    </View>
                    <View>
                        <Text style={[styles.subTitle, { textAlign: 'right' }]}>
                            Total Weight
                        </Text>
                        <Text style={[styles.value, {textAlign: 'right'}]}>{transactionItem?.qty} Kg</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                    <View>
                        <Text style={styles.subTitle}>
                            Price
                        </Text>
                        <Text style={styles.value}>IDR {numberWithCommas(transactionItem?.price)}</Text>
                    </View>
                    <View>
                        <Text style={[styles.subTitle, { textAlign: 'right' }]}>
                            Total
                        </Text>
                        <Text style={[styles.value, {textAlign: 'right'}]}>IDR {numberWithCommas(transactionItem?.total)}</Text>
                    </View>
                </View>
            </View>
        ));
    }

    const setDate = (paymentItem) => {
        let paymentDate = new Date(paymentItem.payment_date)
        let formattedDate = paymentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        });
        return formattedDate
    }

    const getPaymentDetail = (item) => {
        console.log(item)
        return paymentListData.map((paymentItem, index) => (
            <View style={{ marginHorizontal: 15, marginTop: 5, borderBottomWidth: index !== paymentListData.length - 1 ? 2 : 0, borderBottomColor: '#CACEDD' }} key={paymentItem.id}>
                {console.log(paymentItem)}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                    <View>
                        <Text style={styles.subTitle}>
                            Payment Date
                        </Text>
                        <Text style={styles.value}>{setDate(paymentItem)}</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>
                            Payment Amount
                        </Text>
                        <Text style={styles.value}>IDR {numberWithCommas(paymentItem?.amount)}</Text>
                    </View>
                </View>
            </View>
        ));
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#505383' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name="arrow-back" size={28} color={'#F1F2FE'} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F1F2FE', fontSize: 20, marginLeft: 10 }}>Transaction Detail</Text>
            </View>
            <View style={{ backgroundColor: '#F1F2FE', borderTopLeftRadius: 50, borderTopRightRadius: 50, flex: 1, marginTop: 35 }}>
                <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#CACEDD', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#505383' }}>
                                Invoice Number
                            </Text>
                            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: -5 }}>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20 ,  maxWidth: width / 1.9}}>
                                    {item?.invoice_number}
                                </Text>
                                <View style={{ padding: 0, borderRadius: 10, backgroundColor: item.payment_status === 'unpaid' ? '#ffc300' : '#04AD1F', width: 70, alignItems: 'center', alignSelf: 'center', marginLeft: 10, marginTop: -5 }}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12, color: '#FFF' }}>{item.payment_status === 'unpaid' ? 'Partly' : capitalizeFirstLetter(item.payment_status)}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{alignSelf: 'center',  }}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <FontAwesome6 name='file-invoice' size={34} color={'#505383'} style={{}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ paddingHorizontal: 30, marginTop: 10 }}>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#CACEDD', paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#505383' }}>
                                Customer Detail
                            </Text>
                            <MaterialCommunityIcon name="account-details" size={26} color={'#505383'} style={{ marginLeft: 5, marginTop: -2 }} />
                        </View>
                        <View style={{ marginHorizontal: 15, marginBottom: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                <View>
                                    <Text style={[styles.subTitle]}>
                                        Customer Name
                                    </Text>
                                    <Text style={[styles.value, {width: width / 3}]}>{capitalizeFirstLetter(item?.name)}</Text>
                                </View>
                                <View>
                                    <Text style={[styles.subTitle, { textAlign: 'right' }]}>
                                        Customer Phone Number
                                    </Text>
                                    <Text style={[styles.value, {textAlign: 'right'}]}>{item?.phone_number}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.subTitle]}>
                                    Company Name
                                </Text>
                                <Text style={[styles.value]}>{capitalizeFirstLetter(item?.company)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                <View>
                                    <Text style={styles.subTitle}>
                                        Company Email
                                    </Text>
                                    <Text style={styles.value}>{item?.email}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.subTitle]}>
                                    Customer Address
                                </Text>
                                <Text style={[styles.value]}>{capitalizeFirstLetter(item?.address)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#CACEDD', paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#505383' }}>
                                Item Detail
                            </Text>
                            <MaterialIcons name="payments" size={24} color={'#505383'} style={{ marginLeft: 5, marginTop: -2 }} />
                        </View>
                        {getItemDetail(item)}
                    </View>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#CACEDD', paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#505383' }}>
                                Payment Detail
                            </Text>
                            <MaterialIcons name="payments" size={24} color={'#505383'} style={{ marginLeft: 5, marginTop: -2 }} />
                        </View>
                        {getPaymentDetail(item)}
                        <View style={{ marginBottom: 5, marginHorizontal: 10 }}>
                            <TouchableOpacity disabled={(item.debt) !== 0 ? false : true} onPress={() => navigation.navigate('NewCreditPaymentFormPage')} style={{ padding: 8, backgroundColor: (item.debt) !== 0 ? '#505383' : '#04AD1F', borderRadius: 10, flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
                                {(item.debt !== 0)
                                    ? <><AntDesign name="pluscircle" color={'#FFF'} size={18} style={{ marginRight: 10, alignSelf: 'center' }} /><Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF', alignSelf: 'center' }}>
                                        Add New Credit Payment
                                    </Text></>
                                    : <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#FFF', alignSelf: 'center' }}>
                                        Settled
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#CACEDD', paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#505383' }}>
                                Transaction Detail
                            </Text>
                            <MaterialCommunityIcon name="inbox-full" size={24} color={'#505383'} style={{ marginLeft: 5, marginTop: -2 }} />
                        </View>
                        <View style={{ marginHorizontal: 15, marginTop: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.subTitle}>
                                    Transaction Type:
                                </Text>
                                <Text style={[styles.value, {color: (item?.tx_type === 'in') ? '#04AD1F' : '#E93939', fontSize: 15}]}>
                                    {capitalizeFirstLetter(item?.tx_type)}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.subTitle}>
                                    Total Amount:
                                </Text>
                                <Text style={[styles.value, {fontSize: 15}]}>
                                    IDR {numberWithCommas(item?.total)}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.subTitle}>
                                    Paid Amount:
                                </Text>
                                <Text style={[styles.value, {color: '#04AD1F', fontSize: 15}]}>
                                    IDR {numberWithCommas(item?.payment_amount)}
                                </Text>
                            </View>
                            {(item?.payment_status === 'unpaid')
                                ? <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={styles.subTitle}>
                                        Outstanding Amount:
                                    </Text>
                                    <Text style={[styles.value, {color: '#E93939', fontSize: 15}]}>
                                        IDR {numberWithCommas(item?.debt)}
                                    </Text>
                                </View>
                                : null
                            }
                        </View>
                    </View>
                </ScrollView>
                {/* <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#505383' }}>
                            Invoice Detail
                        </Text>
                        <MaterialCommunityIcon name="inbox-full" size={24} color={'#505383'} style={{ marginLeft: 5, marginTop: -2 }} />
                    </View>
                    <View style={{ marginHorizontal: 15, marginTop: 5 }}>
                        <Text style={styles.subTitle}>
                            Invoice Date: <Text style={styles.value}>{dateFormat(item?.date)}</Text>
                        </Text>
                        <Text style={styles.subTitle}>
                            Transaction Type: <Text style={[styles.value, {color: (item?.tx_type === 'in') ? '#04AD1F' : '#E93939'}]}>{capitalizeFirstLetter(item?.tx_type)} Stock</Text>
                        </Text>
                        <Text style={[styles.subTitle]}>
                            Total Amount: <Text style={[styles.value, {color: '#505383'}]}>IDR {numberWithCommas(item?.total)}</Text>
                        </Text>
                        <Text style={styles.subTitle}>
                            Paid Amount: <Text style={[styles.value, {color: '#04AD1F'}]}>IDR {numberWithCommas(item?.payment_amount)}</Text>
                        </Text>
                        {(item?.payment_status === 'unpaid')
                            ? <Text style={styles.subTitle}>
                                Debt Amount: <Text style={[styles.value, {color: '#E93939'}]}>IDR {numberWithCommas(item?.debt)}</Text>
                            </Text>
                            : null
                        }
                    </View>
                </View> */}
            </View>
        </View>
    )
}

export default TransactionDetailPage

const styles = StyleSheet.create({
    subTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#505383',
    },
    value: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#000',
        marginTop: -5
    }
})