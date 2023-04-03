import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SocialButton = () => {
  return (
      <View style={{ flexDirection: "row", marginTop: 15, justifyContent: 'center', }}>
          <TouchableOpacity style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              height: 65,
              width: 120,
              marginHorizontal: 20,
              marginBottom: -20,
              borderRadius: 50,
              backgroundColor: 'white',
              elevation: 1,
              ...styles.shadow
          }}>
              <Image
                  source={require('../asset/google.png')}
                  style={{
                      alignSelf: "center",
                      height: 40,
                      width: 40
                  }}
              />
          </TouchableOpacity>
          <TouchableOpacity style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              height: 65,
              width: 120,
              marginHorizontal: 20,
              marginBottom: -20,
              borderRadius: 50,
              backgroundColor: "#4267B2",
              elevation: 1,
              ...styles.shadow
          }}>
              <Text style={{ color: 'white', alignSelf: 'center', fontSize: 40, fontWeight: 'bold' }}>f</Text>
          </TouchableOpacity>
      </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000", // for iphone drop shadow (specifies the android equivalent, elevation: 1)
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    },
})