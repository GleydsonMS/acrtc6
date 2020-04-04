import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/teste.png';
import styles from './styles';

export default function RunTest () {
    const navigation = useNavigation();
    const route = useRoute();
    const  data  = route.params.data;

    function navigateToRunway() {
        navigation.navigate('Runway', { data });
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
                        <View style={styles.viewTimer}>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {}}
                            >
                                <Text style={styles.buttonText}>INICIAR</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewMessage}>
                            <Text/>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={navigateToRunway}
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