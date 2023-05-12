import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import SvgImage from '../../../../../component/common/svgImage';
import {
  ACCOUNT_ICON,
  BELL_ICON,
  LOCK_ICON,
  SEARCH_ICON,
} from '../../../../../assets/imagepath/imagepath';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import {color} from '../../../../../assets/colors/color';
import styles from '../../../../../general/generalStyleSheet';
import CustomTextInput from '../../../../../component/common/customTextInput';
import {SEARCH_PRODUCTS_TEXT} from './HomeScreenUtility';
import ImageSlider from '../../../../../component/common/ImageSliderScreen';

const Home = () => {
  return (
    <View>
      <View>
        <View style={styles.doubleHeight} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={style.searchbarView}>
            <CustomTextInput
              placeholder={SEARCH_PRODUCTS_TEXT}
              rightIcon={SEARCH_ICON}
              rightIconHeight={hp(5)}
              rightIconWidth={wp(6)}
              needIconDivider={false}
              customStyle={style.searchStyle}
              customTextInputBorder={style.customTextInputBorder}
            />
          </View>
          <SvgImage Source={BELL_ICON} height={hp(5)} width={wp(6)} />
        </View>
        <View style={styles.doubleHeight} />

        <ImageSlider />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: color.grey,
  },
  searchbarView: {
    paddingHorizontal: '4%',
  },
  customTextInputBorder: {
    borderRadius: 0,
  },
  searchStyle: {
    width: '80%',
    marginLeft: wp(3),
  },
});
export default Home;
