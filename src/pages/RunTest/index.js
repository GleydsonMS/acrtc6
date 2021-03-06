import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, ScrollView, TouchableOpacity, Vibration } from 'react-native';
import moment from 'moment';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/teste.png';
import styles from './styles';

export default function RunTest() {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params.data;

    function navigateToRunway() {
        navigation.navigate('Runway', { data });
    }

    const [time, setTime] = useState({
        minutes: '',
        seconds: ''
    });

    const [message, setMessage] = useState({
        messageAlert: '...',
        messageAlert2: '',
    });

    const [n, setN] = useState(1);

    useEffect(() => {
        setTime({
            minutes: '06',
            seconds: '00'
        });
        setMessage({
            messageAlert: '...',
        });
        setN(1);
    }, []);

    function clock() {
        const clock = moment();
        let seconds = 0;
        let minutes = 6;

        clock
            .add(seconds, 'seconds')
            .add(minutes, 'minutes');

        const current = moment();
        let diffTime = clock.unix() - current.unix();
        let duration = moment.duration(diffTime * 1000, 'milliseconds');
        const interval = 1000;

        countInterval = setInterval(() => {
            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            minutes = moment.duration(duration).minutes().toString();
            seconds = moment.duration(duration).seconds().toString();

            setTime({
                minutes: minutes.length === 1 ? '0' + minutes : minutes,
                seconds: seconds.length === 1 ? '0' + seconds : seconds
            });

            if (minutes == 4 && seconds == 0) {
                setMessage({
                    messageAlert: 'JÁ SE PASSARAM 2 MINUTOS!'
                });
                Vibration.vibrate(3000);
            } else if (minutes == 2 && seconds == 0) {
                setMessage({
                    messageAlert: 'FALTAM 2 MINUTOS!'
                });
                Vibration.vibrate(3000);
            } else if (minutes == 1 && seconds == 0) {
                setMessage({
                    messageAlert: '',
                    messageAlert2: 'FALTA 1 MINUTO!',
                });
                Vibration.vibrate(3000);
            } else if (minutes == 0 && seconds == 0) {
                clearInterval(countInterval);
                setMessage({
                    messageAlert: 'ACABOU, PERMANEÇA ONDE VOCÊ ESTÁ!',
                    messageAlert2: '',
                });
                Vibration.vibrate(3000);
            }
        }, 1000);
    }

    function startClock(n) {
        setMessage({
            messageAlert: '...',
        });
        if (n == 0) {
            clearInterval(countInterval);
        } else if (n == 1) {
            setN(n+1);
            clock();
        } else if (n > 1) {
            clearInterval(countInterval);
            clock();
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
                    <View style={styles.viewTimer}>
                        <Text style={styles.textTimer}>{time.minutes}:{time.seconds}</Text>
                    </View>
                    <View style={styles.viewButtonC}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => startClock(0)}
                        >
                            <Text style={styles.buttonText}>PARAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => startClock(n)}
                        >
                            <Text style={styles.buttonText}>INICIAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewMessage}>
                        <Text style={styles.textMessage}>{message.messageAlert}</Text>
                        <Text style={styles.textMessage2}>{message.messageAlert2}</Text>
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
            </ScrollView>
        </View>
    );
}