import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import GameOver from './src/screens/GameOverScreen/GameOver';
import GameScreen from './src/screens/GameScreen/GameScreen';
import StatGameScreen from './src/screens/StartGameScreen/StartGameScreen';
import Colors from "./src/utils/colors";

export default function App() {
  const [userNumber,setUserNumber] = useState(null);
  const [gameIsOver,setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber){ 
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }
  let screen = <StatGameScreen onPickNumber={pickedNumberHandler} />;

  if(userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  if(gameIsOver && userNumber) screen = <GameOver />;
  //yay,i know inline styles is bad but i too lazy for make stylesheet object:)
  return (
      <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={{flex:1}}>
        <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode="cover"
          style={{flex:1}}
          imageStyle={{opacity:0.30}}
        > 
          <SafeAreaView style={{flex:1}}>
            { screen }
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

