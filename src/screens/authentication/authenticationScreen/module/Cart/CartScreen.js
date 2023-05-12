import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from '../../../../../component/common/appHeader';
import {CART_TEXT} from './cartUtility';
import styles from '../../../../../general/generalStyleSheet';
import CartCard from '../../../../../component/common/cartCard';
import {color} from '../../../../../assets/colors/color';

const Cart = () => {
  const cartData = [
    {
      image:
        'https://cdn.pixabay.com/photo/2016/12/28/21/38/tap-1937219__340.jpg',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown ',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2015/12/30/23/43/basin-1114991__340.jpg',
    },
  ];

  const renderCartItem = item => {
    return (
      <View>
        <CartCard data={item} />
      </View>
    );
  };
  return (
    <View>
      <View style={{backgroundColor: color.lightGreen}}>
        <Header headerTitle={CART_TEXT} />
        <View style={styles.doubleHeight} />
        <View style={style.mainView}>
          <FlatList
            data={cartData}
            renderItem={({item}) => renderCartItem(item)}
            
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    paddingHorizontal: '3%',
  },
  backgroundColor: {
    color: color.red,
  },
});
export default Cart;
