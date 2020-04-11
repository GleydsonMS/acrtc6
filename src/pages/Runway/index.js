import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/teste.png';
import styles from './styles';

export default function Person() {
    const navigation = useNavigation();
    const route = useRoute();
    const [way, setWay] = useState('');
    const [turns, setTurns] = useState('');
    const [over, setOver] = useState('');
    const [classification, setClassification] = useState({
        acr: ''
    });
    const dpt = (parseFloat(way) * parseInt(turns)) + parseFloat(over);
    const imc = (parseFloat(route.params.data.weight) / (parseFloat(route.params.data.height) * parseFloat(route.params.data.height))).toFixed(2);
    const vo2 = (41.946 + (0.022 * dpt) - (0.875 * imc) + (2.107 * parseInt(route.params.data.sex))).toFixed(1);

    const sex = route.params.data.sex;

    useEffect(() => {
        if (sex == 0) {
            if (vo2 <= 38.7) {
                setClassification({
                    acr: "ACR Insatisfatória"
                });
            } else if (vo2 > 38.7) {
                setClassification({
                    acr: "ACR Satisfatória"
                })
            } else {
                setClassification({
                    acr: ""
                });
            }
        } else {
            if (vo2 <= 47.8) {
                setClassification({
                    acr: "ACR Insatisfatória"
                });
            } else if (vo2 > 47.8) {
                setClassification({
                    acr: "ACR Satisfatória"
                });
            } else {
                setClassification({
                    acr: ""
                });
            }
        }
    }, [vo2]);

    function handleResults() {
        navigation.navigate('Results', { dpt, vo2, classification });
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
                        <Text style={styles.text}>COMPRIMENTO DA PISTA</Text>

                        <TextInput
                            style={styles.textInput}
                            placeholder="EM METROS"
                            placeholderTextColor='#666'
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={way}
                            onChangeText={setWay}
                        />
                    </View>
                    <View style={styles.viewFormN}>
                        <Text style={styles.text}>NÚMERO DE VOLTAS</Text>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={turns}
                            onChangeText={setTurns}
                        />
                    </View>
                    <View style={styles.viewFormN}>
                        <Text style={styles.text}>METRAGEM ADICIONAL</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="EM METROS"
                            placeholderTextColor='#666'
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={over}
                            onChangeText={setOver}
                        />
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleResults()}
                        >
                            <Text style={styles.buttonText}>CALCULAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}