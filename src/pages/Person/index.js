import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Person () {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={logoImg} />
                <Text style={styles.headerTitle}>
                    DIGITE OS DADOS
                </Text>
            </View>
        </View>
    );
}