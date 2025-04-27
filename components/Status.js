import React, { useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'

const Status = () => {

    const [barStyle, setbarStyle] = useState("orange")
    const [hide, setHide] = useState(false)


    const handleToggle=()=>{
        setHide(!hide)
    }

    const handleStyleUpdate=()=>{
        setbarStyle("red")
    }
    return (
        <View style={styles.main}>
            <Text>Status Bar color</Text>
            <StatusBar
                backgroundColor={barStyle}
                hidden={hide}
            />
            <Button title='Toggle Status Bar' onPress={handleToggle}/>
            <Button title='Update STYle' onPress={handleStyleUpdate}/>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {

        justifyContent: "center"
    }
})
export default Status
