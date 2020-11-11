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
                            O objetivo é calcular o VO2 máximo de forma indireta utilizando
                            o teste de corrida de 6 minutos (TC6).
                            </Text>
                        
                        <Text style={styles.message3}>
                            Referências:            
                            </Text>
                        
                        <Text style={styles.message4}>
                            ACSM. Diretrizes do ACSM para os testes de esforço e sua prescrição. American College of Sports Medicine; tradução Dilza Balteiro Pereira de Campos. – 9. ed. – Rio de Janeiro: Guanabara, 2014.
                        </Text>
                        
                        <Text style={styles.message4}>
                            BERGMANN, G. G. et al. Teste de corrida/caminhada de 6 minutos para a predição do consumo de oxigênio de pico em adolescentes. Rev Bras Ativ Fis e Saúde, Pelotas/RS, v. 1, n. 1, p. 64-73, Jan. 2014.
                            </Text>
                        
                        <Text style={styles.message4}>
                            GAYA, A. C. A., GAYA, A. R. Projeto esporte Brasil: manual de testes e avaliação / Porto Alegre: UFRGS, 2016. 
                            <Text style={styles.linkSite}
                                onPress={() => Linking.openURL('https://www.ufrgs.br/proesp/')}>
                                    https://www.ufrgs.br/proesp/
                                </Text>
                            </Text>
                        
                        <Text style={styles.message4}>
                            RODRIGUES, A. N. et al. Valores de consumo máximo de oxigênio determinados pelo teste cardiopulmonar em adolescentes: uma proposta de classificação. J. Pediatr., Porto Alegre, v. 82, n. 6, p. 426-430, Dez. 2006.   
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