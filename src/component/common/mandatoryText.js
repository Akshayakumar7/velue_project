import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../commonMethod/screenRatio';
import {color} from '../../assets/colors/color';

const MandatoryText = props => {
  const {mandatoryText, needMandatoryIcon = true, customTextStyle} = props;
  return (
    <View>
      <View style={style.flexView}>
        <Text style={[style.mandatoryText, customTextStyle]}>
          {mandatoryText}
        </Text>
        <View style={style.divider} />
        {needMandatoryIcon && (
          <View>
            <Text style={style.mandatoryIcon}>*</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mandatoryIcon: {
    color: color.red,
    fontWeight: '600',
  },
  mandatoryText: {
    fontSize: hp(2.4),
    color: color.mandatoryTextColor,
  },
  divider: {width: wp(1)},
});
export default MandatoryText;
