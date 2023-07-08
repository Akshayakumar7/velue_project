import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import AppButton from '../../../../../component/common/appButton';
import {color} from '../../../../../assets/colors/color';
import Header from '../../../../../component/common/appHeader';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import styles from '../../../../../general/generalStyleSheet';
import CartCard from '../../../../../component/common/cartCard';
import {CLOSE_ICON} from '../../../../../assets/imagepath/imagepath';
import SvgImage from '../../../../../component/common/svgImage';
import {INDIAN_RUPEE_SYMBOL} from '../../../../../component/common/componentUtility';

const OrderIdProduct = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [cartData, setCartData] = useState([
    {
      image:
        'https://cdn.pixabay.com/photo/2014/08/08/21/38/mixer-tap-413745_640.jpg',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown ,',
      type: 'Boxes',
      originalPrice: 5000,
      actualPrice: 3200,
      count: 100,
    },
    {
      image:
        'https://media.istockphoto.com/id/133616071/photo/running-water.jpg?s=612x612&w=is&k=20&c=80du8-uXklMhkkRy8CDz8XFEDYqLJQiq1ZY0WE8hLKE=',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
      type: 'Boxes',
      originalPrice: 5000,
      actualPrice: 3200,
      count: 100,
      originalPrice: 5000,
      actualPrice: 3200,
    },
    {
      image:
        'https://images.pexels.com/photos/6447386/pexels-photo-6447386.jpeg?auto=compress&cs=tinysrgb&w=600',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
      type: 'Boxes',
      count: 100,
    },
    {
      image:
        'https://images.pexels.com/photos/6447386/pexels-photo-6447386.jpeg?auto=compress&cs=tinysrgb&w=600',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
      type: 'Boxes',
      originalPrice: 5000,
      actualPrice: 3200,
      count: 100,
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2018/03/19/15/04/faucet-3240211_640.jpg',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
      type: 'Boxes',
      originalPrice: 5000,
      actualPrice: 3200,
      count: 200,
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2018/03/19/15/04/faucet-3240211_640.jpg',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown, ',
      type: 'Boxes',
      originalPrice: 5000,
      actualPrice: 3200,
      count: 37,
    },
  ]);

  const renderCartItem = (item, index) => {
    return (
      <View style={{paddingHorizontal: '3%'}}>
        <CartCard
          data={item}
          onPressPlusIcon={() => onPressPlusIcon(item, index)}
          onPressEditIcon={() => setShowModal(!showModal)}
        />
      </View>
    );
  };

  const cartSeperator = () => {
    return (
      <View>
        <View style={styles.doubleHeight} />
      </View>
    );
  };
  return (
    <View style={style.mainView}>
      <Header
        headerTitle={'OID1245245'}
        onPressBackButton={() => navigation.goBack()}
      />
      <View style={styles.singleHeight} />
      <View style={styles.singleHeight} />
      <View>
        <FlatList
          data={cartData}
          renderItem={({item, index}) => renderCartItem(item, index)}
          ItemSeparatorComponent={() => cartSeperator()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: hp(20)}}
        />
      </View>
      <View style={style.touchableStyle}>
        <View style={style.whiteBackground}>
          <View style={style.flexView}>
            <View style={style.greyBox}>
              <Text style={style.totalCostStyle}>₹ 25000</Text>
              <Text style={style.itemTextStyle}>300 Items</Text>
            </View>
            <View style={style.dividerWidth} />
            <AppButton
              title={'  PROCEED  '}
              customButtonStyle={style.buttonStyle}
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
      <KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onDismiss={() => setShowModal(!showModal)}>
          <View
            style={{
              height: '37%',
              marginTop: 'auto',
              backgroundColor: color.white,
              borderTopLeftRadius: hp(3),
              borderTopRightRadius: hp(3),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: hp(3),
                marginLeft: hp(1),
                marginRight: hp(1),
                paddingTop: hp(2),
              }}>
              <Text style={{fontSize: 20, color: color.darkblue}}>
                Edit Quantity
              </Text>
              <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <SvgImage Source={CLOSE_ICON} height={hp(5)} width={wp(8.5)} />
              </TouchableOpacity>
            </View>
            <View style={styles.midDivider} />
            <View style={styles.verticalLine} />
            <View style={styles.doubleHeight} />
            <ScrollView>
              <View style={{paddingHorizontal: hp(3)}}>
                <Text style={{fontSize: 16, color: color.grey1}}>
                  Box of 4 pcs
                </Text>
                <View style={styles.doubleHeight} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderWidth: hp(0.1),
                      borderColor: color.borderColor,
                      width: '50%',
                      padding: hp(0.2),
                      height: hp(6),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View style={{width: '60%'}}>
                        <View style={{height: hp(0.3)}} />
                        <TextInput
                          style={style.textinputStyle}
                          placeholder={'15'}
                        />
                      </View>
                      <Text
                        style={{
                          color: color.darkblue,
                          marginBottom: hp(0.2),
                          fontSize: 16,
                          marginRight: wp(1),
                        }}>
                        Boxes
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={style.actualPriceText}>
                      {INDIAN_RUPEE_SYMBOL} 5000
                    </Text>
                    <Text style={style.originalPriceText}>
                      {INDIAN_RUPEE_SYMBOL} 3750
                    </Text>
                  </View>
                </View>
                <View style={styles.doubleHeight} />
                <AppButton
                  title={'SAVE'}
                  customButtonStyle={{borderRadius: hp(1), height: hp(6)}}
                  onPress={() => setShowModal(!showModal)}
                />
              </View>
            </ScrollView>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: color.lightGreen,
  },
  touchableStyle: {
    position: 'absolute',
    width: '100%',
    height: hp(10),
    bottom: 10,
  },
  whiteBackground: {
    backgroundColor: color.white,
    width: '100%',
    alignSelf: 'center',
    padding: hp(2),
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greyBox: {
    backgroundColor: color.boxGrey,
    width: '70%',
    padding: hp(1),
    borderRadius: hp(1),
    height: hp(7.5),
  },
  totalCostStyle: {
    fontSize: 18,
    color: color.darkblue,
    fontWeight: '600',
  },
  itemTextStyle: {
    fontSize: 16,
    color: color.grey1,
  },
  buttonStyle: {borderRadius: hp(1), height: hp(7.5)},
  dividerWidth: {width: '2%'},
  textinputStyle: {
    fontSize: 20,
    color: color.grey,
  },
  actualPriceText: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: color.grey1,
    textAlign: 'right',
  },
  originalPriceText: {
    fontSize: hp(3),
    color: color.darkCyan,
  },
});
export default OrderIdProduct;
