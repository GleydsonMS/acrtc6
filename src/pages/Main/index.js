import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Main () {
    const navigation = useNavigation();

    function navigateToPerson(){
        navigation.navigate('Person');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={logoImg} />
                <Text style={styles.headerTitle}>
                    ORIENTAÇÕES
                </Text>
            </View>
            <View style={styles.viewMessage}>
                <Text style={styles.message}>
                    Aqui você poderá calcular o VO2 máximo e classificar o nível de aptidão cardiorrespiratória de forma indireta pelo teste de corrida de 6 minutos conforme o PROESP Brasil.
                </Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={navigateToPerson}
                >
                    <Text style={styles.buttonText}>IR PARA TESTE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}