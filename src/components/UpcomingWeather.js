import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";

const UpcomingWeather = () => {
    //   console.log("Hello Upcoming Weather Component");
    return (
        <SafeAreaView style = {styles.container}>
            <Text>Upcoming Weather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : StatusBar.currentHeight,
    }
})

export default UpcomingWeather;