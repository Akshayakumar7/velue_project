import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppButton from './appButton';
import {color} from '../../assets/colors/color';
import {hp} from '../../commonMethod/screenRatio';
import styles from '../../general/generalStyleSheet';

const TabButton = props => {
  const {isActive, onPressDraft, onPressInProgress} = props;
  return (
    <View style={{alignItems: 'center',backgroundColor:'white'}}>
      <View style={styles.singleHeight} />
      <View style={style.flexView}>
        <TouchableOpacity
          style={[
            isActive ? style.borderView : {alignSelf: 'center', width: '49%'},
          ]}
          onPress={onPressDraft}>
          <Text
            style={[
              isActive ? style.activeTextStyle : style.inActiveTextStyle,
            ]}>
            Draft
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: hp(4.5),
            borderLeftWidth: hp(0.1),
            borderColor: color.mandatoryTextColor,
            marginRight: hp(0.2),
            marginLeft: hp(0.2),
            backgroundColor:'red'
          }}
        />
        <TouchableOpacity
          style={[
            !isActive
              ? style.borderView
              : {alignItems: 'center', justifyContent: 'center', width: '49%'},
          ]}
          onPress={onPressInProgress}>
          <Text
            style={[
              !isActive ? style.activeTextStyle : style.inActiveTextStyle,
            ]}>
            In Progress
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.singleHeight} />
    </View>
  );
};

const style = StyleSheet.create({
  borderView: {
    backgroundColor: color.darkblue,
    height: hp(5),
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(1),
  },
  activeTextStyle: {color: color.white, fontSize: 16, textAlign: 'center'},
  inActiveTextStyle: {
    color: color.darkblue,
    fontSize: 16,
    textAlign: 'center',
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '97%',
  },
});

export default TabButton;
