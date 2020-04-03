import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/teste.png';
import styles from './styles';

export default function Person () {
    const navigation = useNavigation();
    const [pista, setPista] = useState('');
    const [voltas, setVoltas] = useState('');
    const [sobra, setSobra] = useState('');

    function handleResults () {
        const dataPista = { pista, voltas, sobra };

        navigation.navigate('Results', dataPista);
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
                            <Text style={styles.text}>COMPRIMENTO DA PISTA</Text>
                           
                            <TextInput 
                                style={styles.textInput}
                                placeholder="EM METROS"
                                placeholderTextColor='#666'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={pista}
                                onChangeText={setPista}
                            />
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>NÚMERO DE VOLTAS</Text>
                            <TextInput 
                                style={styles.textInput}
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={voltas}
                                onChangeText={setVoltas}
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
                                value={sobra}
                                onChangeText={setSobra}
                            />
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleResults}
                            >
                                <Text style={styles.buttonText}>CALCULAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}