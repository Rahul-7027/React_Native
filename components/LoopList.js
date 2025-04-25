import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import LoopUserData from './LoopUserData';

const LoopList = () => {
    const users = [
        { id: 1, username: 'john_doe', email: 'john_doe@example.com' },
        { id: 2, username: 'jane_smith', email: 'jane_smith@example.com' },
        { id: 3, username: 'michael_brown', email: 'michael_brown@example.com' },
        { id: 4, username: 'emily_jones', email: 'emily_jones@example.com' },
        { id: 5, username: 'david_clark', email: 'david_clark@example.com' },
        { id: 6, username: 'john_doe', email: 'john_doe2@example.com' },
        { id: 7, username: 'jane_smith', email: 'jane_smith2@example.com' },
        { id: 8, username: 'michael_brown', email: 'michael_brown2@example.com' },
        { id: 9, username: 'emily_jones', email: 'emily_jones2@example.com' },
        { id: 10, username: 'david_clark', email: 'david_clark2@example.com' }
    ];

    return (
        <View>
            <Text>Component in Loop with Flatlist</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (<LoopUserData item={item} />)}
                keyExtractor={item => item.id}
            />
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

export default LoopList
