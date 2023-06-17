import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SvgImage from './svgImage';
import {BLUE_RIGHT_MARK, EMPTY_CIRCLE} from '../../assets/imagepath/imagepath';
import {hp, wp} from '../../commonMethod/screenRatio';

const CheckBox = props => {
  const {isTrue, onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        {isTrue ? (
          <SvgImage Source={EMPTY_CIRCLE} height={hp(3.5)} width={wp(7.5)} />
        ) : (
          <SvgImage Source={BLUE_RIGHT_MARK} height={hp(3.5)} width={wp(7.5)} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default CheckBox;
