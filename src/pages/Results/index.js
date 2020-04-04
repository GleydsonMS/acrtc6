import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/resultados.png';
import styles from './styles';

export default function Person () {
    const navigation = useNavigation();
    const [distancia, setDistancia] = useState('');
    const [vo2, setVo2] = useState('');
    const [classificacao, setClassificacao] = useState('');

    function navigateToMain () {
        const dataResultado = { distancia, vo2, classificacao };

        navigation.navigate('Main');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={logoImg} />
                <Image style={styles.imageTitle} source={titleImg} />
            </View>
            <FlatList
                data={[1]}
                keyExtractor={message => String(message)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View>
                        <View style={styles.viewForm}>
                            <Text style={styles.text}>Distância Percorrida Total</Text>
                            <Text style={styles.textResult}></Text>
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>VO2</Text>
                            <Text style={styles.textResult}></Text>
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Classificação</Text>
                            <Text style={styles.textResult}></Text>
                        </View>
                        <View style={styles.viewContainer}>
                            <Text style={styles.textC}>CONDUTA</Text>
                            <View style={styles.viewMessage}>
                                <Text>TEXTO PADRÃO</Text>
                            </View>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={navigateToMain}
                            >
                                <Text style={styles.buttonText}>FINALIZAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}