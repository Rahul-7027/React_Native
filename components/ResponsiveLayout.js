import React from 'react';
import { View } from 'react-native';

const ResponsiveLayout = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "red" }} />
            <View style={{ flex: 1, backgroundColor: "orange" }} />
            <View style={{ flex: 1, backgroundColor: "blue" }} />
            <View style={{ flex: 1, backgroundColor: "green" }} />
        </View>
    )
}

export default ResponsiveLayout;
