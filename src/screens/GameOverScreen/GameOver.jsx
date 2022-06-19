import { Image, Text, View } from "react-native";
import MainButton from "../../components/UI/MainButton/MainButton";
import Title from "../../components/UI/Title/Title";
import styles from "./GameOver.style"

export default function GameOver({ rounds,userNumber,onRestart }){
    return (
    <View style={styles.rootContainer}> 
        <Title>Game OVER!!!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../../assets/images/success.png")}></Image>
        </View>
        <Text style={styles.summaryText}>
            Ur Phone needed <Text style={styles.hilghlightText}>{rounds}</Text> rounds to guess the number <Text style={styles.hilghlightText}>{userNumber}</Text>.
        </Text>
        <MainButton onPress={onRestart}>Start New Game</MainButton>
    </View> 
    );
}