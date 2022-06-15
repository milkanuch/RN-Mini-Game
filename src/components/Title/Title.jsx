import { Text } from "react-native";
import styles from  "./Title.style";

export default function Title({children}){
    return(<Text style={styles.title}>{children}</Text>)
}