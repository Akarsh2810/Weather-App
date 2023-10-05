import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";

const CurrentWeather = ({weatherData}) => {

  const {wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles;
  const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData;
  const weatherCondition = weather[0]?.main;

  console.log(weatherData);

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: WeatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={WeatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{`${Math.round(temp)}°C`}</Text>
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°C`}</Text>
        <RowText 
          containerStyles = {highLowWrapper} 
          messageOneStyles = {highLow} 
          messageTwoStyles = {highLow} 
          messageOne = {`High: ${Math.round(temp_max)}°C `} 
          messageTwo = {`Low: ${Math.round(temp_min)}°C`}
        />
      </View>
      <RowText 
          containerStyles = {bodyWrapper} 
          messageOneStyles = {description} 
          messageTwoStyles = {message} 
          messageOne = {weather[0]?.description} 
          messageTwo = {WeatherType[weatherCondition]?.message}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
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
    fontSize: 43
  },
  message: {
    color: "black",
    fontSize: 25
  }
})

export default CurrentWeather;