import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'


const LoopUserData = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.item}>{props.item.username}</Text>
            <Text style={styles.item}>{props.item.email}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "orange",
        marginBottom: 10,

    },
    item: {
        flex: 1,
        color: "orange",
        margin: 2,
        fontSize: 24,
        textAlign: "center"
    }
});
export default LoopUserData
