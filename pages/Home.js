import React, {useEffect} from 'react';
import { View} from 'react-native';
import Header from "../component/Header";
import Card from "../component/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({navigation}) => {

    useEffect(() => {
       const validate = async () => {
           const storedStatus = await AsyncStorage.getItem("status");
           if (storedStatus !== 'true'){
               navigation.navigate('Login')
           }
       }

       validate()
    }, []);

    // useEffect(() => {
    //     console.log('entro a useEffect')
    //     const getInitialRoute = async () => {
    //         try {
    //             console.log('entro a Try')
    //             const storedStatus = await AsyncStorage.getItem("status");
    //             console.log('lo que contiene storedStatus: ', storedStatus)
    //             if (storedStatus != null){
    //                 const initialRoute = storedStatus === 'true' ? 'Home' : 'Login';
    //                 // Aquí puedes usar la variable `initialRoute` según tus necesidades.
    //                 console.log('Lo que contiene initialRoute: ', initialRoute)
    //                 if (initialRoute === "Home") {
    //                     console.log('entro a Home')
    //                     navigation.navigate('Home');
    //                     navigation.navigate
    //                 } else {
    //                     console.log('entro a Login')
    //                     navigation.navigate('Login');
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error al obtener el valor de AsyncStorage:', error);
    //         }
    //     };
    //
    //     getInitialRoute();
    // }, []);


    return (
        <View>
            <Header />

            <Card />
        </View>
    );
};

export default Home;
