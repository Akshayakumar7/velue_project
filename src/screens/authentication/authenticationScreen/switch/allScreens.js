import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PracticeContext,
  PracticeProvider,
} from '../../../../useContext/PracticeContext';
import {SCREEN_NAME} from '../../../../general/screenName';
import GetStarted from '../login/getStartedScreen';
import Login from '../login/loginScreen';
import ForgotPassword from '../login/forgotPasswordScreen';
import OtpVerfication from '../login/otpVerification';
import PasswordReset from '../login/passwordResetScreen';
import Register from '../register/registerScreen';
import OnboardingCompleted from '../register/onBoardingCompletedScreen';
import RegisterScreen from '../../../../../RegisterScreen';
import BottomTab from '../../../../navigation/BottomNavigation';
const Stack = createNativeStackNavigator();

const AllScreen = () => {
  const {userLoggedIn} = useContext(PracticeContext);
  var ans = userLoggedIn;

  return true ? (
    <BottomTab />
  ) : (
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
    </NavigationContainer>
  );
};

export default AllScreen;
