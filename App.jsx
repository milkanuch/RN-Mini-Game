import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useCallback } from 'react';
import { ImageBackground, SafeAreaView, View} from 'react-native';

import GameOver from './src/screens/GameOverScreen/GameOver';
import GameScreen from './src/screens/GameScreen/GameScreen';
import StatGameScreen from './src/screens/StartGameScreen/StartGameScreen';
import Colors from "./src/utils/colors";
import * as SplashScreen from "expo-splash-screen";
import * as Font from 'expo-font';

export default function App() {
  const [userNumber,setUserNumber] = useState(null);
  const [guessRounds,setGuessRounds] = useState(0);
  const [gameIsOver,setGameIsOver] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady){
    return null;
  }
  
  function pickedNumberHandler(pickedNumber){ 
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function restartHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StatGameScreen onPickNumber={pickedNumberHandler} />;
  if(userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  if(gameIsOver && userNumber) screen = <GameOver rounds={guessRounds} userNumber={userNumber} onRestart={restartHandler}/>;

  //yay,i know inline styles is bad but i too lazy for make stylesheet object:)
  return (
      <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={{flex:1}}>
          <ImageBackground 
            source={require('./assets/images/background.png')} 
            resizeMode="cover"
            style={{flex:1}}
            imageStyle={{opacity:0.30}}
          > 
            <View onLayout={onLayoutRootView}></View>
            <SafeAreaView style={{flex:1}}>
              { screen }
            </SafeAreaView>
          </ImageBackground>
      </LinearGradient>
  );
}

