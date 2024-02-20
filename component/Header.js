import React from 'react';
import { View, Text, Image } from 'react-native';
import ubicacion from '../assets/ubicacion.png';
import proteger from '../assets/proteger.png';

const texto = 'Colonia';
const texto2 = 'Segura';

const Header = () => {
    const headerContainerStyle = {
        backgroundColor: '#F8F9FA',
        // padding: -3,
        // paddingBottom: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    };

    const rowContainerStyle = {
        flexDirection: 'row',
        alignItems: 'center',
    };

    const contentContainerStyle = {
        marginLeft: 10,
    };

    const textStyles = {
        color: 'black',
    };

    return (
        <View style={headerContainerStyle}>
            <View style={rowContainerStyle}>
                <Image source={proteger} style={{ width: 40, height: 40, marginLeft: '8%' }} />
                <View style={contentContainerStyle}>
                    <Text style={{ ...textStyles, fontSize: 18 }}>{texto}</Text>
                    <Text style={{ ...textStyles, fontSize: 16 }}>{texto2}</Text>
                </View>
            </View>

            <View style={{ ...rowContainerStyle, marginTop: 1 }}>
                <View>
                    <Text style={{ ...textStyles, fontSize: 18 }}>Tuxtla</Text>
                    <Text style={{ ...textStyles, fontSize: 14 }}>Gutierrez</Text>
                </View>
                <Image source={ubicacion} style={{ width: 30, height: 30, marginLeft: '8%' }} />
            </View>
        </View>
    );
};

export default Header;
