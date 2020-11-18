import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/resultados.png';
import styles from './styles';

export default function Person() {
    const navigation = useNavigation();
    const route = useRoute();
    const distance = route.params.dpt;
    const vo2 = route.params.vo2;
    const { acr } = route.params.classification;
    const { message } = route.params.classification;

    function navigateToMain() {
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={logoImg} />
                <Image style={styles.imageTitle} source={titleImg} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.viewForm}>
                        <Text style={styles.text}>Distância Percorrida Total</Text>
                        <Text style={styles.textResult}>{distance.toFixed(1)}</Text>
                    </View>
                    <View style={styles.viewFormNV}>
                        <Text style={styles.text2}>VO2</Text>
                        <Text style={styles.textResultV}>{vo2}</Text>
                        <Text style={styles.textN}>ml/kg/min</Text>
                    </View>
                    <View style={styles.viewFormN}>
                        <Text style={styles.text}>Classificação</Text>
                        <Text style={styles.textResult}>{acr}</Text>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.textC}>CONDUTA</Text>
                        <View style={styles.viewMessage}>
                            <Text style={styles.message}>
                                {message}
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
            </ScrollView>
        </View>
    );
}