import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import Fastphoto from './FastImageScreen';
import styles from '../../general/generalStyleSheet';
import {INDIAN_RUPEE_SYMBOL} from './componentUtility';
import AppButton from './appButton';

const ProductCard = props => {
  const {data, onPressCard} = props;
  return (
    <View key={data?.id}>
      <TouchableOpacity onPress={onPressCard}>
        <View style={{backgroundColor: color.white, width: wp(45)}}>
          {data?.image !== undefined && (
            <Image
              source={{uri: data?.image ?? ''}}
              style={style.productImage}
              resizeMode={'contain'}
            />
          )}
          <Text style={{fontSize: hp(2.2), color: color.grey1}}>
            {data?.velue ?? ''}
          </Text>
          <View style={style.smallHeight} />
          <Text
            style={{
              fontSize: hp(2.3),
              color: color.darkblue,
              fontWeight: '600',
            }}>
            {data?.productName ?? ''}
          </Text>
          <View style={style.smallHeight} />
          <View style={{alignSelf: 'flex-end', marginRight: wp(2)}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: hp(2.4),
                  color: color.grey1,
                  textDecorationLine: 'line-through',
                }}>
                {INDIAN_RUPEE_SYMBOL}
                {data?.mrp ?? 0}
              </Text>
              <View style={{width: wp(2)}} />
              <Text
                style={{
                  fontSize: hp(2.7),
                  color: color.darkCyan,
                }}>
                {INDIAN_RUPEE_SYMBOL}
                {data?.discount ?? 0}
              </Text>
            </View>
          </View>
          <View style={styles.smallHeight} />

          <AppButton
            title={'ADD TO CART'}
            customButtonStyle={style.buttonStyle}
            customButtonTextStyle={style.customButtonTextStyle}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    width: '100%',
    // height: hp(30),
    backgroundColor: color.white,
    borderRadius: hp(1),
    padding: hp(1),
  },
  productImageStyle: {
    height: hp(25),
    width: '40%',
  },
  buttonStyle: {
    borderRadius: hp(0.5),
    width: wp(45),
    height: hp(5.5),
  },
  productImage: {
    height: hp(15),
    width: wp(45),
    borderTopRightRadius: hp(1),
    borderTopLeftRadius: hp(1),
  },
  customButtonTextStyle: {
    fontSize: hp(2.2),
  },
});
export default ProductCard;
