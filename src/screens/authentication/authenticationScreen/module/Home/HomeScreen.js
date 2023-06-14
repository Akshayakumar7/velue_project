import React, {useContext, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  LogBox,
  TouchableOpacity,
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
import ProductCard from '../../../../../component/common/productCard';
import ImageSliderV2 from '../../../../../component/common/ImageSliderV2';
import FilterButton from '../../../../../component/common/filterButton';
import {SCREEN_NAME} from '../../../../../general/screenName';
import ListProductCard from '../../../../../component/common/listProductCard';
import Toast from 'react-native-toast-message';
import {ShowToastMessage} from '../../../../../commonMethod/toastMessage';
import {TOAST_MESSAGE_TYPE} from '../../../../../general/generalConst';
import { PracticeContext } from '../../../../../useContext/PracticeContext';

const Home = ({navigation}) => {
  const productData = [
    {
      id: 1,
      image:
        'https://media.istockphoto.com/id/1400295846/photo/jets-of-clean-water-flowing-in-the-shower-cabin.jpg?s=1024x1024&w=is&k=20&c=lRcwHVhkSfX4bQS5KlnITpuImjfvfGokNJ_G8LtaG1A=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/id/140806786/photo/water-pouring-out-of-modern-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=5MejdFXtgyypJTGe-UeDavjSUWlmml834LSslarCgss=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2020/04/21/14/09/soap-5073231_640.jpg',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      id: 4,
      image:
        'https://cdn.pixabay.com/photo/2015/10/01/01/21/bathroom-966358_640.jpg',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      id: 5,
      image:
        'https://media.istockphoto.com/id/1400295846/photo/jets-of-clean-water-flowing-in-the-shower-cabin.jpg?s=1024x1024&w=is&k=20&c=lRcwHVhkSfX4bQS5KlnITpuImjfvfGokNJ_G8LtaG1A=',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      id: 6,
      image:
        'https://cdn.pixabay.com/photo/2018/09/17/13/27/hotel-bathroom-3683837_640.jpg',
      productName: 'Bluish - Water gun Stainless Steellll',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      id: 7,
      image:
        'https://media.istockphoto.com/id/140806786/photo/water-pouring-out-of-modern-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=5MejdFXtgyypJTGe-UeDavjSUWlmml834LSslarCgss=',
      productName: 'Bluish - Water gun Stainless Steellll ',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
    {
      id: 8,
      image:
        'https://media.istockphoto.com/id/140806786/photo/water-pouring-out-of-modern-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=5MejdFXtgyypJTGe-UeDavjSUWlmml834LSslarCgss=',
      productName:
        'Bluish - Water gun Stainless Steellll Bluish - Water gun Stainless Steellll ',
      company: 'Bluish - Water gun Stainless Steellll',
      mrp: '900',
      discount: '350',
      velue: 'Velue',
    },
  ];

  const filterOption = [{type: 'Sort by'}, {type: 'Filters'}, {type: 'Brand'}];

  const onPressCard = () => {
    navigation.navigate(SCREEN_NAME.ProductDescription);
  };


  const renderProductList = item => {
    return (
      <View style={style.productWidth}>
        <ListProductCard data={item} onPressCard={() => onPressCard()} />
      </View>
    );
  };

  const itemSeperator = () => {
    return (
      <View>
        <View style={styles.verticalDivider} />
        <View style={styles.doubleHeight} />
      </View>
    );
  };

  const showToast = () => {
    ShowToastMessage(
      TOAST_MESSAGE_TYPE.success,
      'Hello',
      'This is some something 👋',
    );
  };

  const renderFilterButtonList = item => {
    return (
      <View style={{marginLeft: wp(2)}}>
        <FilterButton data={item} />
      </View>
    );
  };
  return (
    <View style={style.mainView}>
      <View style={styles.doubleHeight} />
      <View style={style.searchbarFlex}>
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
        <View style={{marginRight: wp(2)}} />
        <TouchableOpacity onPress={() => showToast()}>
          <SvgImage Source={BELL_ICON} height={hp(5)} width={wp(6)} />
        </TouchableOpacity>
      </View>
      <View style={styles.doubleHeight} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf:'center'}}>
        <ImageSliderV2 />
        </View>
        <View style={styles.doubleHeight} />
        <View>
          <FlatList
            data={filterOption}
            renderItem={({item}) => renderFilterButtonList(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.doubleHeight} />
        <View style={style.productView}>
          <FlatList
            data={productData}
            renderItem={({item}) => renderProductList(item)}
            ItemSeparatorComponent={itemSeperator()}
            showsVerticalScrollIndicator={false}
            style={{marginBottom: hp(10)}}

          />
        </View>
      </ScrollView>
      <Toast />
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: color.lightGreen,
  },
  searchbarView: {
    paddingHorizontal: '2%',
  },
  customTextInputBorder: {
    borderRadius: 0,
  },
  searchStyle: {
    width: '80%',
    marginLeft: wp(3),
  },
  searchbarFlex: {flexDirection: 'row', alignItems: 'center'},
  productView: {
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  productWidth: {
    alignSelf: 'center',
  },
});
export default Home;

// import React from 'react';
// import {View, Text, Button} from 'react-native';
// import AsynStorage from '@react-native-async-storage/async-storage';
// const Home = () => {
//   const setData = async () => {
//     await AsynStorage.setItem('Name', 'Akshay');
//   };

//   const getItem = async () => {
//     const res = await AsynStorage.getItem('Name');
//     console.log(res);
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <Text>Heelo Home</Text>
//       <Button title="Set Data" onPress={() => setData()} />
//       <Button title="Get Data" onPress={() => getItem()} />
//     </View>
//   );
// };

// export default Home;
