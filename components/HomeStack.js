import React, { useState } from 'react'
import { Button, Text, View,TextInput } from 'react-native'
import AboutStack from './AboutStack'

const HomeStack = ({ navigation }) => {
    const [text,setText]=useState("")
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Home Screen</Text>
            <TextInput onChangeText={(text)=>setText(text)} placeholder='ENter Your name'/>
            <Button title='Go to about Page' onPress={() => navigation.navigate('About',{text})} />
        </View>
    )
}




export default HomeStack
