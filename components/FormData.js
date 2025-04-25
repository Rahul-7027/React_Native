import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const FormData = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        password: ""
    })
    const [display, setDisplay] = useState(false)
    const [eyePassword, setPassword] = useState(true)
    const handleChange = (field, value) => {
        setData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        console.log(1111, data)
        setDisplay(true)

    }

    const Clear = () => {
        setData({
            name: "",
            phone: "",
            email: "",
            address: ""
        })
        setDisplay(false)
    }

    const handlePassword = () => {
        setPassword(!eyePassword)
    }
    return (
        <View>
            <Text>User Data Form</Text>
            {/* <form> */}
            <TextInput style={styles.textinput} onChangeText={(text) => handleChange('name', text)} name={data.name} placeholder='Enter your fullname' />
            <TextInput style={styles.textinput} onChangeText={(text) => handleChange('phone', text)} name={data.phone} placeholder='Enter your Phone Number' />
            <TextInput style={styles.textinput} onChangeText={(text) => handleChange('email', text)} name={data.email} placeholder='Enter your Email id' />
            <TextInput style={styles.textinput} onChangeText={(text) => handleChange('address', text)} name={data.address} placeholder='Enter your Address' />
            <TextInput style={styles.textinput} onChangeText={(text) => handleChange('password', text)} name={data.password} placeholder='Enter your Password' secureTextEntry={eyePassword} />

            {/* </form> */}
            <Button title='eye' onPress={handlePassword} />
            <View style={styles.btn} >
                <Button title='Submit' onPress={handleSubmit} />
            </View>
            <View style={styles.btn} >
                <Button title='Clear' onPress={Clear} />
            </View>

            {display ? <View>
                <Text>My name is {data.name}</Text>
                <Text>My email is {data.email}</Text>
                <Text>My Phone is {data.phone}</Text>
                <Text>My Address is {data.address}</Text>
            </View> : null}

        </View>
    )
}

export default FormData


const styles = StyleSheet.create({
    textinput: {
        borderWidth: 2,
        borderColor: "red",
        margin: 10
    },
    btn: {
        margin: 12
    }
})
