import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/resultados.png';
import styles from './styles';

export default function Person () {
    const navigation = useNavigation();
    const route = useRoute();
    const distancia = route.params.dpt;
    const vo2 = route.params.vo2;
    const classificacao = route.params.classificacao.acr;

    function navigateToMain () {

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
                            <Text style={styles.textResult}>{distancia.toFixed(2)}</Text>
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>VO2</Text>
                            <Text style={styles.textResult}>{vo2}</Text>
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Classificação</Text>
                            <Text style={styles.textResult}>{classificacao}</Text>
                        </View>
                        <View style={styles.viewContainer}>
                            <Text style={styles.textC}>CONDUTA</Text>
                            <View style={styles.viewMessage}>
                                <Text style={styles.message}>
                                    Recomenda-se a prescrição de atividades físicas 
                                    aeróbicas agradáveis e adequadas ao desenvolvimento, 
                                    incluindo corrida, caminhada rápida, natação, dança 
                                    e ciclismo. 
                                </Text>
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