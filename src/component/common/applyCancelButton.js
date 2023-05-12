import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../../general/generalStyleSheet';
import {color} from '../../assets/colors/color';
import {hp} from '../../commonMethod/screenRatio';
import AppButton from './appButton';

const ApplyCancelButton = props => {
  const {
    applyButtonText,
    cancelButtonText,
    onPressApplyButton,
    onPressCancelButton,
    customApplyButtonStyle,
    cancelButtonStyle,
    cancelTextStyel
  } = props;
  return (
    <View style={style.alignItems}>
      <View style={style.flexView}>
        <View style={cancelButtonStyle}>
          <TouchableOpacity onPress={onPressCancelButton}>
            <Text style={[styles.commonBlueText,cancelTextStyel]}>{cancelButtonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '47%'}}>
          <AppButton
            title={applyButtonText}
            onPress={onPressApplyButton}
            customButtonStyle={customApplyButtonStyle}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  applyButtonTextStyle: {
    fontSize: hp(2.6),
    color: 'white',
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: color.darkblue,
    width: '40%',
    height: hp(5.5),
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: hp(5),
  },
  buttonText: {fontSize: hp(2.6), color: color.white, textAlign: 'center'},
  alignItems: {
    alignContent: 'center',
    paddingHorizontal: '3%',
  },
});

export default ApplyCancelButton;
