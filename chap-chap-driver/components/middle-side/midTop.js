import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function MidTop() {
    return (
        <View style={styles.middleText}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    RÉSUMÉ DE MA COURSE
                </Text>
            </View>
            <View style={styles.middleText}>
                <Text style={styles.clientText}>
                    CLIENT
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('./images/profil.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    middleText: {
        alignItems: "center",
    },
    container: {
        backgroundColor: "black",
        borderRadius: 7,
        padding: 5,
        width: 85,
        justifyContent: "center",
        shadowColor: "rgba(187,186,186,255)",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 20,
    },
    text: {
        fontSize: 5,
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",
        textAlign: "center",
    },
    clientText: {
        fontSize: 8,
        fontWeight: "bold",
        color: "black",
        marginTop: 10,
        marginBottom: -1,
        fontStyle: "italic",
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 75, // Ajustez la largeur selon vos besoins
        height: 90, // Ajustez la hauteur selon vos besoins
        marginTop: 5, // Ajustez la marge selon vos besoins
        marginBottom: -30,
    },
});
