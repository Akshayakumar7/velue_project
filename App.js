import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';
import GetStarted from './src/screens/authentication/authenticationScreen/login/getStartedScreen';
import Login from './src/screens/authentication/authenticationScreen/login/loginScreen';
import ForgotPassword from './src/screens/authentication/authenticationScreen/login/forgotPasswordScreen';
import OtpVerfication from './src/screens/authentication/authenticationScreen/login/otpVerification';
import PasswordReset from './src/screens/authentication/authenticationScreen/login/passwordResetScreen';
import {SCREEN_NAME} from './src/general/screenName';
import Register from './src/screens/authentication/authenticationScreen/register/registerScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from './src/navigation/BottomNavigation';
import OnboardingCompleted from './src/screens/authentication/authenticationScreen/register/onBoardingCompletedScreen';
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

// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ScreenOne from './src/temp/screenone';
// import ScreenTwo from './src/temp/screentwo';
// import { PracticeProvider } from './src/useContext/PracticeContext';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <PracticeProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="ScreenOne" component={ScreenOne} />
//           <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PracticeProvider>
//   );
// }

// export default App;
