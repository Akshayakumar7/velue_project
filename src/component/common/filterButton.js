import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../commonMethod/screenRatio';
import {color} from '../../assets/colors/color';
import styles from '../../general/generalStyleSheet';
import SvgImage from './svgImage';
import {DOWN_ICON} from '../../assets/imagepath/imagepath';

const FilterButton = props => {
  const {data, onPress} = props;
  console.log(data);
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={style.buttonBorder}>
          <View style={style.flexView}>
            <View style={styles.verticalDivider} />
            <View style={styles.verticalDivider} />
            <Text style={style.filterText}>{data?.type ?? ''}</Text>
            <View style={styles.verticalDivider} />
            <View style={styles.verticalDivider} />
            <View style={style.alignMargin}>
              <SvgImage Source={DOWN_ICON} height={hp(4)} width={wp(4)} />
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.verticalDivider} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  buttonBorder: {
    borderRadius: hp(3),
    borderWidth: hp(0.1),
    borderColor: color.borderColor,
    height: hp(4.5),
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:hp(-0.3)
  },
  filterText: {
    color: color.darkblue,
    fontSize: hp(2.5),
  },
  alignMargin: {
    marginTop: hp(0.5),
  },
});

export default FilterButton;
