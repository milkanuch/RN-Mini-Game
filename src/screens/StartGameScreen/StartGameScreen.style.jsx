import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: '#3b021f',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        //shadow for IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 8
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }, 
    numberInput: { 
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: { 
        flex: 1
    }
});