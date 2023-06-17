import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PracticeProvider} from './src/useContext/PracticeContext';
import AllScreen from './src/screens/authentication/authenticationScreen/switch/allScreens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PracticeProvider>
      <AllScreen />
    </PracticeProvider>
  );
};

export default App;


//remove unused code -  Shift + Alt + O


