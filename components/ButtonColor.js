import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const ButtonColor = () => {
  return (
    <View>
      <TouchableHighlight>
        <Text style={styles.primary}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.secondary}>Secondary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.success}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.btn}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.warning}>Warning</Text>
      </TouchableHighlight>

      
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  btn: {
    color:"white",
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
  success:{
      color:"white",
      backgroundColor: "green",
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
    primary:{
      color:"white",
      backgroundColor: "blue",
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
    secondary:{
      color:"white",
      backgroundColor: "grey",
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
    warning:{
      color:"black",
      backgroundColor: "yellow",
      textAlign: "center",
      fontSize: 23,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      opacity: 1,
      elevation: 1,
      shadowColor: "blue",
      cursor: "pointer"
    }
})

export default ButtonColor
