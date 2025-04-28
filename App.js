import React from 'react'
import { Button, Text, View } from 'react-native'
import ResponsiveLayout from './components/ResponsiveLayout'
import ButtonColor from './components/ButtonColor'
import RadioButton from './components/RadioButton'
import DynamicRadio from './components/DynamicRadio'
import LoaderActivity from './components/LoaderActivity'
import ModalNative from './components/ModalNative'
import PressableEvent from './components/PressableEvent'
import Status from './components/Status'
import PlatFormDevice from './components/PlatFormDevice'
import CustomModal from './components/CustomModal'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Home=({navigation})=>{
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title='Go to about Page' onPress={()=>{navigation.navigate("About")}}/>
    </View>
  )
}

const About=()=>{
  return(
    <View>
      <Text>About Screen</Text>
    </View>
  )
}

export default App
