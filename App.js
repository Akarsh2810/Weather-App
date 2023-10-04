import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from "react-native";

const App = () => {
  // console.log("Hello App");
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop : StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor : "pink",
    alignItems: "center",
    // justifyContent: "center",
  }
})

export default App;