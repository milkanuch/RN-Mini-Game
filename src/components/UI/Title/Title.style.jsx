import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    title: { 
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: '#f0f0f0',
        textAlign:'center',
        borderWidth: Platform.select({ios: 2,android: 3}),
        borderColor: '#f0f0f0',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
});