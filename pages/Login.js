import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleInputChange = (name, value) => {
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async () => {
        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        try {
            const user = await AsyncStorage.getItem('user')
            const pass = await AsyncStorage.getItem('pass')
            if (username.trim() === user || password.trim() === pass){
                setUsername("")
                setPassword("")
                navigation.navigate('PhoneAlarm')
            }else {
                alert('Datos Incorrectos')
            }
        }catch (error) {
            console.log('Error al guardar el valor:', error.message)
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.cardHeader}>Inicio de Sesion</Text>
            <View style={styles.cardBody}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    value={username}
                    onChangeText={(value) => handleInputChange('username', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={(value) => handleInputChange('password', value)}
                />
                <TouchableOpacity onPress={handleSubmit}  style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        marginVertical: 230,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    cardHeader: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 16,
    },
    cardBody: {
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 10,
        width: '80%',
    },
    button: {
        backgroundColor: '#0076F4',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Login;
