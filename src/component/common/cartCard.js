import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import Fastphoto from './FastImageScreen';
import styles from '../../general/generalStyleSheet';

const CartCard = props => {
  const {data} = props;
  return (
    <View>
      <View style={[style.mainView, style.shadow]}>
        <View style={style.flexView}>
          <View>
            <Fastphoto
              uri={data?.image ?? ''}
              customImageStyle={style.productImageStyle}
            />
          </View>
          <View style={styles.thripleVerticleDivider} />
          <View style={{width:'75%'}}>
            <Text style={style.companyTextStyle}>{data?.company ?? ''}</Text>
            <View style={styles.singleHeight} />
            <Text style={style.productTextStyle}>{data?.productName ?? ''}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    width: '100%',
    height: hp(20),
    backgroundColor: color.white,
    borderRadius: hp(1.5),
    padding: hp(1.5),
  },
  shadow: {
    elevation: 10,
    shadowColor: color.shadowColor,
  },
  flexView: {
    flexDirection: 'row',
  },
  productImageStyle: {
    width: wp(25),
    height: hp(12),
    borderRadius: hp(1.5),
  },
  companyTextStyle: {
    fontSize: hp(2),
    color: color.grey,
  },
  productTextStyle: {
    fontSize: hp(2.3),
    color: color.darkblue,
  },
});
export default CartCard;
