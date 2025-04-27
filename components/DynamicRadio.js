import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DynamicRadio = () => {
    const [selectedBtn, setSelectedBtn] = useState()
    console.log(11111, selectedBtn)

    const radio = [
        { id: 1, label: 'Java' },
        { id: 2, label: 'Python' },
        { id: 3, label: 'JavaScript' },
        { id: 4, label: 'C++' },
        { id: 5, label: 'Ruby' },
        { id: 6, label: 'Swift' },
        { id: 7, label: 'Go' },
        { id: 8, label: 'Kotlin' },
        { id: 9, label: 'PHP' },
        { id: 10, label: 'Rust' },
    ];

    return (
        <View style={styles.main}>
            {radio.map((item) => {
                return (
                    <TouchableOpacity key={item.id} onPress={() => setSelectedBtn(item.id)}>
                        <View style={styles.radioWrap}>
                            <View style={styles.radiomake}>
                                {selectedBtn === item.id ? <View style={styles.radioSelectBtn} /> : null}
                            </View>
                            <Text style={styles.radio1}>{item.label}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    radio1: {
        fontSize: 23,
        color: "red",
    },
    radiomake: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    radioWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    radioSelectBtn: {
        backgroundColor: "black",
        color: "red",
        height: 10,
        width: 10,
        borderRadius: 5,
    },
});

export default DynamicRadio
