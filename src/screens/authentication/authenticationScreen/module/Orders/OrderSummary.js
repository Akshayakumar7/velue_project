import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {color} from '../../../../../assets/colors/color';
import Header from '../../../../../component/common/appHeader';
import styles from '../../../../../general/generalStyleSheet';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import ApplyCancelButton from '../../../../../component/common/applyCancelButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CANCEL_TEXT} from '../../register/registerUtility';
import {VERIFY_TEXT} from '../../login/loginUtility';
import {SCREEN_NAME} from '../../../../../general/screenName';
import AppButton from '../../../../../component/common/appButton';
import {
  DELIVERY_ADDRESS,
  DELIVERY_DETAILS,
  DELIVERY_HOURS,
  DELIVERY_IN_TEXT,
  ORDER_SUMMARY,
  OUTPUT_CGST,
  OUTPUT_SGST,
  PLACE_ORDER,
  PRICE_DETAILS,
  SAVE_DRAFR,
  TOTAL,
  TOTAL_PRICE,
} from './OrderSceenUtility';

const OrderSummary = ({navigation}) => {
  return (
    <View style={style.mainView}>
      <Header
        headerTitle={ORDER_SUMMARY}
        onPressBackButton={() => navigation.goBack()}
      />
      <View style={styles.doubleHeight} />
      <ScrollView>
        <View style={style.mainHorizonatalPadding}>
          <Text style={style.deliveryTextStyle}>
            {DELIVERY_ADDRESS}
            <Text style={style.redDotTextStyle}> *</Text>
          </Text>
          <View style={styles.doubleHeight} />
          <View style={style.commonWhiteCard}>
            <View style={styles.doubleHeight} />
            <Text style={style.nameTextStykle}>Venaram Choudary</Text>
            <View style={styles.doubleHeight} />
            <Text style={style.addressTextStyle}>
              Devi Enterprises, Mega Warehouse, KEB Road, Bommanhalli, Bengaluru
              560068
            </Text>
            <View style={styles.doubleHeight} />
            <Text style={style.mobileNumberTextStyle}>
              968565985685, 85854558222
            </Text>
            <View style={styles.doubleHeight} />
          </View>
          <View style={styles.thirpleHeight} />
          <Text style={style.deliveryTextStyle}>{DELIVERY_DETAILS}</Text>
          <View style={styles.doubleHeight} />
          <View style={style.commonWhiteCard}>
            <View style={styles.doubleHeight} />
            <Text style={style.nameTextStykle}>{DELIVERY_IN_TEXT}</Text>
            <View style={styles.doubleHeight} />
            <Text style={style.deliveryHoursTextStyle}>{DELIVERY_HOURS}</Text>
            <View style={styles.doubleHeight} />
          </View>
          <View style={styles.thirpleHeight} />
          <Text style={style.deliveryTextStyle}>{PRICE_DETAILS}</Text>
          <View style={styles.doubleHeight} />
          <View style={style.commonWhiteCard}>
            <View style={styles.doubleHeight} />
            <View style={style.flexView}>
              <View>
                <Text style={style.commonBlueTextStyle}>{TOTAL_PRICE}</Text>
              </View>
              <View>
                <Text style={style.priceTextStyle}>₹ 25000</Text>
              </View>
            </View>
            <View style={styles.doubleHeight} />
            <View style={style.flexView}>
              <View>
                <Text style={style.commonBlueTextStyle}>{OUTPUT_CGST}</Text>
              </View>
              <View>
                <Text style={style.priceTextStyle}>₹ 2500</Text>
              </View>
            </View>
            <View style={styles.doubleHeight} />
            <View style={style.flexView}>
              <View>
                <Text style={style.commonBlueTextStyle}>{OUTPUT_SGST}</Text>
              </View>
              <View>
                <Text style={style.priceTextStyle}>₹ 2500</Text>
              </View>
            </View>
            <View style={styles.singleHeight} />
            <View style={styles.verticalLine} />
            <View style={styles.singleHeight} />
            <View style={style.flexView}>
              <View>
                <Text style={style.commonBlueTextStyle}>{TOTAL}</Text>
              </View>
              <View>
                <Text style={style.totalPriceTextStyle}>₹ 30000</Text>
              </View>
            </View>
            <View style={styles.doubleHeight} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.doubleHeight} />
      <View style={style.TouchableOpacity}>
        <View style={style.whiteBackground}>
          <View style={[style.flexView, style.smallPaddingHorizontal]}>
            <TouchableOpacity
              style={style.greyborderStyle}
              onPress={() => navigation.navigate(SCREEN_NAME.SaveDraft)}>
              <Text style={style.saveDraftTexStyle}>{SAVE_DRAFR}</Text>
            </TouchableOpacity>
            <View style={style.itemDivider} />
            <TouchableOpacity
              style={style.blueBlackgroundTextStyle}
              onPress={() => navigation.navigate(SCREEN_NAME.OrderPlaced)}>
              <Text style={style.placeOrderTextStyle}>{PLACE_ORDER}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: color.lightGreen},
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
  dividerWidth: {width: '2%'},
  mainHorizonatalPadding: {paddingHorizontal: '5%'},
  deliveryTextStyle: {color: color.mandatoryTextColor, fontSize: 15},
  redDotTextStyle: {fontSize: 13, color: color.red},
  commonWhiteCard: {
    backgroundColor: color.white,
    borderRadius: hp(1),
    paddingHorizontal: hp(2),
  },
  placeOrderTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: color.white,
    margin: hp(1.5),
    textAlign: 'center',
  },
  blueBlackgroundTextStyle: {
    borderWidth: hp(0.1),
    borderRadius: hp(1),
    backgroundColor: color.darkblue,
    width: '50%',
  },
  saveDraftTexStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: color.darkblue,
    margin: hp(1.5),
    textAlign: 'center',
  },
  greyborderStyle: {
    borderWidth: hp(0.1),
    borderRadius: hp(1),
    borderColor: color.underLineColor,
    width: '50%',
  },
  nameTextStykle: {fontWeight: '600', color: color.darkblue, fontSize: 20},
  addressTextStyle: {fontSize: 15, color: color.grey1},
  mobileNumberTextStyle: {fontSize: 15, color: color.darkblue},
  deliveryHoursTextStyle: {fontSize: 15, color: color.grey1},
  commonBlueTextStyle: {
    fontWeight: '600',
    color: color.darkblue,
    fontSize: 20,
  },
  priceTextStyle: {fontSize: 18, color: color.grey1, fontWeight: '600'},
  totalPriceTextStyle: {
    fontSize: 18,
    color: color.darkCyan,
    fontWeight: '600',
  },
  smallPaddingHorizontal: {paddingHorizontal: '1%'},
  itemDivider: {width: '2%'},
});
export default OrderSummary;
