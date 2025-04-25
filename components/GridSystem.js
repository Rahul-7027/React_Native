import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GridSystem = () => {
    const users = [
        { id: 1, username: 'john_doe' },
        { id: 2, username: 'jane_smith' },
        { id: 3, username: 'michael_brown' },
        { id: 4, username: 'emily_jones' },
        { id: 5, username: 'david_clark' },
        { id: 6, username: 'john_doe' },
        { id: 7, username: 'jane_smith' },
        { id: 8, username: 'michael_brown' },
        { id: 9, username: 'emily_jones' },
        { id: 10, username: 'david_clark' }
    ]
  return (
    <View>
        <Text>
            Grid System in Native
        </Text>
        <View style={styles.containerView}>
            {users.map((item)=>
            <Text style={styles.textview} key={item.id}>{item.username}</Text>
            
            )}
           
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    containerView:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap"
    },
    textview:{
        backgroundColor:"red",
        borderWidth:2,
        borderColor:"green",
        padding:10,
        margin:12,
        height:80,
        width:90,
        textAlign:"center",
        textAlignVertical:"center"
    }
})

export default GridSystem
