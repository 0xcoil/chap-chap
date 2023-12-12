import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function LeftSide(props) {
    return (
        <View style={styles.leftText}>
            <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 2, fontStyle: "italic" }}>
                VÉHICULE UTILISÉ:
            </Text>
            <Image
                source={require('./images/vehicule.png')}
                style={styles.image1}
                resizeMode="contain"
            />
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    {/* Immatriculation */}
                    <Text style={styles.text}>{props.plateNum}</Text>

                    {/* Image plaque */}
                    <Image
                        source={require('./images/CI.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#138D75",
        padding: 0,
        marginLeft: 10,
        marginTop: 5,
        shadowColor: "rgba(187,186,186,255)",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 5,
    },
    image: {
        width: 10,
        height: 20,
        marginLeft: 5,
        // Ajout de l'ombre à l'image de la plaque
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    image1: {
        width: 100,
        height: 50,
        // Ajout de l'ombre à l'image du véhicule
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    leftText: {
        position: "absolute",
        marginTop: 50,
        left: 5,
        right: 10,
        top: 10,
        alignItems: "flex-start",
    },
});
