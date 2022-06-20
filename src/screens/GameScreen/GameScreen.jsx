import { useEffect, useState } from "react";
import { Alert,  FlatList,  Text,  useWindowDimensions,  View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../../components/Game/NumberContainer/NumberContainer";
import Card from "../../components/UI/Card/Card";
import InstructionText from "../../components/UI/InstructionText/InstructionText";
import MainButton from "../../components/UI/MainButton/MainButton";
import Title from "../../components/UI/Title/Title";
import styles from "./GameScreen.style";
import GuessLogItem from "../../components/Game/LogItem/GuessLogItem";

let minBoundary = 1,maxBoundary = 100;

function generateRandomBetween(min,max,exclude) {
    const randNumber = Math.floor(Math.random() * (max-min)) + min;
    return randNumber === exclude 
        ? generateRandomBetween(max,min,exclude) 
        : randNumber;
}
export default function GameScreen({ userNumber,onGameOver }) {
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRounds] = useState([]);

    useEffect(() => { 
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess,userNumber,onGameOver]);

    useEffect(() => { 
        minBoundary = 1;
        maxBoundary = 100;
    },[])

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
        const newRandNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRandNumber);
        setGuessRounds(prevGuessRounds => [newRandNumber,...prevGuessRounds]);
    }
    

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <MainButton onPress={ nextGuessHandler.bind(this,'lower') }> 
                            <Ionicons name="md-remove-outline" size={24} color="#f0f0f0" /> 
                        </MainButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <MainButton onPress={ nextGuessHandler.bind(this,'greater') }> 
                            <Ionicons name="md-add-outline" size={24} color="#f0f0f0" /> 
                        </MainButton>
                    </View>
                </View>
            </Card>
            <View style={ styles.listContainer }>
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRounds.length - itemData.index} guess={itemData.item}/>}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}