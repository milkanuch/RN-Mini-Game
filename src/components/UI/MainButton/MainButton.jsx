import { Pressable, Text, View } from "react-native";
import styles from "./MainButton.style";
import Colors from "../../../utils/colors";

export default function MainButton({children, onPress}){
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed,styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                onPress={onPress} 
                android_ripple={{ color: Colors.primary500 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}