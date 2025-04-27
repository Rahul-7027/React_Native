import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const ButtonColor = () => {
  return (
    <View>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.btn,styles.secondary]}>Secondary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.btn,styles.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.btn,styles.btn]}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.btn,styles.warning]}>Warning</Text>
      </TouchableHighlight>


    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  btn: {
    color: "white",
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 23,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    opacity: 1,
    elevation: 1,
    shadowColor: "blue",
    cursor: "pointer"
  },
  success: { backgroundColor: "green" },
  primary: { backgroundColor: "blue" },
  secondary: { backgroundColor: "grey" },
  warning: { backgroundColor: "yellow",color:"black" }
})

export default ButtonColor
