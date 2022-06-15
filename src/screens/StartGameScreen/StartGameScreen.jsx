import { Alert, TextInput, View } from "react-native";
import { useState } from "react";

import styles from "./StartGameScreen.style";
import MainButton from "../../components/MainButton/MainButton";


export default function StatGameScreen({onPickNumber}) {
    const [eneteredNumber,setEnteredNumber] = useState('');

    function numberInputHandler(eneteredText){
        setEnteredNumber(eneteredText);
    }      

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(eneteredNumber);
        console.log(eneteredNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
            
            Alert.alert('Invalid Input',
            'Number has to be a number between 1 and 99',
            [{text:'Okay',style:'destructive',onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={eneteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={resetInputHandler}>Reset</MainButton>
                </View>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
                </View>
            </View>
        </View>
    );
}
