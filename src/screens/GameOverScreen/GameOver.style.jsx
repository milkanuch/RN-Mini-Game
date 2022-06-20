import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import constants from "../../utils/consts";

export default StyleSheet.create({
    screen: {
        flex:1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    hilghlightText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});