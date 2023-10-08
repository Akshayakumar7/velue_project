import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Keyboard} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {color} from '../../../../../assets/colors/color';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import TabButton from '../../../../../component/common/tabButton';
import Header from '../../../../../component/common/appHeader';
import {NO_DATA_AVAILABLE_TEXT, ORDER_TEXT} from './OrderSceenUtility';
import OrderIdCard from '../../../../../component/common/orderIdCard';
import styles from '../../../../../general/generalStyleSheet';
import DraftCard from '../../../../../component/common/draftCard';
import {SCREEN_NAME} from '../../../../../general/screenName';
import SearchHeader from '../../../../../component/common/appSearchHeader';
import {
  GREY_CROSS_ICON,
  SEARCH_ICON,
} from '../../../../../assets/imagepath/imagepath';
import {
  BASE_URL,
  TOAST_MESSAGE_TYPE,
} from '../../../../../general/generalConst';
import {ShowToastMessage} from '../../../../../commonMethod/toastMessage';
import axios from 'axios';
import OrderSkeletonLoader from './OrderScreenLoader';
import NoDataText from '../../../../../component/common/noDataText';

const Orders = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [draftData, setDraftData] = useState([]);
  const [loader, setLoader] = useState(false);

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
    },
    {
      orderId: 'Order ID - 9865493',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '30000',
      color: 'yellow',
    },
    {
      orderId: 'Order ID - 9865494',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '50000',
      color: '#800080',
    },
    {
      orderId: 'Order ID - 9865495',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '10000',
      color: 'pink',
    },
    {
      orderId: 'Order ID - 9865496',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '20000',
      color: 'red',
    },
    {
      orderId: 'Order ID - 9865497',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '30000',
      backgroundColor: color.darkblue,
    },
    {
      orderId: 'Order ID - 9865498',
      date: 'Delivery 12th Feb 2023',
      amount: 'Order ID - 9865491',
      status: 'Order Placed',
      cost: '50000',
      color: 'green',
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

  const fetchDraftData = async () => {
    setLoader(true);
    try {
      const response = await axios.get(BASE_URL + '/order/getAllOrders'); // Make a GET request
      console.log('response>>>>', response?.data);
      setDraftData(response?.data ?? []);
      setLoader(false);
    } catch (error) {
      console.log('error>>>', error);
      setLoader(false);
      ShowToastMessage(
        TOAST_MESSAGE_TYPE.error,
        'BATHMART',
        error?.response?.data?.message ?? 'Something went wrong',
      );
    }
  };

  useEffect(() => {
    fetchDraftData();
  }, []);

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

  const renderDraftItems = (item, index) => {
    return (
      <View key={index}>
        <DraftCard
          data={item}
          onPress={() => navigation.navigate(SCREEN_NAME.OrderIdProductScreen)}
          index={index}
        />
        <View style={styles.singleHeight} />
      </View>
    );
  };
  const updateSearchInput = () => {
    setSearchText('');
    Keyboard.dismiss();
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
          <View style={style.commonHorizontalPadding}>
            {loader && <OrderSkeletonLoader />}
            <FlatList
              data={draftData ?? []}
              renderItem={({item, index}) => renderDraftItems(item, index)}
              keyExtractor={index => index}
              style={style.flatListBottomMargin}
            />
            {draftData?.length == 0 && (
              <View style={{marginBottom: '70%'}}>
                <NoDataText label={NO_DATA_AVAILABLE_TEXT} />
              </View>
            )}
          </View>
        ) : (
          <View style={style.commonHorizontalPadding}>
            {/* <FlatList
              data={data}
              renderItem={({item}) => renderProgressItem(item)}
              keyExtractor={item => item?.id}
              style={style.flatListBottomMargin}
            /> */}
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
  flatListBottomMargin: {marginBottom: hp(37)},
  commonHorizontalPadding: {paddingHorizontal: hp(1)},
});

export default Orders;
