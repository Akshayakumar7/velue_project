import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../general/screenName';
import GetStarted from '../screens/authentication/authenticationScreen/login/getStartedScreen';
import Login from '../screens/authentication/authenticationScreen/login/loginScreen';
import RegisterScreen from '../../RegisterScreen';
import ForgotPassword from '../screens/authentication/authenticationScreen/login/forgotPasswordScreen';
import OtpVerfication from '../screens/authentication/authenticationScreen/login/otpVerification';
import PasswordReset from '../screens/authentication/authenticationScreen/login/passwordResetScreen';
import Register from '../screens/authentication/authenticationScreen/register/registerScreen';
import OnboardingCompleted from '../screens/authentication/authenticationScreen/register/onBoardingCompletedScreen';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.GetStarted}
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.Login}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.RegisterScreen}
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.ForgotPassword}
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.OtpVerification}
        component={OtpVerfication}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.PasswordReset}
        component={PasswordReset}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.Register}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.OnboardingCompleted}
        component={OnboardingCompleted}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default StackNavigation;
