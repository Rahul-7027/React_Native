import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const CustomList = () => {
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
        <View style={styles.container}>
            <Text style={{ textAlign: "center", fontSize: 20 }}>Custom List Show and List with map function</Text>
            <ScrollView>
                {users.map((item) => <Text style={styles.item} key={item.id}>{item.username}</Text>)}
            </ScrollView>
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
        color: "black",
        borderColor: "red",
        borderWidth: 2,
        margin: 12,
        backgroundColor: "blue",
        textAlign: "center"
    }
});
export default CustomList
