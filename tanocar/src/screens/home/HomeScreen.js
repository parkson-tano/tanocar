import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import AdCard from '../../components/AdCard'
import axios from 'axios'
import { API_URL } from '../../api'
const HomeScreen = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}ads`)
    .then(res => {
      setAds(res.data)
    })
  }, [])
  

  return (
    <ScrollView>
      {ads?.map(ad => (
        <View key={ad.id}>
        <AdCard
          title={ad.title}
            image={ad.images.length > 0 && ad.images[0].uri}
            price={ad.data.adDetails.price != 'undefined' && ad.data.adDetails.price}
          description={ad.description}
          features={ad.data.features}
        />
        </View>
      ))}
          
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})