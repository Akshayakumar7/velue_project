// In App.js in a new project

import * as React from 'react';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name={SCREEN_NAME.GetStarted}
    //       component={GetStarted}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name={SCREEN_NAME.Login}
    //       component={Login}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name={SCREEN_NAME.RegisterScreen}
    //       component={RegisterScreen}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name={SCREEN_NAME.ForgotPassword}
    //       component={ForgotPassword}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name={SCREEN_NAME.OtpVerification}
    //       component={OtpVerfication}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name={SCREEN_NAME.PasswordReset}
    //       component={PasswordReset}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name={SCREEN_NAME.Register}
    //       component={Register}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //      <Stack.Screen
    //       name={SCREEN_NAME.OnboardingCompleted}
    //       component={OnboardingCompleted}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
     <BottomTab/>
  );
}

export default App;
