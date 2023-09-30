import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SvgImage from './svgImage';
import {BACK_ARROW} from '../../assets/imagepath/imagepath';
import {hp, wp} from '../../commonMethod/screenRatio';
import {color} from '../../assets/colors/color';

const Header = props => {
  const {headerTitle = 'title', onPressBackButton} = props;
  return (
    <View style={style.headerMainView}>
      <View style={style.flexView}>
        <TouchableOpacity onPress={onPressBackButton}>
          <SvgImage Source={BACK_ARROW} height={hp(4)} width={wp(5)} />
        </TouchableOpacity>
        <View style={style.itemDivider} />
        <Text style={style.headerTitleText}>{headerTitle}</Text>
      </View>
      <View style={style.dividerLine} />
    </View>
  );
};

const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(1),
    paddingLeft: '5%',
  },
  itemDivider: {
    width: wp(5),
  },
  headerTitleText: {
    fontSize: 22,
    fontWeight: '600',
    color: color.darkblue,
    marginBottom: hp(0.5),
  },
  dividerLineL:{borderBottomWidth: hp(0.1), borderColor: color.grey},
  headerMainView:{backgroundColor: color.white}
});
export default Header;
