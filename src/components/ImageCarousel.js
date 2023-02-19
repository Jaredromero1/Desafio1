import React from "react";
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const dataCarousel = [
    {
        name: "iPhone",
        image: require("../assets/iphones.png"),
    },
    {
        name: "Mac",
        image: require("../assets/macs.png"),
    },
    {
        name: "iPad",
        image: require("../assets/ipads.png"),
    },
    {
        name: "AirPods",
        image: require("../assets/airpods.png"),
    },
];

const ScrollViewHorizontal = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
            dataCarousel.map((carousel, i) => (
                <View key={i} style={styles.container}>
                    <TouchableOpacity>
                        <View style={styles.containerImage}>
                            <Image source={carousel.image} style={styles.imagenes} />
                        </View>
                        <View style={styles.containerCarouselText}>
                            <Text style={styles.textCarousel}>{carousel.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "20%",
        backgroundColor: "#fff",
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: 25,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000000",
        shadowOffset: {
            width: -7,
            height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 4,
    },
    containerImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenes: {
        width: 100,
        height: 55,
        resizeMode: "contain",
    },
    containerCarouselText: {
        alignItems: 'center',
    },
    textCarousel: {
        color: "#000",
        marginTop: 5,
    },
});

export default ScrollViewHorizontal;
