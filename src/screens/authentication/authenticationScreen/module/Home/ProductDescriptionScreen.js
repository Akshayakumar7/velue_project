import React from 'react';
import {Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import { hp } from '../../../../../commonMethod/screenRatio';

const ProductDescription = () => {
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://cdn.pixabay.com/photo/2020/01/30/16/24/bathroom-4805846_640.jpg',
          }}
          style={{height: hp(20), width: '100%'}}
          resizeMode={'cover'}
        />
      </ScrollView>
    </View>
  );
};
export default ProductDescription;
