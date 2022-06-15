import { Pressable, Text, View } from "react-native";
import styles from "./MainButton.style";

export default function MainButton({children, onPress}){
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed,styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                onPress={onPress} 
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}