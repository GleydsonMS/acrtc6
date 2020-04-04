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
        width: 190,
        height: 18,
    },

    viewForm: {
        flex:1,
        marginTop: 20,
        paddingTop: 20,
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

    viewContainer: {
        flex:1,
        marginTop: 10,
        paddingTop: 20,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        alignItems: "center",
    },

    text: {
        flex:1,
        flexDirection: "row",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Roboto",
        paddingRight: 15,
        textAlign: "center",
    },

    textC: {
      flex:1,
      flexDirection: "row",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 28,
      fontFamily: "Roboto",
      paddingRight: 15,
      textAlign: "center",
  },

    textResult: {
        flex:1,
        height: 40,
        borderRadius: 8,
        fontSize: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignContent: "center",
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
      width: 300,
      height: 150,
    },

    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 30,
        marginBottom:20,
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