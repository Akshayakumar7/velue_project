import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {hp, wp} from '../../../../commonMethod/screenRatio';
import {color} from '../../../../assets/colors/color';
import {
  COMPLETE_SOLUTION_TEXT,
  FORGOT_PASSWORD_TEXT,
  HEADING_TEXT,
  INVALID_EMAIL_ADDRESS_ERROR_TEXT,
  LOGIN_TEXT,
  REGISTER_HERE_TEXT,
} from './loginUtility';
import AppButton from '../../../../component/common/appButton';
import {BATH_TUB_IMAGE} from '../../../../imagePath/imagePath';
import {
  CLOSED_EYE_ICON,
  LOCK_ICON,
  LOGO,
  OPENED_EYE_ICON,
  PERSON_ICON,
} from '../../../../assets/imagepath/imagepath';
import CustomTextInput from '../../../../component/common/customTextInput';
import {KEYBOARD_TYPE} from '../../../../general/generalConst';
import styles from '../../../../general/generalStyleSheet';
import ApplyCancelButton from '../../../../component/common/applyCancelButton';
import {SCREEN_NAME} from '../../../../general/screenName';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onChanePhoneNumber = e => {
    setPhoneNumber(e);
  };

  const onChanePassword = e => {
    setPassword(e);
  };

  const onPressEyeIcon = () => {
    setShowPassword(!showPassword);
  };

  const onPressForgotPassword = () => {
    navigation.navigate(SCREEN_NAME.ForgotPassword);
  };

  const onPressRegisterHere = () => {
    navigation.navigate(SCREEN_NAME.Register);
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
                <Text style={style.loginText}>{LOGIN_TEXT}</Text>
                <View style={styles.doubleHeight} />
                <View style={style.itemDivider} />
                <View style={styles.doubleHeight} />
                <Text style={style.errorText}>
                  {INVALID_EMAIL_ADDRESS_ERROR_TEXT}
                </Text>
                <View style={style.itemDivider} />
                <View style={styles.doubleHeight} />
                <View>
                  <CustomTextInput
                    placeholder={'Mobile Number'}
                    leftIcon={PERSON_ICON}
                    leftIconHeight={hp(5)}
                    leftIconWidth={wp(6)}
                    keyboardType={KEYBOARD_TYPE.numeric}
                    onChangeText={e => onChanePhoneNumber(e)}
                    value={phoneNumber}
                  />
                </View>
                <View style={styles.doubleHeight} />
                <View>
                  <CustomTextInput
                    placeholder={'Password'}
                    leftIcon={LOCK_ICON}
                    leftIconHeight={hp(5)}
                    leftIconWidth={wp(6)}
                    secureTextEntry={showPassword}
                    onChangeText={e => onChanePassword(e)}
                    rightIcon={showPassword ? CLOSED_EYE_ICON : OPENED_EYE_ICON}
                    rightIconHeight={hp(5)}
                    rightIconWidth={wp(6)}
                    changeEyeIcon={password}
                    otherRightIcon={CLOSED_EYE_ICON}
                    onPressRightIcon={() => setShowPassword(!showPassword)}
                  />
                </View>
                <View style={styles.thirpleHeight} />
                <TouchableOpacity onPress={() => onPressForgotPassword()}>
                  <Text style={[styles.commonBlueText, styles.alignText]}>
                    {FORGOT_PASSWORD_TEXT}
                  </Text>
                </TouchableOpacity>
                <View style={styles.thirpleHeight} />
                <View style={styles.thirpleHeight} />
                <ApplyCancelButton
                  cancelButtonText={REGISTER_HERE_TEXT}
                  applyButtonText={LOGIN_TEXT}
                  onPressCancelButton={() => onPressRegisterHere()}
                  onPressApplyButton={() =>
                    navigation.navigate(SCREEN_NAME.BottomTab)
                  }
                />
                {/* <View style={styles.doubleContentDivider} /> */}
                {/* <View style={styles.doubleHeight} /> */}
                {/* <View style={styles.thirpleHeight} /> */}
                {/* <View style={styles.thirpleHeight} /> */}
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  parentView: {
    paddingHorizontal: '5%',
  },
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
  completeSolutionText: {
    fontSize: hp(4.5),
    textAlign: 'center',
    color: color.white,
  },
  solutionTextView: {width: '80%', alignSelf: 'center'},
  bottomButtonPlacer: {
    height: hp(25),
  },
  whiteContent: {
    backgroundColor: color.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    opacity: 0.8,
  },
  loginText: {
    fontSize: hp(3.5),
    color: color.darkblue,
    textAlign: 'center',
  },
  itemDivider: {
    height: hp(3),
  },
  verticalDivider: {
    paddingHorizontal: '5%',
  },
  errorText: {
    textAlign: 'center',
    fontSize: hp(2),
    color: color.red,
  },
});
export default Login;
