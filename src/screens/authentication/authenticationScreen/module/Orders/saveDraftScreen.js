import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  DRAFR_ICON,
  RIGHT_MARK_ICON,
} from '../../../../../assets/imagepath/imagepath';
import styles from '../../../../../general/generalStyleSheet';
import SvgImage from '../../../../../component/common/svgImage';
import {color} from '../../../../../assets/colors/color';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import {SCREEN_NAME} from '../../../../../general/screenName';
import {ShowToastMessage} from '../../../../../commonMethod/toastMessage';
import {TOAST_MESSAGE_TYPE} from '../../../../../general/generalConst';
import Toast from 'react-native-toast-message';

const SaveDraft = ({navigation}) => {
  useEffect(() => {
    ShowToastMessage(
      TOAST_MESSAGE_TYPE.success,
      '',
      'Saved to Draft Successfully',
    );
    setTimeout(() => {
      navigation.navigate(SCREEN_NAME.TabHome);
    }, 3000);
  }, []);
  return (
    <View style={style.mainView}>
      <SvgImage Source={DRAFR_ICON} height={hp(30)} width={wp(60)} />
      <View style={styles.doubleHeight} />
      <Text style={style.greatTextStyle}>{'Order Drafted'}</Text>
      <View style={styles.singleHeight} />
      <View style={style.successTextWidth}>
        <Text style={style.successfullyTextStyle}>
          {'You can see your listings in orders tab'}
        </Text>
      </View>
      <Toast />
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.lightGreen,
  },
  greatTextStyle: {
    fontSize: 30,
    color: color.darkblue,
    fontWeight: '500',
  },
  successfullyTextStyle: {
    fontSize: 18,
    color: color.darkblue,
    textAlign: 'center',
  },
  successTextWidth: {
    width: '90%',
  },
});
export default SaveDraft;
