import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  GREAT_TEXT,
  YOUR_ARE_SUCCESSFULLY_REGISTRED_WITH_US_TEXT,
} from './registerUtility';
import {color} from '../../../../assets/colors/color';
import {hp, wp} from '../../../../commonMethod/screenRatio';
import styles from '../../../../general/generalStyleSheet';
import SvgImage from '../../../../component/common/svgImage';
import {RIGHT_MARK_ICON} from '../../../../assets/imagepath/imagepath';

const OnboardingCompleted = () => {
  return (
    <View style={style.mainView}>
      <SvgImage Source={RIGHT_MARK_ICON} height={hp(30)} width={wp(60)} />
      <View style={styles.doubleHeight} />
      <Text style={style.greatTextStyle}>{GREAT_TEXT}</Text>
      <View style={styles.doubleHeight} />
      <View style={style.successTextWidth}>
        <Text style={style.successfullyTextStyle}>
          {YOUR_ARE_SUCCESSFULLY_REGISTRED_WITH_US_TEXT}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.lightGreen,
  },
  greatTextStyle: {
    fontSize: hp(5),
    color: color.darkblue,
    fontWeight: '500',
  },
  successfullyTextStyle: {
    fontSize: hp(3),
    color: color.darkblue,
    textAlign: 'center',
  },
  successTextWidth: {
    width: '90%',
  },
});
export default OnboardingCompleted;
