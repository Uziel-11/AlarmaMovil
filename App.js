import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PhoneAlarm from "./pages/PhoneAlarm";

const Stack = createStackNavigator();

export default function App() {
    useEffect(() => {
        const assignData =async () => {
            try {
                await AsyncStorage.setItem('user', 'VIPUser')
                await AsyncStorage.setItem('pass', '5ereno24/7!')
            }catch (error) {
                console.log("Ocurrio un error al guardar los datos: ", error.message)
            }
        }

        assignData()
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="PhoneAlarm" component={PhoneAlarm}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
