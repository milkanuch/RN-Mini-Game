import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import GameScreen from './src/screens/GameScreen/GameScreen';
import StatGameScreen from './src/screens/StartGameScreen/StartGameScreen';
import Colors from "./src/utils/colors";


export default function App() {
  const [userNumber,setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber){ 
    setUserNumber(pickedNumber);
  }
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
            { userNumber ?
              <GameScreen /> :
              <StatGameScreen onPickNumber={pickedNumberHandler} />
            } 
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

