import {StyleSheet} from 'react-native';
import {hp, wp} from '../commonMethod/screenRatio';
import {color} from '../assets/colors/color';

const styles = StyleSheet.create({
  singleHeight: {
    height: hp(1),
  },
  doubleHeight: {
    height: hp(2),
  },
  thirpleHeight: {
    height: hp(3),
  },
  smallHeight: {
    height: hp(0.5),
  },
  contentDivider: {
    height: hp(5),
  },
  doubleContentDivider: {
    height: hp(10),
  },
  commonBlueText: {
    fontSize: 20,
    color: color.darkblue,
  },
  alignText: {
    textAlign: 'center',
  },
  verticalDivider: {
    width: wp(1),
  },
  doubleVerticalDivider: {
    width: wp(2),
  },
  midDivider: {
    height: hp(1.5),
  },
  errorText: {
    color: color.red,
    fontSize: hp(2),
  },
  thripleVerticleDivider: {
    width: wp(4),
  },
  extraVerticalDivider: {
    width: wp(7),
  },
  maxContentDivider: {
    height: hp(20),
  },
  verticalLine: {
    borderBottomWidth: hp(0.1),
    borderColor: color.underLineColor,
  },
});

export default styles;
