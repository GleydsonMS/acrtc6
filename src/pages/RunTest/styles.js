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
        borderRadius: 16,
    },

    imageTitle: {
        width: 180,
        height: 70,
    },

    viewTimer: {
        flex:1,
        backgroundColor: '#fff',
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 30,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },

    textTimer: {
        fontWeight: 'bold',
        fontSize: 48,
        fontFamily: 'Roboto',
    },

    viewMessage: {
        flex:1,
        backgroundColor: '#fff',
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 30,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        height: 160,
    },

    textMessage:{
        fontWeight: 'bold',
        fontSize: 32,
        fontFamily: 'Roboto',
        textAlign: 'center',
    }, 

    viewButtonC: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginBottom:40,
    },
    
    viewButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom:40,
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
        fontFamily: 'Roboto',
    },
});