import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import moment from 'moment';

import logoImg from '../../assets/logo.png';
import titleImg from '../../assets/teste.png';
import styles from './styles';

export default function RunTest () {
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

    useEffect(() => {
        setTime({
            minutes : '06',
            seconds : '00'
        });
    }, []);

    function startClock() {
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
                minutes : minutes.length === 1 ? '0'+minutes : minutes,
                seconds : seconds.length === 1 ? '0'+seconds : seconds
            });
            
            if(minutes == 0 && seconds == 0) {
                clearInterval(countInterval);
            }
        }, 1000);
    }

    function stopClock() {
        clearInterval(countInterval);
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
                            <Text style={styles.textTimer}>{time.minutes}:{time.seconds}</Text>
                        </View>
                        <View style={styles.viewButtonC}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => stopClock()}
                            >
                                <Text style={styles.buttonText}>PARAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => startClock()}
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