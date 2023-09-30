import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {hp, wp} from '../../../../commonMethod/screenRatio';
import {color} from '../../../../assets/colors/color';
import {
  COMPLETE_SOLUTION_TEXT,
  ENTER_YOUR_REGISTERED_MOBILE_NUMBER_TEXT,
  FORGOT_PASSWORD_TEXT,
  HEADING_TEXT,
  INVALID_EMAIL_ADDRESS_ERROR_TEXT,
  LOGIN_TEXT,
  REGISTER_HERE_TEXT,
  SENT_OTP_TEXT,
} from './loginUtility';
import AppButton from '../../../../component/common/appButton';
import {BATH_TUB_IMAGE} from '../../../../imagePath/imagePath';
import {LOGO, PERSON_ICON} from '../../../../assets/imagepath/imagepath';
import styles from '../../../../general/generalStyleSheet';
import CustomTextInput from '../../../../component/common/customTextInput';
import {KEYBOARD_TYPE} from '../../../../general/generalConst';

const ForgotPassword = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChanePhoneNumber = e => {
    setPhoneNumber(e);
  };

  const onPressSendOtp = () => {
    navigation.navigate('OtpVerification');
  };

  return (
    <View>
      <ImageBackground source={BATH_TUB_IMAGE} style={style.bathTubImageStyle}>
        <View style={style.mainView}>
          <View style={style.doubleContentDivider} />
          <LOGO style={style.logoStyle} height={hp(22)} width={wp(37)} />
          <View style={style.smallView} />
          <Text style={style.headingText}>{HEADING_TEXT}</Text>
          <View style={style.contentDivider} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.whiteContent}>
              <View style={style.verticalDivider}>
                <View style={style.itemDivider} />
                <View style={styles.thirpleHeight} />
                <Text style={[style.forgotpasswordText, styles.alignText]}>
                  {FORGOT_PASSWORD_TEXT}
                </Text>
                <View style={style.itemDivider} />
                <Text style={[style.mobileNumberText, styles.alignText]}>
                  {ENTER_YOUR_REGISTERED_MOBILE_NUMBER_TEXT}
                </Text>
                <View style={styles.doubleContentDivider} />
                <View style={styles.thirpleHeight} />
                <CustomTextInput
                  placeholder={'Mobile Number'}
                  leftIcon={PERSON_ICON}
                  leftIconHeight={hp(5)}
                  leftIconWidth={wp(6)}
                  keyboardType={KEYBOARD_TYPE.numeric}
                  onChangeText={e => onChanePhoneNumber(e)}
                />
                <View style={styles.doubleContentDivider} />
                <View style={styles.doubleHeight} />

                <AppButton
                  title={SENT_OTP_TEXT}
                  onPress={() => onPressSendOtp()}
                />
                <View style={styles.doubleHeight} />
                {/* <View style={styles.doubleContentDivider} /> */}
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  bathTubImageStyle: {
    height: '100%',
    width: '100%',
    color: color.primaryBlue,
  },
  mainView: {
    backgroundColor: color.primaryBlue,
    flex: 1,
  },
  contentDivider: {
    height: hp(7),
  },
  doubleContentDivider: {
    height: hp(7),
  },
  logoStyle: {
    alignSelf: 'center',
  },
  smallView: {
    height: hp(0.5),
  },
  headingText: {
    fontSize: hp(2.4),
    color: color.white,
    textAlign: 'center',
  },

  whiteContent: {
    backgroundColor: color.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    opacity: 0.8,
  },
  itemDivider: {
    height: hp(3),
  },
  verticalDivider: {
    paddingHorizontal: '5%',
  },
  forgotpasswordText: {
    fontSize: hp(3.3),
    color: color.darkblue,
  },
  mobileNumberText: {
    fontSize: hp(2.5),
    color: color.darkblue,
  },
});
export default ForgotPassword;
