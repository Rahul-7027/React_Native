import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Demo from './Demo'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: 20,

        }
    }

    HandleSubmit = () => {
        console.warn("Hello World")
    }
    handleChange = (text) => {
        this.setState({ name: text })
    }
    render() {
        return (
            <View>
                <Text>Hello Class Compoent</Text>
                <Text>My Name is {this.state.name} and age is {this.state.age}</Text>
                <TextInput placeholder='Enter your text here' onChangeText={this.handleChange} />
                <Button title='Submit' onPress={this.HandleSubmit} />
                <View>
                    <Demo name={this.state.name}/>
                </View>
            </View>
        )
    }
}
