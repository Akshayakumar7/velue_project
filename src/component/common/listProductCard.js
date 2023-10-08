import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import Fastphoto from './FastImageScreen';
import styles from '../../general/generalStyleSheet';
import {INDIAN_RUPEE_SYMBOL} from './componentUtility';
import AppButton from './appButton';
import {SELECT_ORDER} from './componentConst';
import { CREATE_NEW_ORDER } from '../../screens/authentication/authenticationScreen/module/Home/HomeScreenUtility';

const ListProductCard = props => {
  // console.log("clicked",value)
  const {data, onPressCard, onPressSelectOrder, value} = props;
  return (
    <View key={value}>
      <TouchableOpacity onPress={onPressCard}>
        <View style={style.cardView}>
          <View style={style.flexView}>
            <View style={{width: '32%'}}>
              {data?.imageUrl != undefined && (
                <Image
                  source={{uri: data?.image ?? ''}}
                  style={style.imageProductStyle}
                />
              )}
            </View>
            <View style={{width: '67%'}}>
              <Text style={style.productCodeTextStyle}>
                {data?.velue} | {'Product code'}
              </Text>
              <View style={styles.midDivider} />

              <Text style={style.productTextStyle} numberOfLines={2}>
                {data?.productName ?? ''}
              </Text>
              <View style={styles.midDivider} />
              <View style={style.flexEndView}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {data?.mrp != undefined && (
                    <Text style={style.mrpTextStyle}>
                      {INDIAN_RUPEE_SYMBOL}
                      {data?.mrp ?? ''}
                    </Text>
                  )}
                  <View style={{width: wp(2)}} />
                  {data?.discount != undefined && (
                    <Text style={style.actualPriceText}>
                      {INDIAN_RUPEE_SYMBOL}
                      {data?.discount ?? ''}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.midDivider} />
          <AppButton
            title={CREATE_NEW_ORDER}
            customButtonStyle={style.buttonStyle}
            customButtonTextStyle={style.buttonTextStyle}
            onPress={onPressSelectOrder}
            // key={value}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  cardView: {
    backgroundColor: color.white,
    padding: hp(1.5),
    width: '100%',
    borderRadius: hp(1.5),
  },
  flexView: {
    flexDirection: 'row',
    width: '100%',
  },
  imageView: {
    borderRadius: hp(5),
  },
  productCodeTextStyle: {
    fontSize: 14,
    color: color.codeGrey,
  },
  productTextStyle: {
    fontSize: 18,
    color: color.darkblue,
  },
  mrpTextStyle: {
    fontSize: 16,
    color: color.grey1,
    textDecorationLine: 'line-through',
    marginRight: wp(1),
    marginTop: hp(0.3),
  },
  actualPriceText: {
    fontSize: 20,
    color: color.darkCyan,
  },
  flexEndView: {alignSelf: 'flex-end', marginRight: wp(2)},
  buttonStyle: {height: hp(5.5), borderRadius: hp(1)},
  buttonTextStyle: {fontSize: 14},
  imageProductStyle: {
    height: hp(14),
    width: wp(28),
    borderRadius: hp(1),
    marginRight: wp(2),
  },
});
export default ListProductCard;
