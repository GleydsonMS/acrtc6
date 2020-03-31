import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text,TouchableOpacity, FlatList, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/dados.png';
import styles from './styles';
//import { TextInput } from 'react-native-gesture-handler';

export default function Person () {
    const navigation = useNavigation();

    function navigateToRunTest() {
        navigation.navigate('RunTest');
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
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Sexo </Text>
                            
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Idade </Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Peso  </Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                        <View style={styles.viewFormN}>
                            <Text style={styles.text}>Estatura</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={navigateToRunTest}
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