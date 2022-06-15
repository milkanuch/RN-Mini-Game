import { View,Text } from "react-native"
import styles from "./NumberContainer.style"

export default function NumberContainer({children}){
    return( 
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
};