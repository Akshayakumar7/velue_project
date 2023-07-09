import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppButton from './appButton';
import {color} from '../../assets/colors/color';
import {hp} from '../../commonMethod/screenRatio';
import styles from '../../general/generalStyleSheet';
import {DRAFT_TEXT, IN_PROGRESS_TEXT} from '../../general/generalConst';

const TabButton = props => {
  const {isActive, onPressDraft, onPressInProgress} = props;
  return (
    <View style={style.mainView}>
      <View style={styles.singleHeight} />
      <View style={style.flexView}>
        <TouchableOpacity
          style={[isActive ? style.borderView : style.alignSelfView]}
          onPress={onPressDraft}>
          <Text
            style={[
              isActive ? style.activeTextStyle : style.inActiveTextStyle,
            ]}>
            {DRAFT_TEXT}
          </Text>
        </TouchableOpacity>
        <View style={style.inProgressView} />
        <TouchableOpacity
          style={[!isActive ? style.borderView : style.inActiveView]}
          onPress={onPressInProgress}>
          <Text
            style={[
              !isActive ? style.activeTextStyle : style.inActiveTextStyle,
            ]}>
            {IN_PROGRESS_TEXT}
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
  mainView: {alignItems: 'center', backgroundColor: color.white},
  inActiveView: {alignItems: 'center', justifyContent: 'center', width: '49%'},
  inProgressView: {
    height: hp(4.5),
    borderLeftWidth: hp(0.1),
    borderColor: color.mandatoryTextColor,
    marginRight: hp(0.2),
    marginLeft: hp(0.2),
    backgroundColor: color.red,
  },
  alignSelfView: {alignSelf: 'center', width: '49%'},
});

export default TabButton;
