import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
    console.log("Hello City Component");

    const {wrapper, image, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText} = styles;

    return (
        <SafeAreaView style = {wrapper}>
            <ImageBackground source={require("../../assets/city-background.jpg")} style={image}>
                <Text style = {[cityName, cityText]}>London</Text>
                <Text style = {[countryName, cityText]}>UK</Text>
                <View style = {populationWrapper}>
                    <Feather name="user" size={50} color="red" />
                    <Text style = {populationText}>8000</Text>
                </View>
                <View style = {riseSetWrapper}>
                    <Feather name="sunrise" size={50} color="white" />
                    <Text style = {riseSetText}>10:46:58 AM</Text>
                    <Feather name="sunset" size={50} color="white" />
                    <Text style = {riseSetText}>17:28:15 PM</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
    },
    populationWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
        fontWeight: "bold",
    },
    riseSetWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    }
})

export default City;