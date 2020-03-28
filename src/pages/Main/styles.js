import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#00B386",
        opacity: 0.6,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    image: {
        width: 140,
        height: 90,
    },

    headerTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily: 'Roboto',
    },

    viewMessage: {
        backgroundColor: '#fff',
        marginTop: 100,
        paddingTop: 40,
        paddingBottom: 40,
        paddingHorizontal: 20,
        borderRadius: 16,
    },

    message: {
        color: "#000",
        fontSize: 24,
    },

    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },

    button: {
        backgroundColor: '#fff',
        width: 160,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});