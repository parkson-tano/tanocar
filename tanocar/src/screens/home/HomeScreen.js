import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdCard from '../../components/AdCard'
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
          <AdCard 
          title="Hello" 
          image='https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
          price='2902323'
              description="The idea with React Native Elements is more about component structure than actual design."
          />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})