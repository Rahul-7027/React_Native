import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const PlatFormDevice = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
      
      {/* Platform-specific text and styling */}
      {/* <Text style={{ fontSize: 30 }}>Platform Detect</Text>
      <Text style={{ fontSize: 20 }}>My Platform is {Platform.OS}</Text> */}
      
      {/* Conditional rendering based on platform */}
      {/* {Platform.OS === "android" ? (
        <View style={{ backgroundColor: "green", width: 50, height: 50 }}></View>
      ) : (
        <View style={{ backgroundColor: "red", width: 50, height: 50 }}></View>
      )}

      <Text style={styles.text}>Hello OS</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Platform.OS === "android" ? "yellow" : "red",
    fontSize: 20,
    marginTop: 10,
  },
});

export default PlatFormDevice;
