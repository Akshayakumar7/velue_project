import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDescription from '../screens/authentication/authenticationScreen/module/Home/ProductDescriptionScreen';
import Home from '../screens/authentication/authenticationScreen/module/Home/HomeScreen';
import {SCREEN_NAME} from '../general/screenName';
import Orders from '../screens/authentication/authenticationScreen/module/Orders/OrderScreen';
import OrderIdProduct from '../screens/authentication/authenticationScreen/module/Orders/OrderIdProductScreen';

const NestedHomeScreenNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.ProductDescription}
        component={ProductDescription}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};

const NestedOrderScreenNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.Orders}
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.ProductDescription}
        component={OrderIdProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export {NestedHomeScreenNavigation, NestedOrderScreenNavigation};
