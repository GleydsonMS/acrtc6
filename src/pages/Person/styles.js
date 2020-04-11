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
        width: 165,
        height: 60,
    },

    viewForm: {
        flex:1,
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 0,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
    },

    viewFormN: {
        flex:1,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 0,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
    },

    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
        fontFamily: "Roboto",
        paddingRight: 15,
    },

    textInput: {
        flex:1,
        width: 240,
        height: 40,
        borderRadius: 8,
        fontSize: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },

    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingTop: 40,
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