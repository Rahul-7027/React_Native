import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React from 'react'
import LoginTab from './components/LoginTab'
import SiginTab from './components/SiginTab'



const Tab = createMaterialTopTabNavigator()


const TopTabNavigationModel = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="LogIn" component={LoginTab} />
                <Tab.Screen name="SigIn" component={SiginTab} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TopTabNavigationModel
