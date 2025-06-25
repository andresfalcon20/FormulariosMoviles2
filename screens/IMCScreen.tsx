import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput } from 'react-native';

export default function IMCScreen() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0); 

  function calcularIMC() {
  
    let imc = peso / (altura * altura);

    let categoria = '';
    if (imc < 18.49) categoria = 'Peso bajo';
    else if (imc > 18.5 && imc < 24.99) categoria = 'Peso Normal';
    else if (imc > 25 && imc < 29.99) categoria = 'Sobrepeso';
    else if (imc > 30 && imc < 34.99) categoria = 'Obesidad leve';

    Alert.alert('Resultado IMC', `Tu IMC es: ${imc}`);
  }

  return (
      <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>

      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput
        style={styles.input}
        onChangeText={ (texto) => setPeso(parseFloat(texto)) } 
      />

      <Text style={styles.label}>Estatura (m):</Text>
      <TextInput
        style={styles.input}
        onChangeText={ (texto) => setAltura((+texto)) }
     
      />

      <View style={styles.linea} />
      <Button title="Calcular IMC" onPress={calcularIMC} />

    { peso / (altura * altura) > 18.49
    ? <Text style={{fontSize:40}} >Peso insuficiente</Text>
    : <Text style={{fontSize:40}} >Peso aceptable </Text>
    
    
    }



    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6fa',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  linea: {
    backgroundColor: 'black',
    height: 2,
    width: '60%',
    marginVertical: 30,
  },
});
