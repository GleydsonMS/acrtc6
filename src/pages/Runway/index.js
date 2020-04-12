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
        acr: '',
        message: '',
    });
    const dpt = (parseFloat(way.replace(',','.')) * parseInt(turns)) + parseFloat(over.replace(',','.'));
    const imc = (parseFloat(route.params.data.weight.replace(',','.')) / (parseFloat(route.params.data.height.replace(',','.')) * parseFloat(route.params.data.height.replace(',','.')))).toFixed(2);
    const vo2 = (41.946 + (0.022 * dpt) - (0.875 * imc) + (2.107 * parseInt(route.params.data.sex))).toFixed(1);

    const sex = route.params.data.sex;

    const [error, setError] = useState('');

    useEffect(() => {
        if (sex == 0) {
            if (vo2 <= 38.7) {
                setClassification({
                    acr: "ACR Insatisfatória",
                    message: "Baixos níveis de ACR aumentam o risco para o desenvolvimento de doenças cardiovasculares e metabólicas. É importante promover a melhoria destes níveis com a prática de exercícios físicos. Recomenda-se exercício aeróbico de intensidade moderada a vigorosa, pelo menos 3 vezes por semana. Incentivar a prática de atividades físicas aeróbicas agradáveis e adequadas ao desenvolvimento, incluindo corrida, caminhada rápida, natação, dança e ciclismo.",
                });
            } else if (vo2 > 38.7) {
                setClassification({
                    acr: "ACR Satisfatória",
                    message: "Bons níveis de ACR estão associados com melhores condições de saúde e com melhor aproveitamento escolar. É importante manter o condicionamento com a prática de exercícios físicos. Recomenda-se exercício aeróbico de intensidade moderada a vigorosa, pelo menos 3 vezes por semana. Incentivar a prática de atividades físicas aeróbicas agradáveis e adequadas ao desenvolvimento, incluindo corrida, caminhada rápida, natação, dança e ciclismo.",
                })
            } else {
                setClassification({
                    acr: "",
                    message: "",
                });
            }
        } else {
            if (vo2 <= 47.8) {
                setClassification({
                    acr: "ACR Insatisfatória",
                    message: "Baixos níveis de ACR aumentam o risco para o desenvolvimento de doenças cardiovasculares e metabólicas. É importante promover a melhoria destes níveis com a prática de exercícios físicos. Recomenda-se exercício aeróbico de intensidade moderada a vigorosa, pelo menos 3 vezes por semana. Incentivar a prática de atividades físicas aeróbicas agradáveis e adequadas ao desenvolvimento, incluindo corrida, caminhada rápida, natação, dança e ciclismo.",
                });
            } else if (vo2 > 47.8) {
                setClassification({
                    acr: "ACR Satisfatória",
                    message: "Bons níveis de ACR estão associados com melhores condições de saúde e com melhor aproveitamento escolar. É importante manter o condicionamento com a prática de exercícios físicos. Recomenda-se exercício aeróbico de intensidade moderada a vigorosa, pelo menos 3 vezes por semana. Incentivar a prática de atividades físicas aeróbicas agradáveis e adequadas ao desenvolvimento, incluindo corrida, caminhada rápida, natação, dança e ciclismo.",
                });
            } else {
                setClassification({
                    acr: "",
                    message: "",
                });
            }
        }
    }, [vo2]);

    function handleResults() {
        if(way != '' && turns != '' && over != '') {
            setError('');
            navigation.navigate('Results', { dpt, vo2, classification });
        } else {
            setError('Preencha os todos campos necessários!');
        }
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
                            keyboardType={'numeric'}
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
                            keyboardType={'numeric'}
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
                            keyboardType={'numeric'}
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
                    <Text style={styles.textError}>{error}</Text>
                </View>
            </ScrollView>
        </View>
    );
}