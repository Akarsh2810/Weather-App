import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // console.log("Hello World! You are inside Weather App");
  return (
    // <View style={styles.container}>
    //   <Text>Hello! You are inside Weather App.</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style = {{height: 100, width: 100, backgroundColor: 'orange'}}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
