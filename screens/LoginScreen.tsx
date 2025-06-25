import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INICIAR SESIÓN</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Calculadora')}>
        <View style={styles.row}>
          <Text style={styles.btnText}>Ir a Calculadora</Text>
          <AntDesign name="login" size={24} color="#fff" style={styles.icon} />
        </View>
        <Image
          style={styles.image}
          source={require('../assets/image/presupuesto.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#ed7d7d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  btn: {
    backgroundColor: '#444',
    width: '100%',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    marginRight: 10,
  },
  icon: {
    marginLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
