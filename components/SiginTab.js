import React, { useState, useEffect } from 'react'
import { FlatList, Text, View,StyleSheet } from 'react-native'

const SiginTab = () => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let response = await data.json();
    setData(response)
  }
useEffect(() => {
  fetchData()
}, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>
                {item.body}
              </Text>
            </View>
          </View>)
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    margin: 16,
    overflow: 'hidden'
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default SiginTab
