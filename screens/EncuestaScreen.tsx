import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox, RadioButton, Switch } from 'react-native-paper';

export default function EncuestaScreen() {

    const [contacto, setContacto] = useState('');
    const [recomendar, setRecomendar] = useState('');
    const [razonValoracion, setRazonValoracion] = useState('');
    const [permitirContacto, setPermitirContacto] = useState(false);
    const [diseno, setdiseno] = useState(false);
    const [usabilidad, setusabilidad] = useState(false);
    const [rendimiento, setrendimiento] = useState(false);



    const [valoracion, setValoracion] = useState(5);
    const [comentarios, setComentarios] = useState('');



    function enviarEncuesta() {

    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Encuesta de Satisfacción</Text>

                <Text style={styles.label}>Contacto:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={contacto}
                    onChangeText={setContacto}
                />

                <Text style={styles.label}>¿Recomendarías el producto?</Text>
                <RadioButton.Group onValueChange={setRecomendar} value={recomendar}>

                    <View style={styles.radioContainer}>
                        <View style={styles.radioItem}>

                            <RadioButton value="si" />
                            <Text >Sí</Text>
                        </View>
                        <View style={styles.radioItem}>            
                            <RadioButton value="no" />
                            <Text>No</Text>
                        </View>
                        <View style={styles.radioItem}>            
                            <RadioButton value="quizas" />
                            <Text>Quizás</Text>
                        </View>
                    </View>
                </RadioButton.Group>


                <Text style={styles.label}>Razón de la valoración:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe tu razón aquí"
                    value={razonValoracion}
                    onChangeText={setRazonValoracion}
                />

                <View style={styles.switchC}>
                    <Text>Permitir contacto para seguimiento</Text>
                    <Switch value={permitirContacto} onValueChange={setPermitirContacto} />
                </View>


                <Text style={styles.label}>¿Qué te gustó?</Text>
                <View style={styles.checkbox}>
                    <Checkbox.Item
                        label="Diseño"
                        status={diseno ? 'checked' : 'unchecked'}
                        onPress={() => setdiseno(!diseno)}
                    />
                    <Checkbox.Item
                        label="Usabilidad"
                        status={usabilidad ? 'checked' : 'unchecked'}
                        onPress={() => setusabilidad(!usabilidad)}
                    />
                    <Checkbox.Item
                        label="Rendimiento"
                        status={rendimiento ? 'checked' : 'unchecked'}
                        onPress={() => setrendimiento(!rendimiento)}
                    />


                    <Text style={styles.checkbox}>Rendimiento</Text>
                </View>

                <Text style={styles.label}>Valoración: {valoracion}</Text>
                


                <Text style={styles.label}>Comentarios:</Text>
                <TextInput
                    style={[styles.input, { height: 80 }]}
                    placeholder="Escribe tus comentarios"
                    value={comentarios}
                    onChangeText={setComentarios}
                />

                <Button title="Enviar encuesta" onPress={enviarEncuesta} />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 40,
    },
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
    label: {
        marginTop: 10,
        fontSize: 16,
    },
    input: {
        backgroundColor: 'white',
        fontSize: 16,
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
    radioB: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    switchC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },

    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },

})