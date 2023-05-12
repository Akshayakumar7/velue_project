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
  HOME_ICON,
  ORDER_ICON,
} from '../assets/imagepath/imagepath';
import {hp, wp} from '../commonMethod/screenRatio';
import SvgImage from '../component/common/svgImage';
import {color} from '../assets/colors/color';
import {SCREEN_NAME} from '../general/screenName';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: hp(10),
            backgroundColor: color.darkblue,
          },
        })}>
        <Tab.Screen
          name={SCREEN_NAME.Home}
          component={Home}
          options={{
            tabBarLabel: () => (
              <Text style={{color: color.white}}>{SCREEN_NAME.Home}</Text>
            ),
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  {focused && (
                    <View style={style.commonMargin}>
                      <SvgImage
                        Source={BLUE_BALL_ICON}
                        height={hp(3)}
                        width={wp(6.5)}
                      />
                    </View>
                  )}
                  <SvgImage Source={HOME_ICON} height={hp(4)} width={wp(7)} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREEN_NAME.Orders}
          component={Order} // Replaced Screen 2
          options={{
            tabBarLabel: () => <Text style={{color: color.white}}>{SCREEN_NAME.Orders}</Text>,
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
                  <SvgImage Source={ORDER_ICON} height={hp(4)} width={wp(7)} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREEN_NAME.Account}
          component={Account} // Replaced Screen 2
          options={{
            tabBarLabel: () => (
              <Text style={{color: color.white}}>{SCREEN_NAME.Account}</Text>
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
                  <SvgImage
                    Source={ACCOUNT_ICON}
                    height={hp(4)}
                    width={wp(7)}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
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
        />
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
