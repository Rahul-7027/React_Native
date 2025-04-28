import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import About from "./HomeStack"



const Stack = createStackNavigator();
const StackNavigationUser = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeStack} />
                <Stack.Screen name='About' component={About} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigationUser
