import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import Fastphoto from './FastImageScreen';
import styles from '../../general/generalStyleSheet';
import {INDIAN_RUPEE_SYMBOL} from './componentUtility';

const ProductCard = props => {
  const {data} = props;
  return (
    <View>
      <View>
        <View>
          <Image
            source={{uri: data?.image ?? ''}}
            style={{
              height: hp(15),
              width: wp(45),
              borderTopRightRadius: hp(1),
              borderTopLeftRadius: hp(1),
              margin: hp(0.6),
            }}
            resizeMode={'contain'}
          />
          <View style={styles.smallHeight} />
          <View style={{paddingHorizontal: '3%'}}>
            <Text style={{fontSize: hp(2.2), color: color.grey1}}>
              {data?.velue ?? ''}
            </Text>
            <View style={style.smallHeight} />
            <Text
              style={{
                fontSize: hp(2.5),
                color: color.darkblue,
                fontWeight: '600',
              }}>
              {data?.productName ?? ''}
            </Text>
            <View style={style.smallHeight} />
            <View style={{alignSelf: 'flex-end',marginRight:wp(3)}}>
              <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Text
                  style={{
                    fontSize: hp(2.4),
                    color: color.grey1,
                    textDecorationLine: 'line-through',
                  }}>
                  {INDIAN_RUPEE_SYMBOL}
                  {data?.mrp ?? 0}
                </Text>
                <View style={{width:wp(2)}}/>
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
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    width: '100%',
    // height: hp(30),
    backgroundColor: color.white,
    borderRadius: hp(1),
    padding: hp(1.5),
  },
  productImageStyle: {
    height: hp(25),
    width: '40%',
  },
});
export default ProductCard;
