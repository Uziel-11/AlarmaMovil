import React from 'react';
import * as SMS from 'expo-sms';
import {View, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import alarma from '../assets/alarma.png';
import activate from '../assets/activate.png';

const Card = () => {
    const activeAlarm = async () => {
        try {

            // const data = JSON.parse(await AsyncStorage.getItem('status'))
            // alert(data.rawData)
            const phone = await AsyncStorage.getItem('phone')

            const {result} = await SMS.sendSMSAsync(
                [phone],
                'PANICO'
            );

            // Alert.alert('Advertencia',"Lo que tiene Result: " + result)
            // console.log(result)
        }catch (error) {
            alert("A ocurrido un Error: " + error.message)
            console.log(error.message)
        }

    };

    const deactivateAlarm = async () => {
        try {

            const phone = await AsyncStorage.getItem('phone')
            const {result} = await SMS.sendSMSAsync(
                [phone],
                'PARAR'
            )
            // Alert.alert('Advertencia', 'Lo que tiene result: ' + result)
            // console.log(result)
        }catch (error){
            alert("A ocurrido un Error: " + error.message)
            console.log(error.message)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={activeAlarm}
                    style={[styles.button, { backgroundColor: '#FFFFFF' }]}
                >
                    <Image source={activate} style={styles.buttonImage} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={deactivateAlarm}
                    style={[styles.button, { backgroundColor: '#E04F5F' }]}
                >
                    <Image source={alarma} style={styles.buttonImage} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        margin: '0.5%',
        padding: '40%',
        backgroundColor: '#0076F4',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 30,
        margin: 35,
        padding: 20,
    },
    buttonImage: {
        width: 90,
        height:90,
    },
});

export default Card;
