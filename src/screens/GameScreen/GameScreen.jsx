import { Text, View } from "react-native";
import Title from "../../components/Title/Title";
import styles from "./GameScreen.style";

export default function GameScreen(){
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}