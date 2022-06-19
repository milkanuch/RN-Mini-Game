import { View } from "react-native";
import styles from "./Card.style"

export default function Card({children}) {
    return <View style={styles.card}>
        {children}
    </View>
}