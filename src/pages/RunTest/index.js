import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/teste.png';
import styles from './styles';

export default function RunTest () {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={logoImg} />
                <Image style={styles.imageTitle} source={titleImg} />
            </View>
        </View>
    );
}