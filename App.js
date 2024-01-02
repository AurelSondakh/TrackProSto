/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, Dimensions, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// Contatiners
import DashboardPage from './App/Containers/Dashboard/DashboardPage'
import InventoryPage from './App/Containers/Inventory/InventoryPage'
import TransactionPage from './App/Containers/Transaction/TransactionPage'
import TransactionDetailPage from './App/Containers/Transaction/TransactionDetailPage'
import NewInventoryFormPage from './App/Containers/Inventory/NewInventoryFormPage'
import EditInventoryFormPage from './App/Containers/Inventory/EditInventoryFormPage'
import CustomerCompanyPage from './App/Containers/CustomerRelationManagement/CustomerCompanyPage'
import NewCustomerFormPage from './App/Containers/CustomerRelationManagement/Customer/NewCustomerFormPage'
import NewCompanyFormPage from './App/Containers/CustomerRelationManagement/Company/NewCompanyFormPage'
import CustomerDetailPage from './App/Containers/CustomerRelationManagement/Customer/CustomerDetailPage'
import CreditPage from './App/Containers/Credit/CreditPage'
import EditCustomerFormPage from './App/Containers/CustomerRelationManagement/Customer/EditCustomerFormPage'
import CompanyDetailPage from './App/Containers/CustomerRelationManagement/Company/CompanyDetailPage'
import CustomerListByCompanyIdPage from './App/Containers/CustomerRelationManagement/Company/CustomerListByCompanyIdPage'
import EditCompanyFormPage from './App/Containers/CustomerRelationManagement/Company/EditCompanyFormPage'
import NewTransactionFormPage from './App/Containers/Transaction/NewTransactionFormPage'
import NewCreditPaymentFormPage from './App/Containers/Transaction/NewCreditPaymentFormPage'
import LoginPage from './App/Containers/Login/LoginPage'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const width = Dimensions.get('screen').width

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [width, 0]
            })
          }
        ]
      } 
    }
  }
}

const TabBar = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName='DashboardPage'
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: '#F6F7F8',
            borderTopWidth: 0,
            position: 'absolute',
            height: 64,
            flex: 1,
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 3,
            elevation: 5,
          }
        }}
      >
        <Tab.Screen
          name='DashboardPage' component={DashboardPage} options={{
            tabBarIcon: ({ focused }) => {
              const colorFocused = focused ? '#505383' : '#ACB1CA'
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <MaterialCommunityIcons name='home-variant' color={colorFocused} size={24} />
                  <Text style={{ fontSize: 10, fontFamily: 'Poppins-SemiBold', color: colorFocused, paddingTop: 4 }}>Home</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name='InventoryPage' component={InventoryPage} options={{
            tabBarIcon: ({ focused }) => {
              const colorFocused = focused ? '#505383' : '#ACB1CA'
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Octicons name='stack' color={colorFocused} size={24} />
                  <Text style={{ fontSize: 10, fontFamily: 'Poppins-SemiBold', color: colorFocused, paddingTop: 4 }}>Inventory</Text>
                </View>
              )
            }
          }}
        />
        {/* <Tab.Screen
          name='CustomerCompanyPage' component={CustomerCompanyPage} options={{
            tabBarIcon: ({ focused }) => {
              const colorFocused = focused ? '#505383' : '#ACB1CA'
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                    <View style={{ width: 70, height: 60, borderRadius: 100, backgroundColor: '#F6F7F8', alignItems: 'center' }}>
                      <MaterialCommunityIcons name='account-network' color={colorFocused} size={40} style={{ marginTop: 10 }} />
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-SemiBold', color: colorFocused, marginTop: 0  }}>CRM</Text>
                </View>
              )
            }
          }}
        /> */}
        <Tab.Screen
          name='CustomerCompanyPage' component={CustomerCompanyPage} options={{
            tabBarIcon: ({ focused }) => {
              const colorFocused = focused ? '#505383' : '#ACB1CA'
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name='switch-account' color={colorFocused} size={24} />
                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-SemiBold', color: colorFocused, paddingTop: 4  }}>CRM</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name='TransactionPage' component={TransactionPage} options={{
            tabBarIcon: ({ focused }) => {
              const colorFocused = focused ? '#505383' : '#ACB1CA'
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <MaterialIcons name='payments' color={colorFocused} size={24} />
                  <Text style={{ fontSize: 10, fontFamily: 'Poppins-SemiBold', color: colorFocused, paddingTop: 4 }}>Transaction</Text>
                </View>
              )
            }
          }}
        />
        {/* <Tab.Screen
          name='CreditPage' component={CreditPage} options={{
            tabBarIcon: ({ focused }) => {
              const colorFocused = focused ? '#505383' : '#ACB1CA'
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesome name='credit-card-alt' color={colorFocused} size={24} />
                  <Text style={{ fontSize: 10, fontFamily: 'Poppins-SemiBold', color: colorFocused, paddingTop: 4, textAlign: 'center' }}>Credit</Text>
                </View>
              )
            }
          }}
        /> */}
      </Tab.Navigator>
    </>
  )
}

const StackNavigator = () => (
  <Stack.Navigator initialRouteName='LoginPage' headerMode='none' >
    <Stack.Screen name='DashboardPage' component={DashboardPage} options={horizontalAnimation} />
    <Stack.Screen name='InventoryPage' component={InventoryPage} options={horizontalAnimation} />
    <Stack.Screen name='CustomerCompanyPage' component={CustomerCompanyPage} options={horizontalAnimation} />
    <Stack.Screen name='TransactionPage' component={TransactionPage} options={horizontalAnimation} />
    <Stack.Screen name='CreditPage' component={CreditPage} options={horizontalAnimation} />
    <Stack.Screen name='BottomTabNavigator' component={TabBar} options={horizontalAnimation} />
    <Stack.Screen name='TransactionDetailPage' component={TransactionDetailPage} options={horizontalAnimation} />
    <Stack.Screen name='NewInventoryFormPage' component={NewInventoryFormPage} options={horizontalAnimation} />
    <Stack.Screen name='EditInventoryFormPage' component={EditInventoryFormPage} options={horizontalAnimation} />
    <Stack.Screen name='NewCustomerFormPage' component={NewCustomerFormPage} options={horizontalAnimation} />
    <Stack.Screen name='NewCompanyFormPage' component={NewCompanyFormPage} options={horizontalAnimation} />
    <Stack.Screen name='CustomerDetailPage' component={CustomerDetailPage} options={horizontalAnimation} />
    <Stack.Screen name='EditCustomerFormPage' component={EditCustomerFormPage} options={horizontalAnimation} />
    <Stack.Screen name='CompanyDetailPage' component={CompanyDetailPage} options={horizontalAnimation} />
    <Stack.Screen name='CustomerListByCompanyIdPage' component={CustomerListByCompanyIdPage} options={horizontalAnimation} />
    <Stack.Screen name='EditCompanyFormPage' component={EditCompanyFormPage} options={horizontalAnimation} />
    <Stack.Screen name='NewTransactionFormPage' component={NewTransactionFormPage} options={horizontalAnimation} />
    <Stack.Screen name='NewCreditPaymentFormPage' component={NewCreditPaymentFormPage} options={horizontalAnimation} />  
    <Stack.Screen name='LoginPage' component={LoginPage} options={horizontalAnimation} />
  </Stack.Navigator>
)

const App = () => {

  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {
          StackNavigator()
        }
      </NavigationContainer>
    </SafeAreaView>
    </>
  )
}
export default App