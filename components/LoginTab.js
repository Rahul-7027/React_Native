import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

const LoginTab = () => {

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
    <ScrollView>
      {data.map((item, index) => {
        console.log(item)
        return (
          <View style={styles.card} key={item.id}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>
                {item.body}
              </Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
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
export default LoginTab
