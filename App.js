import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

const App = () => {
  return (
    <ScrollView>
      <View style = {styles.container}>
        <CurrentWeather />
        <UpcomingWeather />
        <City />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;