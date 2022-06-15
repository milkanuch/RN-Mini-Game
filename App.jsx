import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import GameScreen from './src/screens/GameScreen/GameScreen';
import StatGameScreen from './src/screens/StartGameScreen/StartGameScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber){ 
    setUserNumber(pickedNumber);
  }
  //yay,i know inline styles is bad but i too lazy for make stylesheet object:)
  return (
      <LinearGradient colors={['#4e0329','#ddb52f']} style={{flex:1}}>
        <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode="cover"
          style={{flex:1}}
          imageStyle={{opacity:0.30}}
        > 
          { userNumber ?
            <GameScreen /> :
            <StatGameScreen onPickNumber={pickedNumberHandler} />
          } 
        </ImageBackground>
      </LinearGradient>
  );
}

