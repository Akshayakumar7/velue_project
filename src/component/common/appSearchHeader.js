import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import SvgImage from './svgImage';
import {
  BACK_ARROW,
  FILTER_ICON,
  GREY_CROSS_ICON,
  SEARCH_ICON,
} from '../../assets/imagepath/imagepath';
import {hp, wp} from '../../commonMethod/screenRatio';
import {color} from '../../assets/colors/color';

const SearchHeader = props => {
  const inputRef = React.useRef();
  const {headerTitle = 'title', onPressBackButton,updateSearchInput, onChangeText, value,icon} = props;
  const onPressSerchIcon = () => {
    if (value == '') {
      inputRef.current.focus();
    }
    if(value !== ''){
      updateSearchInput();
    }
  };
  return (
    <View style={{backgroundColor: color.white}}>
      <View style={style.flexView}>
        <TouchableOpacity onPress={onPressBackButton}>
          <SvgImage Source={BACK_ARROW} height={hp(4.5)} width={wp(5.5)} />
        </TouchableOpacity>
        <View style={style.itemDivider} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '63%'}}>
            <TextInput
              style={style.headerTitleText}
              placeholder={headerTitle}
              ref={inputRef}
              onChangeText={onChangeText}
              value={value}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Pressable
              onPress={() => onPressSerchIcon()}
              style={{marginBottom: hp(-0.7)}}>
              <SvgImage
                Source={icon}
                height={hp(6)}
                width={wp(7)}
              />
            </Pressable>
            <View style={{width: '8%'}} />
            <Pressable style={{marginBottom: hp(-0.7)}}>
              <SvgImage Source={FILTER_ICON} height={hp(6)} width={wp(7)} />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{borderBottomWidth: hp(0.1), borderColor: color.grey}} />
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
    marginTop: hp(0),
  },
});
export default SearchHeader;
