import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText 
          containerStyles = {highLowWrapper} 
          messageOneStyles = {highLow} 
          messageTwoStyles = {highLow} 
          messageOne = {"High: 8 "} 
          messageTwo = {"Low: 6"}
        />
      </View>
      <RowText 
          containerStyles = {bodyWrapper} 
          messageOneStyles = {description} 
          messageTwoStyles = {message} 
          messageOne = {"It's Sunny"} 
          messageTwo = {"It's perfect T-Shirt Weather."}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop : StatusBar.currentHeight,
    backgroundColor : "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    color: "black",
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    color: "black",
    fontSize: 48
  },
  message: {
    color: "black",
    fontSize: 30
  }
})

export default CurrentWeather;