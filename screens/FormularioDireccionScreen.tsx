import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function FormularioDireccionScreen() {

    const [calle, setCalle] = useState('');
  const [numeroExterior, setNumeroExterior] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [referencias, setReferencias] = useState('');
  const [fiscal, setfiscal] = useState(false);


  function guardar() {
    if (!calle || !numeroExterior || !ciudad) {
      Alert.alert('Error', 'Todos los campos excepto referencias son obligatorios');
      return;
    }

    
      if (isNaN(Number(numeroExterior))) {
          Alert.alert('Error', 'El numero exterior debe contener solo números');
          return;
        }
    

  }

  return (
       <View style={styles.container}>
      <Text style={styles.titulo}>Formulario de Dirección</Text>

      <TextInput style={styles.input} placeholder="Calle" onChangeText={setCalle} />
      <TextInput
        style={styles.input}
        placeholder="Número Exterior"
        keyboardType="numeric"
        value={numeroExterior}
        onChangeText={setNumeroExterior}
      />
      <TextInput style={styles.input} placeholder="Ciudad" onChangeText={setCiudad} />
      <TextInput
        style={styles.input}
        placeholder="Referencias"
        onChangeText={setReferencias}
      />

      <View style={styles.switchC}>
        <Text>¿Es dirección fiscal?</Text>
        <Switch value={fiscal} onValueChange={setfiscal} />
      </View>

      <Button title="Guardar" onPress={guardar} />
    </View>
  );
  
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#white',
    fontSize: 16,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#black',
  },
  switchC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
})