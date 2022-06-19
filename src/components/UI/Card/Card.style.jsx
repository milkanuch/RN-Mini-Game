import { StyleSheet } from "react-native";
import Colors from "../../../utils/colors"

export default StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        padding: 16,
        backgroundColor: Colors.primary800,
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
    }
})