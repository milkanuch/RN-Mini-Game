import {StyleSheet } from "react-native";
import Colors from "../../../utils/colors";
import constants from "../../../utils/consts";
import deviceWidth from "../../../utils/consts";

export default StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: constants.width < 350 ? 12 : 24,
        margin: constants.width < 350 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontFamily: 'open-sans-bold',
        fontSize: constants.width < 350 ? 28 : 36,
    }
}); 