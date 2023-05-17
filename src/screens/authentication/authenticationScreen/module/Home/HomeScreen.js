import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
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
import ProductCard from '../../../../../component/common/productCard';
import ImageSliderV2 from '../../../../../component/common/ImageSliderV2';

const Home = () => {
  const productData = [
    {
      image:
        'https://media.istockphoto.com/id/1400295846/photo/jets-of-clean-water-flowing-in-the-shower-cabin.jpg?s=1024x1024&w=is&k=20&c=lRcwHVhkSfX4bQS5KlnITpuImjfvfGokNJ_G8LtaG1A=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      image:
        'https://media.istockphoto.com/id/140806786/photo/water-pouring-out-of-modern-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=5MejdFXtgyypJTGe-UeDavjSUWlmml834LSslarCgss=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2020/04/21/14/09/soap-5073231_640.jpg',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2015/10/01/01/21/bathroom-966358_640.jpg',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
    },
    {
      image:
        'https://media.istockphoto.com/id/1400295846/photo/jets-of-clean-water-flowing-in-the-shower-cabin.jpg?s=1024x1024&w=is&k=20&c=lRcwHVhkSfX4bQS5KlnITpuImjfvfGokNJ_G8LtaG1A=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2018/09/17/13/27/hotel-bathroom-3683837_640.jpg',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
    },
    {
      image:
        'https://media.istockphoto.com/id/140806786/photo/water-pouring-out-of-modern-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=5MejdFXtgyypJTGe-UeDavjSUWlmml834LSslarCgss=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
    },
    {
      image:
        'https://media.istockphoto.com/id/140806786/photo/water-pouring-out-of-modern-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=5MejdFXtgyypJTGe-UeDavjSUWlmml834LSslarCgss=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
    },
  ];

  const renderProductList = item => {
    return (
     
        <View style={{alignSelf: 'center', width: '50%'}}>
          <ProductCard data={item} />
          {/* <View style={{height:hp(1)}}/> */}
        </View>
    
    );
  };

  const itemSeperator = () => {
    return (
      <View>
        <View style={styles.verticalDivider} />
        <View style={styles.doubleHeight}/>
      </View>
    );
  };
  return (
    <View style={style.mainView}>
      <ScrollView>
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
        <ImageSliderV2 />
        <View style={styles.doubleHeight} />
        <View style={styles.doubleHeight} />
        {/* <View style={styles.doubleHeight} /> */}
        <View style={{alignItems: 'center', width: '100%',marginLeft:wp(2.5)}}>
          <FlatList
            data={productData}
            renderItem={({item}) => renderProductList(item)}
            numColumns={2}
            ItemSeparatorComponent={itemSeperator()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: color.lightGreen,
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
