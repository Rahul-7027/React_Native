import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeStack = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Home Screen</Text>
            <Button title='Go to about Page' onPress={() => navigation.navigate('About')} />
        </View>
    )
}

export const About = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>About Screen</Text>
        </View>
    )
}



export default HomeStack
