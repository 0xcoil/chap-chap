import React from "react";
import { View, StyleSheet } from "react-native";


export default function DriverBottomContainer({ children }) {
    return (
        <View style={styles.container}>{children}</View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(213, 213, 212, 0.8)",
        borderColor: "rgba(233, 232, 233, 0.8)",
        borderWidth: 5,
        padding: 40,
        borderRadius: 24,
        margin: 0,
        marginTop: 600,
        position: "relative",
    },
});

