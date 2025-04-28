import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginTab from './LoginTab';
import SiginTab from './SiginTab';

const Tab = createBottomTabNavigator();
const TabNavigationUser = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="LogIn" component={LoginTab} />
                <Tab.Screen name="SigIn" component={SiginTab} />
                <Tab.Screen name="Customer" component={Customer} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Customer=()=>{
    return(
        <View><Text>Customer Tab</Text></View>
    )
}


export default TabNavigationUser
