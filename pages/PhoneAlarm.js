import React, { useState } from 'react';
import {View, TextInput, Button, Alert, StyleSheet, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const PhoneAlarm = ({navigation}) => {
    const [textInputValue, setTextInputValue] = useState('');

    const handleButtonPress = async () => {
        if (textInputValue.trim() !== '') {
            await AsyncStorage.setItem('phone', textInputValue)
            await AsyncStorage.setItem('status', 'true')
            navigation.navigate('Home')
        } else {
            // Mostrar un mensaje de alerta si el cuadro de texto está vacío
            Alert.alert('Advertencia', 'Por favor, ingresa un texto');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cardHeader}>Numero de la Alarma</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Ingrese el numero de la Alarma"
                onChangeText={(text) => setTextInputValue(text)}
                value={textInputValue}
            />
            <Button title="Aceptar" onPress={handleButtonPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    cardHeader: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 16,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
        width: '100%',
    },
});

export default PhoneAlarm;
