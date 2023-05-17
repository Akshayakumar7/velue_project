import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import Fastphoto from './FastImageScreen';

const ProductCard = props => {
  const {data} = props;
  return (
    <View>
      <View>
        <View
          style={{
            borderTopLeftRadius: hp(10),
            borderTopRightRadius: hp(10),
            margin: hp(2),
          }}>
          <Fastphoto
            uri={data?.image ?? ''}
            customImageStyle={{
              height: hp(20),
              width: wp(40),
              borderTopLeftRadius: hp(3),
              borderTopRightRadius: hp(3),
            }}
          />
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
