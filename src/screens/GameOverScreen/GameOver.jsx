import { Image, ScrollView, Text, useWindowDimensions, View } from "react-native";
import MainButton from "../../components/UI/MainButton/MainButton";
import Title from "../../components/UI/Title/Title";
import styles from "./GameOver.style"

export default function GameOver({ rounds,userNumber,onRestart }) {
    const { width,height } = useWindowDimensions();

    let imageSize = 300;
    if(width < 350 ) { imageSize = 150; }

    if(height < 400) { imageSize = 80; }

    return (
    <ScrollView style={ styles.screen }>
        <View style={ styles.rootContainer }> 
            <Title>Game OVER!!!</Title>
            <View style={[styles.imageContainer,{
                        width: imageSize,
                        height:imageSize,
                        borderRadius:imageSize / 2
                    } 
                ]}
            >
                <Image 
                    style={ styles.image } 
                        source={require("../../../assets/images/success.png")}
                /> 
            </View>
            <Text style={ styles.summaryText }>
                Ur Phone needed 
                <Text style={ styles.hilghlightText }> { rounds } </Text> 
                rounds to guess the number 
                <Text style={ styles.hilghlightText }> { userNumber }</Text>.
            </Text>
            <MainButton onPress={ onRestart }>Start New Game</MainButton>
        </View> 
    </ScrollView>
    );
}