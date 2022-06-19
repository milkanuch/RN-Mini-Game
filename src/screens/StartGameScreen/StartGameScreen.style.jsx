import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export default StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: { 
        height: 50,
        width: 50,
        fontSize: 32,
        marginBottom: 10,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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