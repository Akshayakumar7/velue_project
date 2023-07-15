import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {color} from '../../../../../assets/colors/color';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import TabButton from '../../../../../component/common/tabButton';
import Header from '../../../../../component/common/appHeader';
import {ORDER_TEXT} from './OrderSceenUtility';
import OrderIdCard from '../../../../../component/common/orderIdCard';
import styles from '../../../../../general/generalStyleSheet';
import DraftCard from '../../../../../component/common/draftCard';
import {SCREEN_NAME} from '../../../../../general/screenName';
import SearchHeader from '../../../../../component/common/appSearchHeader';
import {
  GREY_CROSS_ICON,
  SEARCH_ICON,
} from '../../../../../assets/imagepath/imagepath';

const Orders = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(true);
  const [searchText, setSearchText] = useState('');

  const data = [
    {
      orderId: 'Order ID - 9865491',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '10000',
      color: color.darkblue,
      status: 'Order Placed',
    },
    {
      orderId: 'Order ID - 9865492',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '20000',
      color: 'green',
      status: 'Approved',
    },
    {
      orderId: 'Order ID - 9865493',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '30000',
      color: 'yellow',
      status: 'In-Transit',
    },
    {
      orderId: 'Order ID - 9865494',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '50000',
      color: '#800080',
      status: 'Delivered',
    },
    {
      orderId: 'Order ID - 9865495',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '10000',
      color: 'pink',
      status: 'Rejected',
    },
    {
      orderId: 'Order ID - 9865496',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '20000',
      color: 'red',
      status: 'Rejected',
    },
    {
      orderId: 'Order ID - 9865497',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '30000',
      backgroundColor: color.darkblue,
      status: 'Order Placed',
    },
    {
      orderId: 'Order ID - 9865498',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '50000',
      color: 'green',
      status: 'Approved',
    },
  ];

  const DraftData = [
    {
      orderId: 'Order ID - 9865491',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '10000',
    },
    {
      orderId: 'Order ID - 9865492',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '20000',
    },
    {
      orderId: 'Order ID - 9865493',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '30000',
    },
    {
      orderId: 'Order ID - 9865494',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '50000',
    },
    {
      orderId: 'Order ID - 9865495',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '10000',
    },
    {
      orderId: 'Order ID - 9865496',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '20000',
    },
    {
      orderId: 'Order ID - 9865497',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '30000',
    },
    {
      orderId: 'Order ID - 9865498',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '50000',
    },
  ];

  const renderProgressItem = item => {
    return (
      <View key={item.id}>
        <OrderIdCard
          data={item}
          customBorderStyle={{backgroundColor: item.color}}
        />
        <View style={styles.singleHeight} />
      </View>
    );
  };

  const renderDraftItems = item => {
    return (
      <View key={item.id}>
        <DraftCard
          data={item}
          onPress={() => navigation.navigate(SCREEN_NAME.orderId)}
        />
        <View style={{height: hp(1)}} />
      </View>
    );
  };
  const updateSearchInput = () => {
    setSearchText('');
  };

  return (
    <View>
      <SearchHeader
        headerTitle={ORDER_TEXT}
        onPressBackButton={() => navigation.goBack()}
        icon={searchText !== '' ? GREY_CROSS_ICON : SEARCH_ICON}
        onChangeText={e => setSearchText(e)}
        value={searchText}
        updateSearchInput={updateSearchInput}
      />
      <TabButton
        isActive={activeTab}
        onPressDraft={() => setActiveTab(true)}
        onPressInProgress={() => setActiveTab(false)}
      />
      <View style={style.backgroundColorView}>
        <View style={styles.doubleHeight} />
        {activeTab ? (
          <View style={{paddingHorizontal: hp(1)}}>
            <FlatList
              data={data}
              renderItem={({item}) => renderDraftItems(item)}
              keyExtractor={item => item?.id}
              style={style.flatListBottomMargin}
            />
          </View>
        ) : (
          <View style={{paddingHorizontal: hp(1)}}>
            <FlatList
              data={data}
              renderItem={({item}) => renderProgressItem(item)}
              keyExtractor={item => item?.id}
              style={style.flatListBottomMargin}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  focusedBorder: {
    backgroundColor: color.darkblue,
    borderRadius: hp(1),
    alignItems: 'center',
    height: hp(6),
    width: wp(30),
    pb: hp(3),
  },
  focusedTextStyle: {
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  unFocusedTextStyle: {
    color: color.darkblue,
  },
  backgroundColorView: {backgroundColor: color.lightGreen},
  flatListBottomMargin: {marginBottom: hp(33)},
});

export default Orders;
