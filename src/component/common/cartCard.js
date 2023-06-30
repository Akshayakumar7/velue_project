import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import Fastphoto from './FastImageScreen';
import styles from '../../general/generalStyleSheet';
import SvgImage from './svgImage';
import {
  DELETE_ICON,
  MINUS_ICON,
  PENCIL_ICON,
  PLUS_ICON,
} from '../../assets/imagepath/imagepath';
import {INDIAN_RUPEE_SYMBOL} from './componentUtility';

const CartCard = props => {
  const {data, onPressMinusIcon, onPressPlusIcon} = props;
  return (
    <View>
      <View style={[style.mainView, style.shadow]}>
        <View style={style.flexView}>
          <View>
            <Fastphoto
              uri={data?.image ?? ''}
              customImageStyle={style.productImageStyle}
            />
          </View>
          <View style={styles.thripleVerticleDivider} />
          <View style={{width: '75%'}}>
            <View style={styles.singleHeight} />
            <Text style={style.companyTextStyle}>{data?.company ?? ''}</Text>
            <View style={styles.singleHeight} />
            <View style={styles.smallHeight} />
            <Text style={style.productTextStyle}>
              {data?.productName ?? ''}
            </Text>
          </View>
        </View>
        <View style={styles.doubleHeight} />
        <View style={style.verticalLine}></View>
        <View style={styles.doubleHeight} />
        <View>
          <View style={style.mainFlex}>
            <View style={style.halfFlex}>
              <View>
                <TouchableOpacity>
                  <SvgImage Source={DELETE_ICON} height={hp(5)} width={wp(6)} />
                </TouchableOpacity>
              </View>
              <View style={{width:'20%'}}/>
              <View>
                <TouchableOpacity>
                  <SvgImage Source={PENCIL_ICON} height={hp(5)} width={wp(6)} />
                </TouchableOpacity>
              </View>
              <View style={styles.extraVerticalDivider} />
              <View style={style.addRemoveBorder}>
                <View style={style.commonFlex}>
                  <View style={style.commonFlex}>
                    {/* <TouchableOpacity onPress={onPressMinusIcon}>
                      <SvgImage
                        Source={MINUS_ICON}
                        height={hp(7)}
                        width={wp(8)}
                      />
                    </TouchableOpacity> */}
                    <View style={styles.verticalDivider} />
                    <View>
                      <Text style={style.cartCount}>{data?.count}</Text>

                      <Text style={style.productType}>{data?.type}</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    {/* <TouchableOpacity onPress={onPressPlusIcon}>
                      <SvgImage
                        Source={PLUS_ICON}
                        height={hp(7)}
                        width={wp(8)}
                      />
                    </TouchableOpacity> */}
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={style.actualPriceText}>
                {data?.originalPrice ?? 0}
              </Text>
              <Text style={style.originalPriceText}>
                {INDIAN_RUPEE_SYMBOL} {data?.actualPrice ?? 0}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    width: '100%',
    // height: hp(30),
    backgroundColor: color.white,
    borderRadius: hp(1),
    padding: hp(1.5),
  },
  shadow: {
    elevation: 10,
    shadowColor: color.shadowColor,
  },
  flexView: {
    flexDirection: 'row',
  },
  productImageStyle: {
    width: wp(22),
    height: hp(11),
    borderRadius: hp(1.5),
  },
  companyTextStyle: {
    fontSize: hp(2),
    color: color.grey,
  },
  productTextStyle: {
    fontSize: hp(2.3),
    color: color.darkblue,
  },
  verticalLine: {
    borderBottomWidth: hp(0.1),
    color: color.grey,
    width: '110%',
    alignSelf: 'center',
  },
  addRemoveBorder: {
    backgroundColor: color.boxGrey,
    borderRadius: hp(1.5),
    alignContent: 'center',
    padding: hp(1),
    width: '100%',
    height: hp(8),
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
  productType: {fontSize: 18, color: color.grey1, textAlign: 'center'},
  cartCount: {
    fontSize: 20,
    color: color.darkblue,
    fontWeight: '700',
  },
  commonFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    alignItems: 'center',
  },
  mainFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
export default CartCard;
