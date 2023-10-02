import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {color} from '../../../../assets/colors/color';
import {LOGO} from '../../../../assets/imagepath/imagepath';
import {hp, wp} from '../../../../commonMethod/screenRatio';
import {BATH_TUB_IMAGE} from '../../../../imagePath/imagePath';
import {HEADING_TEXT} from './loginUtility';

const LoadingScreen = ({navigation}) => {
  return (
    <View >
      <ImageBackground source={BATH_TUB_IMAGE} >
        <View style={style.mainView}>
          <LOGO style={style.logoStyle} height={hp(22)} width={wp(37)} />
          <View style={style.smallView} />
          <Text style={style.headingText}>{HEADING_TEXT}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  parentView: {
    paddingHorizontal: '5%',
  },
  bathTubImageStyle: {
    height: '100%',
    width: '100%',
    color: color.primaryBlue,
  },
  mainView: {
    backgroundColor: color.primaryBlue,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  contentDivider: {
    height: hp(7),
  },
  doubleContentDivider: {
    height: hp(7),
  },
  logoStyle: {
    alignSelf: 'center',
  },
  smallView: {
    height: hp(0.5),
  },
  headingText: {
    fontSize: 18,
    color: color.white,
    textAlign: 'center',
  },
  completeSolutionText: {
    fontSize: hp(4.5),
    textAlign: 'center',
    color: color.white,
  },
  solutionTextView: {width: '80%', alignSelf: 'center'},
  bottomButtonPlacer: {
    height: hp(25),
  },
  whiteContent: {
    backgroundColor: color.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    minHeight: hp(57),
    opacity: 0.8,
  },
  loginText: {
    fontSize: 26,
    color: color.darkblue,
    textAlign: 'center',
  },
  itemDivider: {
    height: hp(3),
  },
  verticalDivider: {
    paddingHorizontal: '5%',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: color.red,
    fontWeight: '600',
  },
});
export default LoadingScreen;

// import React from 'react';
// import {Text, View} from 'react-native';

// const SplashScreen = () => {
//   return (
//     <View style={style.mainView}>
//       <Text>Hello, world!</Text>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// export default SplashScreen;
