import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';

export default function CalculadoraScreen() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);



  
  function sumar() {
    const total = numero1 + numero2;
    Alert.alert('Resultado', `La suma es: ${total}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA</Text>

      <View style={styles.fila}>
        <Button title="-" onPress={() => setNumero1(numero1 - 1)} />
        <Text style={styles.numero}>{numero1}</Text>
        <Button title="+" onPress={() => setNumero1(numero1 + 1)} />
      </View>

      <View style={styles.fila}>
        <Button title="-" onPress={() => setNumero2(numero2 - 1)} />
        <Text style={styles.numero}>{numero2}</Text>
        <Button title="+" onPress={() => setNumero2(numero2 + 1)} />
      </View>

      <View style={styles.linea} />

      <Button title="Suma" onPress={sumar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6fa',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 20,
  },
  numero: {
    fontSize: 40,
    marginHorizontal: 20,
  },
  linea: {
    backgroundColor: 'black',
    height: 2,
    width: '60%',
    marginVertical: 20,
  },
});
