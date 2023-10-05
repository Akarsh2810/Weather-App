import React, {useState} from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

const App = () => {

  const [loading, setLoading] = useState(true);
  const {container} = styles;
  if(loading) {
    return (
      <View style = {container}>
        <ActivityIndicator size={"large"} color={"blue"}/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }
})

export default App;