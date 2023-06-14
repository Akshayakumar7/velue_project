import React,{useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {color} from '../../assets/colors/color';
const ImageSliderV2 = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2012/06/08/17/18/shower-head-49648_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/23/00/56/bathroom-1851566_640.jpg',
    'https://cdn.pixabay.com/photo/2018/12/05/10/02/faucet-3857471_640.jpg',
    'https://cdn.pixabay.com/photo/2016/12/28/21/38/tap-1937219_640.jpg',
    'https://cdn.pixabay.com/photo/2014/05/01/20/38/granite-335746_640.jpg',
  ];
  let screenWidth = Dimensions.get('window').width;

  useEffect(() => {}, [screenWidth]);
  return (
    <View style={{alignSelf: 'center', width: '100%'}}>
      <SliderBox
        images={images}
        autoPlay={false}
        dotColor={color.darkblue}
        inactiveDotColor={color.grey}
        circleLoop={true}
        autoplayInterval={1000}
        // parentWidth={300}
      />
    </View>
  );
};
export default ImageSliderV2;
