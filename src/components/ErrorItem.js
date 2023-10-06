import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useGetWeather } from '../hooks/useGetWeather'

const ErrorItem = () => {
  const [ loading, error, weather ] = useGetWeather()
  const { container, errorMessage } = styles
  return (
    <View style={container}>
      <Text style={errorMessage}>{error}</Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center'
  }
})

export default ErrorItem
