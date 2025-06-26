import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import datos from '../assets/data/futurama.json'
import Tarjeta from '../components/Tarjeta'

export default function ListaLocalScreen() {
  return (
    <View>
      <FlatList
        data={datos}
        renderItem={({item} ) =>
          <Tarjeta informacion ={item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  txt:{
    fontSize: 25
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})