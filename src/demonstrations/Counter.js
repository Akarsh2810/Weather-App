import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)
  const { container, title } = styles

  useEffect(() => {
    //${count} means Interpolating the value of count.
    console.log(`Our count value is ${count}`)
    return () => {
      console.log('useEffect cleanUp')
    }
  }, [count])

  return (
    <View style={container}>
      <Text style={title}>{`Count = ${count}`}</Text>
      {/* <Text style = {title}>{`newCount = ${newCount}`}</Text> */}
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      />
      <Button
        color={'red'}
        title={'Increase the new count'}
        onPress={() => setNewCount(newCount + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the new count'}
        onPress={() => setNewCount(newCount - 1)}
      />
      <Button
        color={'lightblue'}
        title={'Reset count'}
        onPress={() => setCount(0)}
      />
      {/* <Button 
                color = {"lightblue"} 
                title = {"Reset new count"} 
                onPress = {() => setNewCount(0)} 
            /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})

export default Counter
