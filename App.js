import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import TabNavigation from "./src/components/TabNavigation";
import Products from "./src/components/Products";
import ImageCarousel from "./src/components/ImageCarousel";

export default function App() {
    return (
        <>
            <StatusBar/>
            <SafeAreaView style={styles.Header}>
                <Text style={styles.HeadApp}>Productos</Text>
            </SafeAreaView>
            <View style={styles.container}>
                <ScrollView style={styles.scrollstyle}>
                    <ImageCarousel />
                    <Products />
                </ScrollView>
                <TabNavigation />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollstyle: {
        width: "100%",
        marginBottom: 85,
        backgroundColor: "#F5F5F7",
    },
    Header: {
        height: 105,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    HeadApp: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginTop: 15,
    },
});
