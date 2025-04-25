import React from 'react'
import { Text, View } from 'react-native'

const UserData = (props) => {
  return (
    <View>
        <Text>I am Learning in {props.name}</Text>
          <Text style={{ fontSize: 22 }}>Name : Rahul Bhati</Text>
          <Text style={{ fontSize: 22 }}>Age : 26</Text>
          <Text style={{ fontSize: 22 }}>I am learning for React Native there are same excalty for React JS</Text>
        </View>
  )
}

export default UserData
