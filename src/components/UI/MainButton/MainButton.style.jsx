import { StyleSheet } from "react-native";
import Colors from "../../../utils/colors";

export default StyleSheet.create({
    buttonInnerContainer: { 
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2 
    },
    buttonText: { 
        color: '#fff',
        textAlign: 'center',
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    pressed: { 
        opacity: 0.75,
    }
});