import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text,TouchableOpacity, FlatList, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/dados.png';
import styles from './styles';
//import { TextInput } from 'react-native-gesture-handler';

export default function Person () {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [estatura, setEstatura] = useState('');

    function handlePerson () {
        const data = { nome, sexo, idade, peso, estatura };

        navigation.navigate('RunTest', data);
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
                            <Text style={styles.text}>Nome</Text>
                            <TextInput 
                                style={styles.textInput}
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={nome}
                                onChangeText={setNome}
                            />
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Sexo </Text>
                            <Text style={styles.text}>M</Text>
                            <RadioButton 
                                color="#fff"
                                value="1"
                                status={sexo == '1' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('1')}
                            />
                            <Text style={styles.text}>F</Text>
                            <RadioButton 
                                 color="#fff"
                                value= '0'
                                status={sexo == '0' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('0')}
                            />
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Idade </Text>
                            <TextInput 
                                style={styles.textInput}
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={idade}
                                onChangeText={setIdade}
                            />
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Peso  </Text>
                            <TextInput 
                                style={styles.textInput}
                                placeholder="EM KG"
                                placeholderTextColor='#666'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={peso}
                                onChangeText={setPeso}
                            />
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Estatura</Text>
                            <TextInput 
                                style={styles.textInput}
                                placeholder="EM METROS"
                                placeholderTextColor='#666'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={estatura}
                                onChangeText={setEstatura}
                            />
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handlePerson}
                            >
                                <Text style={styles.buttonText}>PRÓXIMO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}