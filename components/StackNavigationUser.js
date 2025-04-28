import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeStack from './HomeStack';
import { About } from './HomeStack';
import { Button, Text, View } from 'react-native'

const Stack = createStackNavigator();

const StackNavigationUser = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "red", },
                    headerTitleStyle: { fontSize: 30, },
                    headerTintColor: { color: "white" }
                }}>
                <Stack.Screen
                    options={{
                        headerLeft: () => (
                            <Button title='Left' onPress={() => alert('Left button pressed')} />
                        ),
                        headerRight: () => (
                            <Button title='Right' onPress={() => alert('Right button pressed')} />
                        ),
                        headerTitle: 'Your Screen Title',
                        headerTintColor: "white"
                    }}
                    name='Home' component={HomeStack} />
                <Stack.Screen name='About' component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigationUser
