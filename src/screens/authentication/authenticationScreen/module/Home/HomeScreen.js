import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {color} from '../../../../../assets/colors/color';
import {
  BELL_ICON,
  CLOSE_ICON,
  SEARCH_ICON,
  SORT_ICON,
} from '../../../../../assets/imagepath/imagepath';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import {ShowToastMessage} from '../../../../../commonMethod/toastMessage';
import ImageSliderV2 from '../../../../../component/common/ImageSliderV2';
import CustomTextInput from '../../../../../component/common/customTextInput';
import FilterButton from '../../../../../component/common/filterButton';
import ListProductCard from '../../../../../component/common/listProductCard';
import SvgImage from '../../../../../component/common/svgImage';
import {TOAST_MESSAGE_TYPE} from '../../../../../general/generalConst';
import styles from '../../../../../general/generalStyleSheet';
import {SCREEN_NAME} from '../../../../../general/screenName';
import {CREATE_NEW_ORDER, SEARCH_PRODUCTS_TEXT} from './HomeScreenUtility';
import CheckBox from '../../../../../component/common/checkBox';
import AppButton from '../../../../../component/common/appButton';

const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const inputRef = React.useRef();
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

  const filterOption = [
    {type: 'Categories'},
    {type: 'Sort by'},
    {type: 'Filters'},
    {type: 'Brand'},
  ];

  const [orderIdData, setOrderIdData] = useState([
    {
      id: 'OID012210',
      items: '16 Items',
      actualcost: '₹ 52000',
      finalcost: '₹ 35000',
      isChecked: false,
    },
    {
      id: 'OID012211',
      items: '16 Items',
      actualcost: '₹ 52000',
      finalcost: '₹ 35000',
      isChecked: false,
    },
    // {
    //   id: 'OID012212',
    //   items: '16 Items',
    //   actualcost: '₹ 52000',
    //   finalcost: '₹ 35000',
    //   isChecked: false,
    // },
    // {
    //   id: 'OID012213',
    //   items: '16 Items',
    //   actualcost: '₹ 52000',
    //   finalcost: '₹ 35000',
    //   isChecked: false,
    // },
    // {
    //   id: 'OID012214',
    //   items: '16 Items',
    //   actualcost: '₹ 52000',
    //   finalcost: '₹ 35000',
    //   isChecked: false,
    // },
    // {
    //   id: 'OID012215',
    //   items: '16 Items',
    //   actualcost: '₹ 52000',
    //   finalcost: '₹ 35000',
    //   isChecked: false,
    // },
    // {
    //   id: 'OID012216',
    //   items: '16 Items',
    //   actualcost: '₹ 52000',
    //   finalcost: '₹ 35000',
    //   isChecked: false,
    // },
    // {
    //   id: 'OID012217',
    //   items: '16 Items',
    //   actualcost: '₹ 52000',
    //   finalcost: '₹ 35000',
    //   isChecked: false,
    // },
    // {
    //   id: 'OID012218',
    //   items: '16 Items',
    //   actualcost: '₹ 52000',
    //   finalcost: '₹ 35000',
    //   isChecked: false,
    // },
  ]);

  const onPressCheckBox = indexVal => {
    const tempData = orderIdData;
  };

  const renderProductList = item => {
    return (
      <View style={style.productWidth}>
        <ListProductCard
          data={item}
          onPressCard={() => onPressCard()}
          onPressSelectOrder={() => handleModal()}
        />
      </View>
    );
  };

  const renderFilterButtonList = item => {
    return (
      <View style={style.filterButtonMargin}>
        <FilterButton data={item} />
      </View>
    );
  };

  const renderIdList = (item, index) => {
    return (
      <View style={{paddingHorizontal: hp(4)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '55%'}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <CheckBox
                  isTrue={item?.isChecked ?? false}
                  onPress={() => onPressCheckBox(index)}
                />
              </View>
              <View style={{width: '6%'}} />
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    color: color.darkblue,
                    fontWeight: '600',
                  }}
                  numberOfLines={1}>
                  {item?.id ?? ''}
                </Text>
                <View style={styles.smallHeight} />
                <Text style={{fontSize: 15, color: color.grey1}}>
                  {item?.items ?? ''}
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: '43%'}}>
            <Text style={style.actualcostTextStyle}>
              {item?.actualcost ?? ''}
            </Text>
            <Text style={style.finalCostTextStyle}>
              {item?.finalcost ?? ''}
            </Text>
          </View>
        </View>
        <View style={styles.doubleHeight} />
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

  const onPressCard = () => {
    navigation.navigate(SCREEN_NAME.ProductDescription);
  };

  const handleModal = () => {
    setShowModal(!showModal);
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
        <View style={style.filterButtonMargin} />
        <TouchableOpacity onPress={() => showToast()}>
          <SvgImage Source={BELL_ICON} height={hp(5)} width={wp(6)} />
        </TouchableOpacity>
      </View>
      <View style={styles.doubleHeight} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.imageSliderAlignment}>
          <ImageSliderV2 />
        </View>
        <View style={styles.doubleHeight} />
        <View style={style.categoryFlex}>
          <View>
            <TouchableOpacity style={style.sortIconView}>
              <SvgImage Source={SORT_ICON} height={hp(7)} width={wp(10)} />
            </TouchableOpacity>
          </View>
          <View style={{width: wp(3)}} />
          <View>
            <FlatList
              data={filterOption}
              renderItem={({item}) => renderFilterButtonList(item)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginEnd: wp(18)}}
            />
          </View>
        </View>
        <View style={styles.doubleHeight} />
        <View style={style.productView}>
          <FlatList
            data={productData}
            renderItem={({item}) => renderProductList(item)}
            ItemSeparatorComponent={itemSeperator()}
            showsVerticalScrollIndicator={false}
            style={style.flatListMargin}
            keyExtractor={item => item?.id}
          />
        </View>
      </ScrollView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onDismiss={() => setShowModal(!showModal)}
          onRequestClose={() => setShowModal(!showModal)}>
          <View style={style.modalViewStyle}>
            <View>
              <View style={style.modalItemFlex}>
                <Text style={style.searProductTextStyle}>
                  {SEARCH_PRODUCTS_TEXT}
                </Text>
                <TouchableOpacity onPress={() => handleModal()}>
                  <SvgImage
                    Source={CLOSE_ICON}
                    height={hp(5)}
                    width={wp(8.5)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.singleHeight} />
              <View style={styles.verticalLine} />
              <View style={styles.singleHeight} />
              <View>
                <FlatList
                  data={orderIdData}
                  renderItem={({item, index}) => renderIdList(item, index)}
                  keyExtractor={item => item?.id}
                  style={style.orderFlatStyle}
                />
              </View>
            </View>
            <View style={styles.singleHeight} />
            <View style={style.createOrderButtonViewStyle}>
              <AppButton
                title={CREATE_NEW_ORDER}
                customButtonStyle={style.createOrderButtonStyle}
                customButtonTextStyle={style.createOrderButtonTextStyle}
                onPress={() => handleModal()}
              />
            </View>
          </View>
        </Modal>
      </View>
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
  filterButtonMargin: {marginLeft: wp(2)},
  flatListMargin: {marginBottom: hp(10)},
  actualcostTextStyle: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: color.grey1,
    textAlign: 'right',
  },
  finalCostTextStyle: {
    fontSize: 20,
    color: color.darkCyan,
    textAlign: 'right',
  },
  imageSliderAlignment: {alignSelf: 'center'},
  categoryFlex: {flexDirection: 'row', alignItems: 'center'},
  sortIconView: {marginLeft: wp(3), margin: hp(-1), marginRight: wp(-1.5)},
  createOrderButtonStyle: {borderRadius: hp(1), height: hp(6)},
  createOrderButtonTextStyle: {fontSize: 16},
  createOrderButtonViewStyle: {
    height: '20%',
    marginTop: 'auto',
    paddingHorizontal: hp(1),
  },
  orderFlatStyle: {marginBottom: hp(25)},
  searProductTextStyle: {fontSize: 20, color: color.darkblue},
  modalItemFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(3),
    marginLeft: hp(1),
    marginRight: hp(1),
    paddingTop: hp(2),
  },
  modalViewStyle: {
    height: '40%',
    marginTop: 'auto',
    backgroundColor: color.white,
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
  },
});
export default Home;
