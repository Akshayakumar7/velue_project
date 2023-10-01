import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PracticeContext,
  PracticeProvider,
} from '../../../../useContext/PracticeContext';
import {BOTTOM_TAB, SCREEN_NAME} from '../../../../general/screenName';
import GetStarted from '../login/getStartedScreen';
import Login from '../login/loginScreen';
import ForgotPassword from '../login/forgotPasswordScreen';
import OtpVerfication from '../login/otpVerification';
import PasswordReset from '../login/passwordResetScreen';
import Register from '../register/registerScreen';
import OnboardingCompleted from '../register/onBoardingCompletedScreen';
import RegisterScreen from '../../../../../RegisterScreen';
import BottomTab from '../../../../navigation/BottomNavigation';
import Home from '../module/Home/HomeScreen';
import ProductDescription from '../module/Home/ProductDescriptionScreen';
import Orders from '../module/Orders/OrderScreen';
import OrderIdProduct from '../module/Orders/OrderIdProductScreen';
import OrderSummary from '../module/Orders/OrderSummary';
import OrderPlaced from '../module/Orders/OrderPlacedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SaveDraft from '../module/Orders/saveDraftScreen';
const Stack = createNativeStackNavigator();

const AllScreen = () => {
  const {userLoggedIn} = useContext(PracticeContext);
  var ans = userLoggedIn;

  const getData = async () => {
    // const aksh = await AsyncStorage.getItem('user')
    //   .then(res => {
    //     console.log(res, 'res');
    //   })
    //   .catch(e => {
    //     console.log('e', e);
    //   });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {ans ? (
          <Stack.Screen
            name={BOTTOM_TAB}
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name={SCREEN_NAME.Login}
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name={SCREEN_NAME.ProductDescription}
          component={ProductDescription}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.GetStarted}
          component={GetStarted}
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
        <Stack.Screen
          name={SCREEN_NAME.Home}
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={SCREEN_NAME.Orders}
          component={Orders}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.OrderIdProductScreen}
          component={OrderIdProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.OrderSummary}
          component={OrderSummary}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.OrderPlaced}
          component={OrderPlaced}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.SaveDraft}
          component={SaveDraft}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllScreen;
