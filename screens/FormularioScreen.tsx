    import { Text, View, StyleSheet, TextInput, Button, Switch, ActivityIndicator } from 'react-native';
    import React, {useState} from 'react'
    import { Divider } from 'react-native-paper';

    export default function FormularioScreen() {

        const [usuario, setusuario] = useState("");

        const [edad, setedad] = useState(0);


        const [datos, setdatos] = useState({"usuario": "", "edad": 0});

        const [visivle, setvisivle] = useState(false);


        function guardar() {

            if(usuario.trim() == ""){
                console.error("Datos en blanco")
            }


            setdatos({
                "usuario": usuario.trim(),
                "edad": edad

            })


        }
            


    return (
        <View style={styles.container}>
        <Text style={{fontSize: 60}}>Formulario</Text>

            <TextInput
            placeholder="Ingresar usuario"
            style={styles.input}
                onChangeText={(texto) => setusuario(texto)}


            />

            <TextInput
            placeholder="Ingresar Edad"
            style={styles.input}
            onChangeText={(texto) => setedad(+texto)}


            />

    <Button title='Guardar' onPress={()=> guardar()} />



        <View style={styles.linea}/>
        <Text style={{fontSize:20}}> Ver datos</Text>
        <Switch
            value={visivle}
            onValueChange={()=> setvisivle(!visivle)}  
        />

    <Divider/>

        {visivle == true 
        ?  <View>
            <Text style={styles.txt}>
                {datos.usuario}
            </Text>

            <Text style={styles.txt}>
                {datos.edad}
            </Text>


        </View>
        : <ActivityIndicator size='large' />
    }

    

        </View>
    )
    }

    const styles = StyleSheet.create({
        txt:{
            fontSize: 30,

        },
        
        
        linea:{
            borderWidth: 1,
            width: '90%',
            margin: 20,
        },


        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
        },
        input:{
            fontSize: 30,
            
            backgroundColor: '#95df9a',
            width: '60%',
            margin: 10,

        }


    })