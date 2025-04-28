import React from 'react'
import { View, Text, Alert } from 'react-native'

const AboutStack = (props) => {
    const name = props.route.params.text
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>About Screen</Text>
            <Text style={{ fontSize: 24 }}>My name is {name}</Text>
        </View>
    )
}

export default AboutStack
