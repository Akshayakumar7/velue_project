import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import RegisterScreen from '../../../../../RegisterScreen';
import { BOTTOM_TAB, SCREEN_NAME } from '../../../../general/screenName';
import BottomTab from '../../../../navigation/BottomNavigation';
import { PracticeContext } from '../../../../useContext/PracticeContext';
import ForgotPassword from '../login/forgotPasswordScreen';
import GetStarted from '../login/getStartedScreen';
import Login from '../login/loginScreen';
import OtpVerfication from '../login/otpVerification';
import PasswordReset from '../login/passwordResetScreen';
import Home from '../module/Home/HomeScreen';
import ProductDescription from '../module/Home/ProductDescriptionScreen';
import OrderIdProduct from '../module/Orders/OrderIdProductScreen';
import OrderPlaced from '../module/Orders/OrderPlacedScreen';
import Orders from '../module/Orders/OrderScreen';
import OrderSummary from '../module/Orders/OrderSummary';
import SaveDraft from '../module/Orders/saveDraftScreen';
import OnboardingCompleted from '../register/onBoardingCompletedScreen';
import Register from '../register/registerScreen';
import LoadingScreen from '../login/LoadingScreen';

const Stack = createNativeStackNavigator();

const AllScreen = () => {
  const [loader, setLoader] = useState(true);
  const {userLoggedIn, setUserLOggedIn} = useContext(PracticeContext);
  var userInfo = userLoggedIn;

  const getData = async () => {
    try {
      setLoader(true);
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        await setUserLOggedIn(true);
        console.log(
          'Credentials successfully loaded for user ' + credentials.username,
        );
        setLoader(false);
      } else {
        console.log('No credentials stored');
        setLoader(false);
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      {loader && <LoadingScreen/>}
      {!loader && (
        <Stack.Navigator>
          {userInfo ? (
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
      )}
    </NavigationContainer>
  );
};

export default AllScreen;
