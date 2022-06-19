import { StyleSheet } from "react-native";
import Colors from "../../../utils/colors";

export default StyleSheet.create({
    listItem: { 
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.325,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})