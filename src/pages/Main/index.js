import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/orientacoes.png';
import styles from './styles';

export default function Main() {
    const navigation = useNavigation();

    function navigateToInstructionsFirst() {
        navigation.navigate('InstructionsFirst');
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
                            Esta é uma ferramenta para lhe auxiliar na avaliação dos níveis
                            de aptidão cardiorrespiratória de pessoas entre 10 e 14 anos.
                            </Text>
                        <Text style={styles.message2}>
                            O objetivo é calcular o VO2máximo de forma indireta utilizando
                            o teste de corrida de 6 minutos (TC6).
                            </Text>
                        <Text style={styles.message2}>
                            O teste segue as recomendações do PROESP Brasil. Para mais
                            informações sobre este projeto acesse a página pelo link
                            </Text>
                        <Text style={styles.linkSite}
                            onPress={() => Linking.openURL('https://www.ufrgs.br/proesp/')}>
                            https://www.ufrgs.br/proesp/
                            </Text>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={navigateToInstructionsFirst}
                        >
                            <Text style={styles.buttonText}>IR PARA TESTE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}