import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

const ModalNative = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modal In React Native</Text>
            <View style={styles.box}>
                <Button title='Open Modal' onPress={handleModal} />
            </View>

            <Modal visible={openModal} transparent={true} animationType='slide'>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Hello World</Text>
                        <Button title='Close Modal' onPress={handleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f2f2f2",
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    box: {
        alignItems: "center",
        marginBottom: 20,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center",
    }
})

export default ModalNative
