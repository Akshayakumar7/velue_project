import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import styles from '../../../../../general/generalStyleSheet';
import {color} from '../../../../../assets/colors/color';
import SvgImage from '../../../../../component/common/svgImage';
import {
  DOWN_ICON,
  LOGO,
  ROUND_BACK_HANDLER,
  UP_ARROW,
} from '../../../../../assets/imagepath/imagepath';
import {INDIAN_RUPEE_SYMBOL} from '../../../../../component/common/componentUtility';
import AppButton from '../../../../../component/common/appButton';
import { SELECT_ORDER } from './HomeScreenUtility';

const ProductDescription = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const data = [
    {
      id: 1,
      title: 'Description',
      content:
        'The single-handle design allows for easy control of the water flow and temperature, while the durable construction ensures long-lasting performance. Our shower faucet also includes water-saving features, such as a flow restrictor and aerator, that help to conserve water without sacrificing performance.',
    },
    {
      id: 2,
      title: 'Specifications',
      content: 'Fixed Mount Shower Head',
      content: 'Finish: Chrome',
      content: 'Mount: Wall Mount',
      content: 'Rain Spray Patterns',
      content: 'Made of Brass',
    },
    {
      id: 3,
      title: 'Inclusions',
      content: '4 Shower handles with 2M Steel Hose',
    },
    {
      id: 4,
      title: 'Description',
      content:
        'The single-handle design allows for easy control of the water flow and temperature, while the durable construction ensures long-lasting performance. Our shower faucet also includes water-saving features, such as a flow restrictor and aerator, that help to conserve water without sacrificing performance.',
    },
    {
      id: 5,
      title: 'Specifications',
      content: 'Fixed Mount Shower Head',
      content: 'Finish: Chrome',
      content: 'Mount: Wall Mount',
      content: 'Rain Spray Patterns',
      content: 'Made of Brass',
    },
    {
      id: 6,
      title: 'Inclusions',
      content: '4 Shower handles with 2M Steel Hose',
    },
  ];

  const onPressUpArrow = index => {
    if (index == currentIndex) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(index);
    }
  };

  const renderProductDescription = (item, index) => {
    return (
      <View>
        <Pressable style={style.flexView} onPress={() => onPressUpArrow(index)}>
          <Text style={style.titleStyle}>{item?.title ?? ''}</Text>
          <View style={style.arrowPadding}>
            <SvgImage
              Source={index == currentIndex ? DOWN_ICON : UP_ARROW}
              height={hp(3)}
              width={wp(4.5)}
            />
          </View>
        </Pressable>
        <View style={styles.doubleHeight} />
        {index == currentIndex && (
          <Text style={style.contextStyle}>{item?.content ?? ''}</Text>
        )}
        <View style={styles.doubleHeight} />
        <View style={style.verticalLine} />
        <View style={styles.doubleHeight} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={style.background}>
        <ScrollView>
          <ImageBackground
            source={{
              uri: 'https://cdn.pixabay.com/photo/2010/12/13/10/02/bath-2192_640.jpg',
            }}
            style={style.productImage}
            resizeMode={'cover'}>
            <View style={[style.flexView, style.backHanderWidth]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgImage
                  Source={ROUND_BACK_HANDLER}
                  height={hp(8)}
                  width={wp(8)}
                />
              </TouchableOpacity>
              <SvgImage Source={LOGO} height={hp(8)} width={wp(15)} />
            </View>
          </ImageBackground>
          <View style={styles.doubleHeight} />
          <View style={style.endDivider}>
            <View style={style.flexView}>
              <Text style={style.productCompanyStyle}>Velue | LNBD1654</Text>
              <Text style={style.productCodeStyle}>HSN Code: 39225445 </Text>
            </View>
            <View style={styles.thirpleHeight} />
            <Text style={style.productNameStyle}>
              Bluish - Water gun Stainless Steel, Cooper Crown
            </Text>
            <View style={styles.thirpleHeight} />
            <View style={style.flexView}>
              <View style={style.flexView}>
                <Text style={style.maxPriceTextStyle}>
                  {INDIAN_RUPEE_SYMBOL}950
                </Text>
                <View style={styles.verticalDivider} />
                <View style={styles.verticalDivider} />
                <View style={styles.verticalDivider} />
                <Text style={style.actualPriceTextStyle}>
                  {INDIAN_RUPEE_SYMBOL}350
                </Text>
              </View>
              <View>
                <Text style={style.unitStyle}>15 units/box</Text>
              </View>
            </View>
            <View style={styles.thirpleHeight} />
            <View style={style.verticalLine} />
            <View style={styles.doubleHeight} />
            <FlatList
              data={data}
              renderItem={({item, index}) =>
                renderProductDescription(item, index)
              }
              keyExtractor={item => item?.id}
              style={style.flatlistBottomMargin}
            />
          </View>
        </ScrollView>
        <View style={style.touchableStyle}>
          <AppButton
            title={SELECT_ORDER}
            customButtonStyle={style.selectOrderButtonStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  productImage: {
    height: hp(22),
    width: '100%',
  },
  background: {
    backgroundColor: color.lightGreen,
  },
  endDivider: {
    paddingHorizontal: '5%',
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productCompanyStyle: {
    fontSize: 13,
    color: color.darkCyan,
    width: '60%',
  },
  productCodeStyle: {
    fontSize: 13,
    color: color.grey1,
    width: '40%',
  },
  productNameStyle: {
    fontSize: 17,
    color: color.darkblue,
  },
  maxPriceTextStyle: {
    textDecorationLine: 'line-through',
    fontSize: 20,
    color: color.grey1,
  },
  actualPriceTextStyle: {
    fontSize: 24,
    color: color.darkCyan,
  },
  unitStyle: {
    fontSize: 16,
    color: color.grey1,
  },
  verticalLine: {
    borderBottomWidth: hp(0.1),
    borderColor: color.borderColor,
  },
  titleStyle: {
    fontSize: 18,
    color: color.darkblue,
  },
  contextStyle: {
    fontSize: 14,
    color: color.grey1,
    width: '95%',
  },
  backHanderWidth: {width: '93%', alignSelf: 'center'},
  arrowPadding: {padding: hp(1)},
  touchableStyle: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    bottom: 0,
    padding: hp(2),
  },
  whiteBackground: {
    backgroundColor: color.white,
    width: '100%',
    alignSelf: 'center',
    padding: hp(2),
  },
  selectOrderButtonStyle: {
    borderRadius: hp(2),
    height: hp(6),
  },
  flatlistBottomMargin:{marginBottom: hp(10)}
});
export default ProductDescription;
