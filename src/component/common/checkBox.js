import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SvgImage from './svgImage';
import {BLUE_RIGHT_MARK, EMPTY_CIRCLE} from '../../assets/imagepath/imagepath';
import { hp, wp } from '../../commonMethod/screenRatio';

const CheckBox = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setClicked(!clicked)}>
        {clicked ? (
          <SvgImage Source={BLUE_RIGHT_MARK} height={hp(4)} width={wp(8)} />
        ) : (
          <SvgImage Source={EMPTY_CIRCLE} height={hp(4)} width={wp(8)} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default CheckBox;
