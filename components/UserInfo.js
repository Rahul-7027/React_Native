import React, { useState ,useEffect} from 'react'
import { StyleSheet, Text, TextInput, View,Button } from 'react-native'

const UserInfo = () => {
    const [pass, setpass] = useState(false)

    const handlePass=()=>{
        setpass(!pass)
    }

    useEffect(() => {

      return () => {
        console.log("We are unmounting")
      }
    })
    
  return (
    <View>
        <Text style={styles.text}>Hello world</Text>
        <TextInput placeholder='Enter your password' secureTextEntry={pass}/>
        <Button title={pass?"Show":"Hide"} onPress={handlePass}/>
    </View>
  )
}

const styles=StyleSheet.create({
    text:{
        color:"green",
        fontSize:30,
        textAlign:"center"
    }
})

export default UserInfo
