import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import {isStringNotEmpty} from '../../commonMethod/stringMethod';
import SvgImage from './svgImage';
import {OPENED_EYE_ICON} from '../../assets/imagepath/imagepath';
import {VERIFY_TEXT} from './componentUtility';
import styles from '../../general/generalStyleSheet';

const CustomTextInput = props => {
  const {
    placeholder,
    leftIcon,
    leftIconHeight,
    leftIconWidth,
    secureTextEntry,
    keyboardType,
    onChangeText,
    rightIcon,
    rightIconHeight,
    rightIconWidth,
    onPressRightIcon,
    customStyle,
    onPressTextInput,
    value,
    needLeftSpace = false,
    customTextInputBorder,
    needVerifyText = false,
    onPressVerify,
    errorText,
    editable
  } = props;

  return (
    <View>
      <View style={[style.textInputBorder, customTextInputBorder]}>
        <View style={style.commonFlex}>
          {isStringNotEmpty(leftIcon) && (
            <View>
              <View style={style.itemDivider} />
            </View>
          )}
          <View>
            {isStringNotEmpty(leftIcon) && (
              <View>
                <Pressable>
                  <SvgImage
                    Source={leftIcon}
                    height={leftIconHeight}
                    width={leftIconWidth}
                  />
                </Pressable>
              </View>
            )}
          </View>
          {isStringNotEmpty(leftIcon) && (
            <View>
              <View style={style.itemDivider} />
            </View>
          )}
          {needLeftSpace && (
            <View>
              <View style={style.itemDivider} />
            </View>
          )}
          <View style={[style.textInputWidth, customStyle]}>
            <View style={style.textInputWithVerifyText}>
              <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                style={style.textinputStyle}
                value={value}
                editable={editable}
              />
              <View>
                {needVerifyText && (
                  <View>
                    <TouchableOpacity onPress={onPressVerify}>
                      <Text style={style.verifyTextStyle}>{VERIFY_TEXT}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>

          <View>
            {isStringNotEmpty(rightIcon) && (
              <View>
                <Pressable onPress={onPressRightIcon}>
                  <SvgImage
                    Source={rightIcon}
                    height={rightIconHeight}
                    width={rightIconWidth}
                  />
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </View>
      {isStringNotEmpty(errorText) && (
        <View>
          <View style={styles.smallHeight} />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  textInputBorder: {
    backgroundColor: color.white,
    borderRadius: hp(1),
    alignContent: 'center',
  },
  itemDivider: {
    width: wp(3),
  },
  textInputWidth: {
    width: '75%',
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textinputStyle: {
    fontSize: 20,
    color: color.grey,
  },
  textInputView: {width: '80%'},
  commonFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyTextStyle: {
    fontSize: hp(2.3),
    color: color.darkblue,
    textDecorationLine: 'underline',
  },
  textInputWithVerifyText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
  },
});
export default CustomTextInput;
