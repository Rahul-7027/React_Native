import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Demo extends Component {
  render() {
    return (
      <View>
        <Text>Student in Class Component</Text>
        <Text>My name is {this.props.name}</Text>
      </View>
    )
  }
}
