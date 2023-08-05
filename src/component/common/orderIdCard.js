import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import styles from '../../general/generalStyleSheet';
import AppButton from './appButton';
import {INDIAN_RUPEE_SYMBOL} from './componentUtility';

const OrderIdCard = props => {
  const {data, customBorderStyle,key} = props;
  return (
    <View>
      <View style={style.whiteBorder}>
        <View style={style.flexView}>
          <View>
            <Text style={style.orderIdTextStyle}>{data?.orderId ?? ''}</Text>
            <View style={styles.smallHeight} />
            <Text style={style.dateTextStyle}>{data?.date ?? ''}</Text>
          </View>
          <View>
            <View style={[style.blueBorder, customBorderStyle]}>
              <Text style={style.borderContentTextStyle}>{data?.status ?? ''}</Text>
            </View>
          </View>
        </View>
        <Text style={style.costTextStyle}>
          {INDIAN_RUPEE_SYMBOL} {data?.cost ?? ''}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  whiteBorder: {
    width: '100%',
    backgroundColor: color.white,
    borderRadius: hp(1),
    padding: hp(2.5),
    paddingLeft: wp(5),
    paddingRight: wp(5),
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderIdTextStyle: {
    color: color.darkblue,
    fontSize: 18,
  },
  dateTextStyle: {
    color: color.grey1,
    fontSize: 14,
  },
  blueBorder: {
    backgroundColor: color.darkblue,
    borderRadius: hp(1),
  },
  borderContentTextStyle: {
    padding: hp(1),
    color: color.white,
    fontSize: 16,
    padding:hp(1),
    paddingLeft:wp(2),
    paddingRight:wp(2)
  },
  costTextStyle: {
    fontSize: 24,
    color: color.darkCyan,
    textAlign: 'right',
  },
});
export default OrderIdCard;
