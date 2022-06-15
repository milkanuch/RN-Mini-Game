import { StyleSheet } from "react-native";

export default StyleSheet.create({
    buttonInnerContainer: { 
        backgroundColor: '#72063c',
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