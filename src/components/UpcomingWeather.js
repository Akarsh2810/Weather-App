import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, FlatList, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const UpcomingWeather = () => {
    //   console.log("Hello Upcoming Weather Component");

    const Data = [
        {
            dt_txt: "2023-02-18 12:00:00",
            main: {
                temp_max: 8.55,
                temp_min: 7.55
            },
            weather: [
                {
                    main: "Clear"
                }
            ]
        },
        {
            dt_txt: "2023-02-18 15:00:00",
            main: {
                temp_max: 8.55,
                temp_min: 7.55
            },
            weather: [
                {
                    main: "Clouds"
                }
            ]
        },
        {
            dt_txt: "2023-02-18 18:00:00",
            main: {
                temp_max: 8.55,
                temp_min: 7.55
            },
            weather: [
                {
                    main: "Rain"
                }
            ]
        }
    ];

    return (
        <SafeAreaView style = {styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList 
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.dt_txt}
            />
        </SafeAreaView>
    )
}

const renderItem = ({item}) => {
    return (
        <Item 
            condition = {item.weather[0].main}
            dt_txt = {item.dt_txt}
            min = {item.main.temp_min}
            max = {item.main.temp_max}
        />
    )
}

const Item = (props) => {
    const { dt_txt, min, max, condition } = props;

    return (
        <View style = {styles.item}>
            <Feather name={"sun"} size={50} color={"white"}/>
            <Text>{dt_txt}</Text>
            <Text style = {styles.temp}>{min}</Text>
            <Text style = {styles.temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : StatusBar.currentHeight || 0, /* 0 for IOS */
        backgroundColor: "red"
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "pink",
    },
    temp: {
        color: "white",
        fontSize: 20,
    }
})

export default UpcomingWeather;