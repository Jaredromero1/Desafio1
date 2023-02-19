import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

export default function Products() {
   
    const data = [
        {
            id: "1",
            name: "Iphone 14 pro",
            image: require("../assets/producto1.jpg"),
            price: "$999",
        },
        {
            id: "2",
            name: "Macbook Pro",
            image: require("../assets/producto2.jpg"),
            price: "$2300",
        },
        {
            id: "3",
            name: "Ipad pro",
            image: require("../assets/producto3.jpg"),
            price: "$1099",
        },
        {
            id: "4",
            name: "Airpods Pro",
            image: require("../assets/producto4.jpg"),
            price: "$250",
        },
        {
            id: "5",
            name: "iPhone 13",
            image: require("../assets/iphone13.jpg"),
            price: "$599",
        },
        {
            id: "6",
            name: "MacBoock Air M1 chip",
            image: require("../assets/macboockAir.jpg"),
            price: "$999",
        },
        {
            id: "7",
            name: "iPad Pro",
            image: require("../assets/ipadPro.jpg"),
            price: "$799",
        },
        {
            id: "8",
            name: "AirPods Max",
            image: require("../assets/airpodsMax.png"),
            price: "$549",
        },
        {
            id: "9",
            name: "iPhone 12",
            image: require("../assets/iphone12.jpg"),
            price: "$599",
        },

    ];

    return(
        data.map((product,i) => {
                return(
                    <View key={i} style={styles.container}>
                        <TouchableOpacity style={styles.item}>
                            <Image style={styles.image} source={product.image} />
                            <View style={styles.contentProducts}>
                                <View style={styles.text}>
                                    <Text style={styles.name}>{product.name}</Text>
                                    <Text style={styles.price}>{product.price}</Text>
                                </View>
                                <View style={styles.buttom}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.textButtom}>Agregar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>       
                )
        })
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 15,
        paddingVertical: 35,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: "#000000",
        shadowOffset: {
            width: -7,
            height: 7,
        },
        shadowOpacity:  0.05,
        shadowRadius: 3.05,
        elevation: 4
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
    },
    contentProducts:{
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    image: {
        width: "100%",
        height: 175,
        resizeMode: "contain",
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        fontSize: 18,
        paddingTop: 3,
        color: "#666",
    },
    buttom: {
        alignItems: "center",
        backgroundColor: "#000",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 12,
    },
    textButtom: {
        fontWeight: "bold",
        color: '#fff',
    },
});
