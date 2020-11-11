import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/instrucoes.png';
import styles from './styles';

export default function Person() {
    const navigation = useNavigation();

    function navigateToPerson() {
        navigation.navigate('Person');
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
                            Orientações para o TC6
                            </Text>

                        <Text style={styles.message2}>
                            1.  Materiais: local plano com marcação do perímetro da pista, 
                            trena métrica e apito.
                            </Text>

                        <Text style={styles.message2}>
                            2. Divide‐se os participantes em grupos adequados às dimensões da 
                            pista. 
                            </Text>

                        <Text style={styles.message2}>
                            3. Informa‐se aos participantes sobre a execução do testes dando ênfase 
                            ao fato de que devem correr o maior tempo possível, evitando piques de 
                            velocidade intercalados por longas caminhadas. 
                            </Text>

                        <Text style={styles.message2}>
                            4. Durante o teste, o aplicativo vai informar a passagem do 
                            tempo 2, 4 e 5 (“Atenção: falta 1 minuto).
                            </Text>
                        
                        <Text style={styles.message2}>
                            5. Ao final do teste, toca-se o apito, sendo que os 
                            participantes deverão interromper a corrida, permanecendo no 
                            lugar onde estavam (no momento do apito) até ser registrada a 
                            distância percorrida. 
                            </Text>

                        <Text style={styles.message2}>
                            6. Os resultados devem ser inseridos no aplicativo em metros, 
                            com uma casa decimal após a vírgula. 
                            </Text>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={navigateToPerson}
                        >
                            <Text style={styles.buttonText}>IR PARA O TESTE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}