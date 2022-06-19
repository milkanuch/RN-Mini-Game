import { Text, View } from "react-native";
import styles from "./GuessLogItem.style";

export default function GuessLogItem ({roundNumber, guess}) { 
    return (
    <View style={ styles.listItem }>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
    );
}