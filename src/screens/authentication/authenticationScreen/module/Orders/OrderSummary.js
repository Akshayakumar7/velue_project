import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from 'react-native';
import {color} from '../../../../../assets/colors/color';
import Header from '../../../../../component/common/appHeader';
import styles from '../../../../../general/generalStyleSheet';
import {hp, wp} from '../../../../../commonMethod/screenRatio';

const OrderSummary = ({navigation}) => {
  const onPressLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={style.mainView}>
      <Header headerTitle={'Order Summary'} />
      <View style={styles.doubleHeight} />
      <View style={{paddingHorizontal: '5%'}}>
        <Text style={{color: color.mandatoryTextColor, fontSize: 15}}>
          Delivery Address
          <Text style={{fontSize: 13, color: color.red}}> *</Text>
        </Text>
        <View style={styles.doubleHeight} />
        <View
          style={{
            backgroundColor: color.white,
            borderRadius: hp(1),
            paddingHorizontal: hp(2),
          }}>
          <View style={styles.doubleHeight} />
          <Text
            style={{fontWeight: '600', color: color.darkblue, fontSize: 20}}>
            Venaram Choudary
          </Text>
          <View style={styles.doubleHeight} />
          <Text style={{fontSize: 15, color: color.grey1}}>
            Devi Enterprises, Mega Warehouse, KEB Road, Bommanhalli, Bengaluru
            560068
          </Text>
          <View style={styles.doubleHeight} />
          <Text style={{fontSize: 15, color: color.darkblue}}>
            968565985685, 85854558222
          </Text>
          <View style={styles.doubleHeight} />
        </View>
        <View style={styles.thirpleHeight} />
        <Text style={{color: color.mandatoryTextColor, fontSize: 15}}>
          Delivery Details
        </Text>
        <View style={styles.doubleHeight} />
        <View
          style={{
            backgroundColor: color.white,
            borderRadius: hp(1),
            paddingHorizontal: hp(2),
          }}>
          <View style={styles.doubleHeight} />
          <Text
            style={{fontWeight: '600', color: color.darkblue, fontSize: 20}}>
            Delivery in 24 hours once the order is placed.
          </Text>
          <View style={styles.doubleHeight} />
          <Text style={{fontSize: 15, color: color.grey1}}>
            Business hours (9AM- 5PM)
          </Text>

          <View style={styles.doubleHeight} />
        </View>
        <View style={styles.thirpleHeight} />
        <Text style={{color: color.mandatoryTextColor, fontSize: 15}}>
          Price Details
        </Text>
        <View style={styles.doubleHeight} />
        <View
          style={{
            backgroundColor: color.white,
            borderRadius: hp(1),
            paddingHorizontal: hp(2),
          }}>
          <View style={styles.doubleHeight} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  color: color.darkblue,
                  fontSize: 20,
                }}>
                Total Price
              </Text>
            </View>
            <View>
              <Text
                style={{fontSize: 18, color: color.grey1, fontWeight: '600'}}>
                ₹ 25000
              </Text>
            </View>
          </View>
          <View style={styles.doubleHeight} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  color: color.darkblue,
                  fontSize: 20,
                }}>
                Output CGST
              </Text>
            </View>
            <View>
              <Text
                style={{fontSize: 18, color: color.grey1, fontWeight: '600'}}>
                ₹ 2500
              </Text>
            </View>
          </View>

          <View style={styles.doubleHeight} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  color: color.darkblue,
                  fontSize: 20,
                }}>
                Output SGST
              </Text>
            </View>
            <View>
              <Text
                style={{fontSize: 18, color: color.grey1, fontWeight: '600'}}>
                ₹ 2500
              </Text>
            </View>
          </View>
          <View style={styles.singleHeight} />
          <View style={styles.verticalLine} />
          <View style={styles.singleHeight} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  color: color.darkblue,
                  fontSize: 20,
                }}>
                Total
              </Text>
            </View>
            <View>
              <Text
                style={{fontSize: 18, color: color.darkCyan, fontWeight: '600'}}>
                ₹ 30000
              </Text>
            </View>
          </View>
          <View style={styles.doubleHeight} />

        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: color.lightGreen},
});
export default OrderSummary;
