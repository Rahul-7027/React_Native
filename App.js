import React, { useState } from 'react'
import { View } from 'react-native'
import UserData from './components/UserData'
import NativeStyle from './components/NativeStyle'
import InputData1 from './components/InputData1'
import FormData from './components/FormData'
import FlatListData from './components/FlatListData'
import CustomList from './components/CustomList'
import GridSystem from './components/GridSystem'
import LoopList from './components/LoopList'
import SectionListData from './components/SectionListData'



const App = () => {



  return (
    <View >
      {/* <FlatListData/> */}
      {/* <CustomList/> */}
      {/* <GridSystem/> */}
      {/* <LoopList/> */}
      <SectionListData/>
    </View>
  )
}


export default App



