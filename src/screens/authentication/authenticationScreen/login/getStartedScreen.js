import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {hp, wp} from '../../../../commonMethod/screenRatio';
import {color} from '../../../../assets/colors/color';
import {COMPLETE_SOLUTION_TEXT, HEADING_TEXT} from './loginUtility';
import AppButton from '../../../../component/common/appButton';
import {BATH_TUB_IMAGE} from '../../../../imagePath/imagePath';
import {LOGO} from '../../../../assets/imagepath/imagepath';

const GetStarted = ({navigation}) => {
  const onPressGetStartedScreen = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={BATH_TUB_IMAGE}
          style={style.bathTubImageStyle}>
          <View style={style.mainView}>
            <View style={style.doubleContentDivider} />
            <LOGO style={style.logoStyle} height={hp(22)} width={wp(37)} />
            <View style={style.smallView} />
            <Text style={style.headingText}>{HEADING_TEXT}</Text>
            <View style={style.contentDivider} />
            <View style={style.solutionTextView}>
              <View style={style.contentDivider} />
              <Text style={style.completeSolutionText}>
                {COMPLETE_SOLUTION_TEXT}
              </Text>
            </View>
            <View style={style.bottomButtonPlacer} />
            <View style={style.contentDivider} />

            <View style={style.parentView}>
              <AppButton
                title={'Get Started'}
                onPress={() => onPressGetStartedScreen()}
              />
            </View>
            <View style={style.contentDivider} />
            <View style={style.contentDivider} />
          </View>
        </ImageBackground>
      </ScrollView>
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
  },
  contentDivider: {
    height: hp(5),
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
    fontSize: hp(2.4),
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
export default GetStarted;
