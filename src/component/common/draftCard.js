import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import styles from '../../general/generalStyleSheet';
import AppButton from './appButton';
import {INDIAN_RUPEE_SYMBOL} from './componentUtility';

const DraftCard = props => {
  const {data, onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={style.whiteBorder}>
          <View style={style.commanPadding}>
            <Text style={style.orderIdTextStyle}>{data.orderId}</Text>
            <View style={styles.smallHeight} />
            <Text style={style.dateTextStyle}>{data.date}</Text>
            <View style={styles.singleHeight}/>
            <Text style={style.costTextStyle}>
              {INDIAN_RUPEE_SYMBOL} {data.cost}
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.verticalLine} />
          <View style={[style.subFlex]}>
            <Pressable style={{width: '50%'}}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: hp(1.6),
                  color: color.greyTextColor,
                  fontSize: 16,
                  marginRight:'20%'
                }}>
                Discard
              </Text>
            </Pressable>
            <View
              style={{
                borderLeftWidth: hp(0.05),
                color: color.underLineColor,
                height: hp(7),
              }}
            />
            <Pressable style={{width: '50%',alignItems:'flex-end'}}>
              <Text
                style={{
                  // textAlign: 'center',
                  padding: hp(1.6),
                  color: color.greyTextColor,
                  fontSize: 16,
                }}>
                Place Order
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  whiteBorder: {
    width: '100%',
    backgroundColor: color.white,
    borderRadius: hp(1),
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
    fontSize: 14,
  },
  costTextStyle: {
    fontSize: hp(3),
    color: color.darkCyan,
    textAlign: 'right',
  },
  commanPadding: {
    padding: hp(2.5),
    paddingLeft: wp(5),
    paddingRight: wp(5),
  },
  subFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
});
export default DraftCard;
