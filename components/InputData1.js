import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet, Button } from 'react-native'

const InputData1 = (props) => {
  const [data, setData] = useState("")

  const handleChange = (event) => {
    setData(event)
  }

  const handleSubmit = () => {
    console.log(data)
    setData("")
  }
  console.log(111, data)
  return (
    <View>
      <Text style={styles.textheading}>{props.name}</Text>
      <Text>Your Name is : {data}</Text>
      <TextInput style={styles.text} placeholder='Enter Your Text' value={data} onChangeText={handleChange} required></TextInput>
      <Button disabled={data.length === 0} style={styles.btn} onPress={handleSubmit} title='Submit' />
    </View>
  )
}

const styles = StyleSheet.create({
  textheading: {
    color: "white",
    backgroundColor: "black",
    fontSize: 23,
    textAlign: "center",
  },
  btn: {
    height: 20,
    width: 20,
    fontSize: 23
  },
  text:{
    borderColor:"red",
    borderWidth:2,
    marginTop:10
  }
})
export default InputData1
