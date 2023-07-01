// import React, {useState} from 'react';
// import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import CartCard from '../../../../../component/common/cartCard';
// import Header from '../../../../../component/common/appHeader';
// import styles from '../../../../../general/generalStyleSheet';
// import {color} from '../../../../../assets/colors/color';
// import {CART_TEXT} from '../Cart/cartUtility';
// import AppButton from '../../../../../component/common/appButton';
// import {hp, wp} from '../../../../../commonMethod/screenRatio';
// import {SCREEN_NAME} from '../../../../../general/screenName';

// const OrderIdProduct = ({navigation}) => {
//   const [cartData, setCartData] = useState([
//     {
//       image:
//         'https://cdn.pixabay.com/photo/2014/08/08/21/38/mixer-tap-413745_640.jpg',
//       company: 'Velue',
//       productName: 'Bluish - Water gun Stainless Steel, Cooper Crown ,',
//       type: 'Boxes',
//       originalPrice: 5000,
//       actualPrice: 3200,
//       count: 1000,
//     },
//     {
//       image:
//         'https://media.istockphoto.com/id/133616071/photo/running-water.jpg?s=612x612&w=is&k=20&c=80du8-uXklMhkkRy8CDz8XFEDYqLJQiq1ZY0WE8hLKE=',
//       company: 'Velue',
//       productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
//       type: 'Boxes',
//       originalPrice: 5000,
//       actualPrice: 3200,
//       count: 100,
//       originalPrice: 5000,
//       actualPrice: 3200,
//     },
//     {
//       image:
//         'https://images.pexels.com/photos/6447386/pexels-photo-6447386.jpeg?auto=compress&cs=tinysrgb&w=600',
//       company: 'Velue',
//       productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
//       type: 'Boxes',
//       count: 100,
//     },
//     {
//       image:
//         'https://images.pexels.com/photos/6447386/pexels-photo-6447386.jpeg?auto=compress&cs=tinysrgb&w=600',
//       company: 'Velue',
//       productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
//       type: 'Boxes',
//       originalPrice: 5000,
//       actualPrice: 3200,
//       count: 100,
//     },
//     {
//       image:
//         'https://cdn.pixabay.com/photo/2018/03/19/15/04/faucet-3240211_640.jpg',
//       company: 'Velue',
//       productName: 'Bluish - Water gun Stainless Steel, Cooper Crown',
//       type: 'Boxes',
//       originalPrice: 5000,
//       actualPrice: 3200,
//       count: 100,
//     },
//     {
//       image:
//         'https://cdn.pixabay.com/photo/2018/03/19/15/04/faucet-3240211_640.jpg',
//       company: 'Velue',
//       productName: 'Bluish - Water gun Stainless Steel, Cooper Crown, ',
//       type: 'Boxes',
//       originalPrice: 5000,
//       actualPrice: 3200,
//       count: 10,
//     },
//   ]);

//   const onPressPlusIcon = index => {
//     // const newState = cartData.map((item, ind) => {
//     //   if (index == ind) {
//     //     if (index == ind) {
//     //       item.count = item.count + 1;
//     //     }
//     //   }
//     // });
//     // console.log(newState)
//     // setCartData(newState);
//   };

//   const renderCartItem = (item, index) => {
//     return (
//       <View style={{paddingHorizontal: '3%'}}>
//         <CartCard
//           data={item}
//           onPressPlusIcon={() => onPressPlusIcon(item, index)}
//         />
//       </View>
//     );
//   };

//   const cartSeperator = () => {
//     return (
//       <View>
//         <View style={styles.doubleHeight} />
//       </View>
//     );
//   };
//   return (
//     <View>
//       {/* <View style={{backgroundColor: color.lightGreen}}>
//         <Header
//           headerTitle={'OID1245245'}
//           onPressBackButton={() => navigation.goBack()}
//         />
//         <View style={styles.singleHeight} />
//         <View style={styles.smallHeight} />
//         <View style={style.mainView}>
//           <FlatList
//             data={cartData}
//             renderItem={({item, index}) => renderCartItem(item, index)}
//             ItemSeparatorComponent={() => cartSeperator()}
//             showsHorizontalScrollIndicator={false}
//             showsVerticalScrollIndicator={false}
//           />
//           <View style={style.bottomButton}>
//             <View style={{backgroundColor: color.white}}>
//               <Text>Hello</Text>
//             </View>
//           </View>
//         </View>
//       </View> */}
//       <View style={style.bottomButton}>
//         <View style={{backgroundColor: color.white, width: '100%'}}>
//           <Text>Hello</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   mainView: {
//     height: '100%',
//   },
//   backgroundColor: {
//     color: color.red,
//   },
//   submitButton: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     backgroundColor: 'red',
//   },
//   bottomButton: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//     alignContent: 'center',
//     justifyContent: 'center',
//     bottom: 10,
//     top: 0,
//   },
// });
// export default OrderIdProduct;

import React, {useState} from 'react';
import {Text, View, StyleSheet,FlatList} from 'react-native';
import AppButton from '../../../../../component/common/appButton';
import {color} from '../../../../../assets/colors/color';
import Header from '../../../../../component/common/appHeader';
import {hp} from '../../../../../commonMethod/screenRatio';
import styles from '../../../../../general/generalStyleSheet';
import CartCard from '../../../../../component/common/cartCard';

const OrderIdProduct = ({navigation}) => {
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
          style={{marginBottom:'40%'}}
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
              onPress={()=>navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
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
    height: '10%',
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
});
export default OrderIdProduct;
