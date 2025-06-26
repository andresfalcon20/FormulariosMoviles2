import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Card(props: any) {

    const [visible, setvisible] = useState(false)


    return (
        <View>
            <TouchableOpacity onPress={() => setvisible(!visible)}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{props.informacion.name}</Text>
                <Image source={{ uri: props.informacion.image }} style={styles.img} />
            </TouchableOpacity>

            <Modal visible={visible} style={styles.modal}>

                <View style={styles.modal}>

                    <Button title='Cerrar' onPress={() => setvisible(false)} />
                    <Text style={styles.txt}>ID: {props.informacion.id}</Text>
                    <Text style={styles.txt}>{props.informacion.name}</Text>
                    <Image source={{ uri: props.informacion.image }} style={styles.img} />
                    <Text style={styles.txt}>{props.informacion.description}</Text>
                    <Text style={styles.txt}>Atributos: {props.informacion.atributos}</Text>

                </View>


            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 180,
        height: 180,
        resizeMode: "contain",
        alignSelf: 'center',
    },
    modal: {
        flex: 1,
        padding: 20,
        backgroundColor: "black",
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ffffff30',
        borderRadius: 20,
    },
    txt: {
        color: 'white',
        fontSize: 18,
        marginVertical: 8,
        textAlign: 'center',
    },

});