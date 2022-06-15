import { useState } from "react";
import { Alert, Text, View } from "react-native";

import NumberContainer from "../../components/Game/NumberContainer";
import MainButton from "../../components/UI/MainButton/MainButton";
import Title from "../../components/UI/Title/Title";
import styles from "./GameScreen.style";

export default function GameScreen({userNumber}){
    let minBoundary = 1,maxBoundary = 100;
    const initialGuess = generateRandomBetween(minBoundary,maxBoundary,userNumber);

    const [currentGuess,setCurrentGuess] = useState(initialGuess);

    function generateRandomBetween(min,max,exclude){
        const randNumber = Math.floor(Math.random() * (max-min)) + min;
        return randNumber === exclude 
            ? generateRandomBetween(max,min,exclude) 
            : randNumber;
    }

    function nextGuessHandler(direction) {
        if((direction === 'lower' && currentGuess < userNumber) 
            || (direction === 'greater' && currentGuess > userNumber)) {
                Alert.alert("Don't LIE!!!","You know that this is wrong...",
                [{text: 'Sorry',style: 'cancel'}]);
                return;
        }

        if(direction === 'lower') { 
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        setCurrentGuess(generateRandomBetween(minBoundary,maxBoundary,currentGuess));
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <MainButton onPress={ nextGuessHandler.bind(this,'greater') }> + </MainButton>
                <MainButton onPress={ nextGuessHandler.bind(this,'lower') }> - </MainButton>
            </View>
            <View>
                
            </View>
        </View>
    )
}