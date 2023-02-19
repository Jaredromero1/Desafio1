import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import React, { Component } from "react";

export default function TabNavigation() {
    return (
        <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
            <View style={styles.containerImage}>
                    <Image style={styles.images} source={require('../assets/home.png')} />
                </View>
                <View style={styles.containerTabText}>
                    <Text style={styles.menuText}>Inicio</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
            <View style={styles.containerImage}>
                    <Image style={styles.images} source={require('../assets/plus.png')} />
                </View>
                <View style={styles.containerTabText}>
                    <Text style={styles.menuText}>Agregar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <View style={styles.containerImage}>
                    <Image style={styles.images} source={require('../assets/carrito-de-compras.png')} />
                </View>
                <View style={styles.containerTabText}>
                    <Text style={styles.menuText}>Carrito</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    menuItem: {
        padding: 10,
        paddingBottom: 20,
    },
    containerImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    containerTabText: {
        alignContent: "center",
        paddingTop: 4,
    },
    images: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
});
