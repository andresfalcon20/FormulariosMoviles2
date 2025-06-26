import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props : any) {

//console.log(props.informacion.name.images.main);
function mostrarMas(data: any) {

  Alert.alert("Informacion",  data.name.fist+"trabaja como "+data.ocupation)

}

  return (
    <TouchableOpacity onPress={()=> mostrarMas(props.informacion)} style={styles.btn}>
      <Image source={{uri: props.informacion.images.main}} style={styles.img}/>
      <Text style={styles.txt}>{props.informacion.name.first} {props.informacion.name.last}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
btn:{
  backgroundColor: "#A3A3A3",
  margin: 10,
  borderRadius: 10, 
},
  img:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  txt:{
    fontSize: 25,
  }

})