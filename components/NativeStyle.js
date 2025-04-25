import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import ExternalCss from './ExternalCss'



const NativeStyle = () => {
  return (
    <View>
        {/* inline css  */}
        <Text style={{color:"red",fontSize:30,}}>Hello Rahul</Text>

        {/* internal CSS  */}
        <Text style={style.books}>Hello Books</Text>

        {/* External CSS  */}
        <Text style={ExternalCss.container}>External Css Data</Text>

        {/* all Styles  */}
        <Text style={[ExternalCss.newall,{fontSize:25},style.all]}>My all Style</Text>
        <Text style={[ExternalCss.newall,{fontSize:25},style.all]}>My all Style</Text>
    </View>
  )
}


const style=StyleSheet.create({
    books:{
        color:"red",
        fontSize:40,
        textAlign:"center",
        borderRadius:20,
        border:10,
        backgroundColor:"green",
        fontFamily:"italic"
    },
    all:{
        fontFamily: 'OpenSans-Regular',
    }
})
export default NativeStyle
