import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/authentication/authenticationScreen/module/Home/HomeScreen';
import Order from '../screens/authentication/authenticationScreen/module/Orders/OrderScreen';
import Account from '../screens/authentication/authenticationScreen/module/Account/AccountScreen';
import Cart from '../screens/authentication/authenticationScreen/module/Cart/CartScreen';
import {
  ACCOUNT_ICON,
  BLUE_BALL_ICON,
  CART_ICON,
  FOCUSED_ACCOUNT_ICON,
  FOCUSED_HOME_ICON,
  FOCUSED_ORDER_ICON,
  HOME_ICON,
  ORDER_ICON,
} from '../assets/imagepath/imagepath';
import {hp, wp} from '../commonMethod/screenRatio';
import SvgImage from '../component/common/svgImage';
import {color} from '../assets/colors/color';
import NestedHomeScreenNavigation from './NestedNavigation';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}
      >
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: color.white,
          tabBarInactiveTintColor: color.white,
          tabBarStyle: {
            height: hp(9),
            backgroundColor: color.darkblue,
          },
          tabBarLabelStyle: {
            fontSize: 16,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <SvgImage
                  Source={focused ? FOCUSED_HOME_ICON : HOME_ICON}
                  height={focused ? hp(12) : hp(3)}
                  width={focused ? wp(16) : wp(6.5)}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Order}
          options={{
            tabBarIcon: ({focused}) => (
              <SvgImage
                Source={focused ? FOCUSED_ORDER_ICON : ORDER_ICON}
                height={focused ? hp(12) : hp(3)}
                width={focused ? wp(16) : wp(6.5)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          
          options={{
            tabBarIcon: ({focused}) => (
              <SvgImage
                Source={focused ? FOCUSED_ACCOUNT_ICON : ACCOUNT_ICON}
                height={focused ? hp(12) : hp(3)}
                width={focused ? wp(16) : wp(6.5)}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name={SCREEN_NAME.Cart}
          component={Cart} // Replaced Screen 2
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: color.white}}>{SCREEN_NAME.Cart}</Text>
            ),
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  {focused && (
                    <View>
                      <SvgImage
                        Source={BLUE_BALL_ICON}
                        height={hp(3)}
                        width={wp(6.5)}
                      />
                    </View>
                  )}
                  <SvgImage Source={CART_ICON} height={hp(4)} width={wp(7)} />
                </View>
              );
            },
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  commonMargin: {
    marginLeft: wp(0.6),
  },
});

export default BottomTab;
