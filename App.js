import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import Counter from "./src/demonstrations/Counter";

const App = () => {
  return (
    <NavigationContainer>
      <Counter />
      {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App;