import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const PressableEvent = () => {
    return (
        <View style={styles.main}>
            <Pressable
            onPress={()=>{console.warn("Normal press");}}
            onLongPress={()=>{console.warn("This is Long Press");}}
            onPressIn={()=>{console.warn("I am Press in");}}
            onPressOut={()=>{console.warn("I am Press Out");}}
            delayLongPress={()=>console.log("I am dealy Long press")}
            >
                <Text style={styles.pressBtn}>Pressable Events in React Native</Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    main: {
        // flex:1,
        textAlign: "center"
    },
    pressBtn: {
        backgroundColor: "red",
        color:"white",
        textAlign: "center",
        fontSize: 20,
        margin: 10,
        padding: 10,
        borderRadius: 10
    }
})

export default PressableEvent
