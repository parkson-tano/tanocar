import { StyleSheet, Text, View, ScrollView, FlatList, RefreshControl, useCallback } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AdCard from '../../components/AdCard'
import axios from 'axios'
import { API_URL } from '../../api'
import { AuthContext } from '../../context/AuthContext'
import { Button } from 'react-native-paper'

const HomeScreen = () => {
  const [ads, setAds] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const auth = useContext(AuthContext)
  useEffect(() => {
    axios.get(`${API_URL}ads`)
      .then(res => {
        setAds(res.data)
      })
  }, [])

  console.log("home",auth.getAccessToken())

  return (
    <ScrollView>
      <Button onPress={() => auth.logout()}>Logout</Button>
      <Text>
        wsdfsdf 
      </Text>
      {ads?.map(ad => (
        <View key={ad.id}>
          <AdCard
            title={ad.title}
            image={ad.images.length > 0 && (ad.images[0].uri)}
            price={ad.price}
            description={ad.description}
            features={ad.data.features}
            make={ad.data.adDetails.make}
            model={ad.data.adDetails.model}
            year={ad.data.adDetails.year}
          />
        </View>
      ))}

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})