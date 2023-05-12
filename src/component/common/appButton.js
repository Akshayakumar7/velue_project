import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp} from '../../commonMethod/screenRatio';
import {isStringNotEmpty} from '../../commonMethod/stringMethod';
import SvgImage from './svgImage';
import styles from '../../general/generalStyleSheet';

const AppButton = props => {
  const {
    title,
    onPress,
    customButtonStyle,
    customButtonTextStyle,
    rightIcon,
    rightIconHeight,
    rightIconWidth,
  } = props;
  return (
    <View>
      <View style={style.alignCenter}>
        <TouchableOpacity
          onPress={onPress}
          style={[style.buttonView, customButtonStyle]}>
          <View
            style={style.alignIcon}>
            <Text style={[style.buttonText, customButtonTextStyle]}>
              {title}
            </Text>
            {isStringNotEmpty(rightIcon) && (
              <View>
                <View style={styles.doubleVerticalDivider} />
                <View style={styles.verticalDivider} />
              </View>
            )}
            {isStringNotEmpty(rightIcon) && (
              <View>
                <SvgImage
                  Source={rightIcon}
                  height={rightIconHeight}
                  width={rightIconWidth}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  buttonView: {
    backgroundColor: color.darkblue,
    width: '100%',
    height: hp(7),
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: hp(5),
  },
  buttonText: {fontSize: hp(2.5), color: color.white, textAlign: 'center'},
  alignCenter: {alignItems: 'center'},
  alignIcon:{
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  }
});
export default AppButton;
