import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/dados.png';
import styles from './styles';

export default function Person() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [error, setError] = useState('');

    const data = { name, sex, age, weight, height };

    function handlePerson() {
        if(sex != '' && weight != '' && height != '') {
            setError('');
            navigation.navigate('RunTest', { data });
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
                        <Text style={styles.text}>Nome</Text>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize='words'
                            autoCorrect={false}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.viewFormN}>
                        <Text style={styles.text}>Sexo </Text>
                        <Text style={styles.text}>M</Text>
                        <RadioButton
                            color="#fff"
                            value="1"
                            status={sex == '1' ? 'checked' : 'unchecked'}
                            onPress={() => setSex('1')}
                        />
                        <Text style={styles.text}>F</Text>
                        <RadioButton
                            color="#fff"
                            value='0'
                            status={sex == '0' ? 'checked' : 'unchecked'}
                            onPress={() => setSex('0')}
                        />
                    </View>
                    <View style={styles.viewFormN}>
                        <Text style={styles.text}>Idade </Text>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType={'numeric'}
                            value={age}
                            onChangeText={setAge}
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
                            keyboardType={'numeric'}
                            value={weight}
                            onChangeText={setWeight}
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
                            keyboardType={'numeric'}
                            value={height}
                            onChangeText={setHeight}
                        />
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handlePerson()}
                        >
                            <Text style={styles.buttonText}>PRÓXIMO</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textError}>{error}</Text>
                </View>
            </ScrollView>
        </View>
    );
}