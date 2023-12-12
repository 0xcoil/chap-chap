import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

export default function MidBottom() {
    return (
        <View style={styles.middleText}>
            <Text style={{
                fontSize: 5, fontWeight: "bold", marginTop: 35, fontStyle: "italic", marginBottom: 5
            }}>LEBRON JAMES</Text>
            <Text style={{
                fontSize: 5, fontWeight: "bold", fontStyle: "italic", marginBottom: 5
            }}>VOUS À ATTRIBUÉ LA NOTE DE :</Text>
            <View style={styles.container}>
                <View style={{ marginLeft: 6 }}>

                    <View style={styles.ratingContainer}>
                        <Rating
                            name="half-rating"
                            defaultValue={2.5}
                            precision={0.5}
                            imageSize={10} // Ajustez la taille globale de l'icône
                            tintColor="black" // Fonds des étoiles
                            iconStyle={{ fontSize: 15 }} // Ajustez la taille spécifique de l'icône et le décalage vers le bas
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 5,
    },
    middleText: {
        alignItems: "center",
    },
    ratingContainer: {
        backgroundColor: "black", // Couleur du fond du conteneur
        padding: 3, // Ajustez le rembourrage selon vos besoins
        borderRadius: 7, // Bords arrondis du conteneur
        marginTop: 1,
        marginBottom: -20,
        shadowColor: "rgba(187,186,186,255)", // Couleur grise claire de l'ombre
        shadowOffset: {
            width: 3,
            height: 8, // Ajustez la hauteur de l'ombre selon vos besoins
        },
        shadowOpacity: 1, // Opacité de l'ombre
        shadowRadius: 5, // Rayon de l'ombre
        elevation: 5, // Niveau d'élévation pour Android
    },
})
