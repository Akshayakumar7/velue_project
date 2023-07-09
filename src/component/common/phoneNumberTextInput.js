import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {PLUS_91} from './componentUtility';
import {hp, wp} from '../../commonMethod/screenRatio';
import {color} from '../../assets/colors/color';
import {VERIFY_TEXT} from '../../screens/authentication/authenticationScreen/login/loginUtility';
import SvgImage from './svgImage';
import {isStringNotEmpty} from '../../commonMethod/stringMethod';
import styles from '../../general/generalStyleSheet';

const PhoneNumerTextInput = props => {
  const {
    placeholder,
    onChangeText,
    value,
    needVerifyText,
    onPressVerify,
    rightIcon,
    rightIconHeight,
    rightIconWidth,
    keyboardType,
    errorText,
  } = props;
  return (
    <View>
      <View style={style.flexView}>
        <View style={style.codeBox}>
          <Text style={style.codeTextStyle}>{PLUS_91}</Text>
        </View>
        <View style={{width: '2%'}} />
        <View style={style.textInputBorder}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: '80%'}}>
              <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={style.textinputStyle}
                keyboardType={keyboardType}
              />
              {isStringNotEmpty(errorText) && (
                <View>
                  <View style={styles.smallHeight} />
                  <Text style={styles.errorText}>{errorText}</Text>
                </View>
              )}
            </View>
            <View>
              {needVerifyText && (
                <View>
                  <TouchableOpacity onPress={onPressVerify}>
                    <Text style={style.verifyTextStyle}>{VERIFY_TEXT}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View>
              {isStringNotEmpty(rightIcon) && (
                <View style={{marginLeft: '23%', marginTop: hp(0.7)}}>
                  <SvgImage
                    Source={rightIcon}
                    height={rightIconHeight}
                    width={rightIconWidth}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeTextStyle: {
    fontSize: 20,
    padding: hp(0.5),
    textAlign: 'center',
    color: color.grey,
  },
  codeBox: {
    borderWidth: hp(0.1),
    borderColor: color.borderBlueColor,
    borderRadius: hp(1),
    width: '13%',
    height: hp(6.5),
    alignContent: 'center',
    justifyContent: 'center',
  },
  textinputStyle: {
    fontSize: 20,
    color: color.grey,
    marginLeft: wp(2),
    marginBottom:hp(-0.5)
  },
  textInputBorder: {
    backgroundColor: color.white,
    borderRadius: hp(1),
    alignContent: 'center',
    width: '85%',
    height: hp(6.5),
  },
  verifyTextStyle: {
    fontSize: hp(2.3),
    color: color.darkblue,
    textDecorationLine: 'underline',
  },
});

export default PhoneNumerTextInput;
