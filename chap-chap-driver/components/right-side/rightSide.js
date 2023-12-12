import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function RightSide(props) {
    return (
        <View style={styles.rightText}>
            <Text style={{
                fontSize: 10, fontWeight: "bold", marginRight: 5, marginBottom: 5, fontStyle: "italic",
            }}>ARGENT REÇU</Text>
            <View style={styles.container}>
                <Text style={styles.montant}>{props.amountReceived}</Text>
            </View>
            <View style={styles.bottomRightText}>
                <Text style={{ fontSize: 5, fontWeight: "bold", fontStyle: "italic", marginLeft: -25 }}>
                    Obtenir de l'aide pour ma course{' '}
                    <Icon name="question-circle" size={5} color="black" style={{ marginLeft: 2 }} />
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 3,
        width: 70,
        borderColor: "#cb7620",
        borderWidth: 1,
        shadowColor: "rgba(187,186,186,255)",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        marginRight: 3,
    },
    rightText: {
        position: "absolute",
        marginTop: 50,
        right: 5,
        top: 10,
        alignItems: "flex-end",
    },
    montant: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
    },
    bottomRightText: {
        position: "absolute",
        marginTop: 120,
        right: 10,
    },
});
