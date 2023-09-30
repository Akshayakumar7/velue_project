import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {hp, wp} from '../../../../commonMethod/screenRatio';
import {color} from '../../../../assets/colors/color';
import {
  COMPLETE_SOLUTION_TEXT,
  FORGOT_PASSWORD_TEXT,
  HEADING_TEXT,
  INVALID_EMAIL_ADDRESS_ERROR_TEXT,
  LOGIN_TEXT,
  MOBILE_NUMBER_TEXT,
  PASSWORD_TEXT,
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
import {
  KEYBOARD_TYPE,
  TOAST_MESSAGE_TYPE,
} from '../../../../general/generalConst';
import styles from '../../../../general/generalStyleSheet';
import ApplyCancelButton from '../../../../component/common/applyCancelButton';
import {SCREEN_NAME} from '../../../../general/screenName';
import AsynStorage from '@react-native-async-storage/async-storage';
import {PracticeContext} from '../../../../useContext/PracticeContext';
import {ShowToastMessage} from '../../../../commonMethod/toastMessage';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [errorText, setErrorText] = useState('');
  const [buttonLoader, setButtonLoader] = useState(false);
  const tempMobileNumber = '8088187007';
  const tempPassword = 'devi@123456';
  const {setUserLOggedIn} = useContext(PracticeContext);

  const onChanePhoneNumber = e => {
    setPhoneNumber(e);
    setErrorText('');
  };

  const onChanePassword = e => {
    setPassword(e);
    setErrorText('');
  };

  const onPressForgotPassword = () => {
    navigation.navigate(SCREEN_NAME.ForgotPassword);
  };

  const onPressRegisterHere = () => {
    navigation.navigate(SCREEN_NAME.Register);
  };

  const onPressLogin = async () => {
    var temp = true;
    setButtonLoader(temp);
    console.log(buttonLoader);
    if (phoneNumber == tempMobileNumber && password == tempPassword) {
      await setUserLOggedIn(true);
      ShowToastMessage(
        TOAST_MESSAGE_TYPE.success,
        'Hello',
        'Successfully logged In',
      );
    } else {
      setErrorText('Please enter valid Mobile number and Password');
    }
    setButtonLoader(false);
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
                <View style={style.itemDivider} />
                <Text style={style.errorText}>{errorText}</Text>

                {buttonLoader && <ActivityIndicator size="large" />}

                <View style={style.itemDivider} />
                <View>
                  <CustomTextInput
                    placeholder={MOBILE_NUMBER_TEXT}
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
                    placeholder={PASSWORD_TEXT}
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
                  onPressApplyButton={() => onPressLogin()}
                />
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
    fontSize: 18,
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
    minHeight: hp(57),
    opacity: 0.8,
  },
  loginText: {
    fontSize: 26,
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
    fontSize: 16,
    color: color.red,
    fontWeight: '600',
  },
});
export default Login;
