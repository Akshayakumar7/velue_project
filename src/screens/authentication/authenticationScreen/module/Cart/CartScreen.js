import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../../../../component/common/appHeader';
import {CART_TEXT} from './cartUtility';
import styles from '../../../../../general/generalStyleSheet';
import CartCard from '../../../../../component/common/cartCard';
import {color} from '../../../../../assets/colors/color';
import {hp} from '../../../../../commonMethod/screenRatio';

const Cart = () => {
  const [cartData, setCartData] = useState([
    {
      image:
        'https://cdn.pixabay.com/photo/2014/08/08/21/38/mixer-tap-413745_640.jpg',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown ,',
      type: 'Boxes',
      originalPrice: 5000,
      actualPrice: 3200,
      count: 1000,
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
      count: 100,
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2018/03/19/15/04/faucet-3240211_640.jpg',
      company: 'Velue',
      productName: 'Bluish - Water gun Stainless Steel, Cooper Crown, ',
      type: 'Boxes',
      originalPrice: 5000,
      actualPrice: 3200,
      count: 100,
    },
  ]);

  const onPressPlusIcon = index => {
    // const newState = cartData.map((item, ind) => {
    //   if (index == ind) {
    //     if (index == ind) {
    //       item.count = item.count + 1;
    //     }
    //   }
    // });
    // console.log(newState)
    // setCartData(newState);
  };

  const renderCartItem = (item, index) => {
    return (
      <View>
        <CartCard
          data={item}
          onPressPlusIcon={() => onPressPlusIcon(item, index)}
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
    <View>
      <View style={{backgroundColor: color.lightGreen}}>
        <Header headerTitle={CART_TEXT} />
        <View style={styles.doubleHeight} />
        <View style={style.mainView}>
          <FlatList
            data={cartData}
            renderItem={({item, index}) => renderCartItem(item, index)}
            ItemSeparatorComponent={() => cartSeperator()}
          />
          <View>
            
           
          </View>
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
