import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1} >
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,

  },
  box1: {
    height: height * 0.50, backgroundColor: "red", borderWidth: 2, borderColor: "green", flexDirection: "row"
  },
  box2: {
    height: height * 0.25, backgroundColor: "pink", borderWidth: 2, borderColor: "green"
  },
  box3: {
    height: height * 0.25, backgroundColor: "yellow", borderWidth: 2, borderColor: "green"
  },
  innerBox1: {
    flex: 1,
    backgroundColor: "green",
    margin: 10,
  },
  innerBox2: {
    flex: 1,
    backgroundColor: "lightblue",
    margin: 10,
  },
  innerBox3: {
    flex: 1,
    backgroundColor: "blue",
    margin: 10,
  }
})
export default App;
