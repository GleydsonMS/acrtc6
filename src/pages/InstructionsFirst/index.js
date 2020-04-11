import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/instrucoes.png';
import styles from './styles';

export default function Person() {
    const navigation = useNavigation();

    function navigateToInstructionsSecond() {
        navigation.navigate('InstructionsSecond');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={logoImg} />
                <Image style={styles.imageTitle} source={titleImg} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.viewMessage}>
                        <Text style={styles.message}>
                            Siga os seguintes passos:
                            </Text>
                        <Text style={styles.message2}>
                            1. Preencha os campos com as seguintes informações: nome,
                            sexo, idade, peso e estatura.
                            </Text>
                        <Text style={styles.message2}>
                            2. Siga as orientações para a realização do teste de
                            corrida de 6 minutos.
                            </Text>
                        <Text style={styles.message2}>
                            3. Acrescente as informações sobre o teste e você
                            obterá o resultado!
                            </Text>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={navigateToInstructionsSecond}
                        >
                            <Text style={styles.buttonText}>PRÓXIMO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}