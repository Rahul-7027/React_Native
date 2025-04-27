import React, { useState } from 'react'
import { Button, StyleSheet, View,Text } from 'react-native'

const CustomModal = () => {

    const [modalOpen,setmodalOpen]=useState(false)
    return (
        <View style={styles.container}>
            {modalOpen?<View style={styles.modal}>
                <View style={styles.body}>
                    <Text>Hello World</Text>
                    <Button title='Close Button' onPress={()=>setmodalOpen(false)}/>
                </View>
            </View>:null}
            <Button title='Open Dialog' onPress={()=>setmodalOpen(true)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        justifyContent: "flex-end"
    },
    modal: {
        // flex: 1,
        backgroundColor: "rgba(50,50,50,50",
        justifyContent:"center",
        alignItems:"center"
    },
    body:{
        backgroundColor:"red",
        height:300,
        width:300,
        padding:20,
        justifyContent:"center",borderRadius:10
    }
})

export default CustomModal
