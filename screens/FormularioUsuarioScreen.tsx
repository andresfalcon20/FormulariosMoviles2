import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-paper';

export default function FormularioUsuarioScreen() {
  const [nombre, setNombre] = useState('');

  const [apellido, setApellido] = useState('');

  const [email, setEmail] = useState('');

  const [telefono, setTelefono] = useState('');

  const [contrasena, setContrasena] = useState('');

  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const [suscribirse, setSuscribirse] = useState(false);


function guardar(){

  if (isNaN(Number(telefono))) {
      Alert.alert('Error', 'El teléfono debe contener solo números');
      return;
    }



      if (contrasena !== confirmarContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }


        if (!aceptaTerminos) {
      Alert.alert('Error', 'Debe aceptar los términos y condiciones');
      return;
    }
} 


  return (
    <View style={styles.container}>
      <Text style={styles.tituloF}>Formulario de Usuario</Text>



    <TextInput style={styles.input} placeholder="Nombre" onChangeText={setNombre} />

      <TextInput style={styles.input} placeholder="Apellido" onChangeText={setApellido} />

      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={setEmail} />

      <TextInput style={styles.input} placeholder="Teléfono" keyboardType="numeric" onChangeText={setTelefono} />

      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setContrasena} />

      <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry onChangeText={setConfirmarContrasena} />

   <View style={styles.switchC}>
        <Text>Acepto términos y condiciones</Text>
        <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
      </View>

<Divider/>

      <View style={styles.switchC}>
        <Text>Suscribirme al newsletter</Text>
        <Switch value={suscribirse} onValueChange={setSuscribirse} />
      </View>

      <Button title="Registrar" onPress={guardar} />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    backgroundColor: 'white',
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  tituloF: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  switchC: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },


});