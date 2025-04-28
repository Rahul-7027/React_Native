import React from 'react'
import { Text, View, FlatList,StyleSheet } from 'react-native'

const FlatListData = () => {
  const users = [
    { id: 1, username: 'john_doe' },
    { id: 2, username: 'jane_smith' },
    { id: 3, username: 'michael_brown' },
    { id: 4, username: 'emily_jones' },
    { id: 5, username: 'david_clark' }
  ]
  return (
    <View>
      <Text>Hello Flat List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.username}</Text>)}
      />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginTop: 50
    },
    item: {
      fontSize: 18,
      paddingVertical: 10,
      color:"black",
      borderColor:"red",
      borderWidth:2,
      margin:12,
      backgroundColor:"blue",
      textAlign:"center"
    }
  });

export default FlatListData
