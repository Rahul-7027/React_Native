import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButton = () => {
    const [selectedBtn, setSelectedBtn] = useState(1);

    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => setSelectedBtn(1)}>
                <View style={styles.radioWrap}>
                    <View style={styles.radiomake}>
                        {selectedBtn === 1 ? <View style={styles.radioSelectBtn} /> : null}
                    </View>
                    <Text style={styles.radio1}>Radio 1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedBtn(2)}>
                <View style={styles.radioWrap}>
                    <View style={styles.radiomake}>
                        {selectedBtn === 2 ? <View style={styles.radioSelectBtn} /> : null}
                    </View>
                    <Text style={styles.radio1}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    radio1: {
      fontSize: 23,
      color: "black", 
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
      height: 10,
      width: 10,
      borderRadius: 5,
    },
  });
  

export default RadioButton;
