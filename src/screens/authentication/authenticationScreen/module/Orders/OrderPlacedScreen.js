import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { RIGHT_MARK_ICON } from '../../../../../assets/imagepath/imagepath';
import SvgImage from '../../../../../component/common/svgImage';
import styles from '../../../../../general/generalStyleSheet';
import { GREAT_TEXT, YOUR_ARE_SUCCESSFULLY_REGISTRED_WITH_US_TEXT } from '../../register/registerUtility';
import { color } from '../../../../../assets/colors/color';
import { hp, wp } from '../../../../../commonMethod/screenRatio';
import AppButton from '../../../../../component/common/appButton';


const OrderPlaced = ({navigation}) => {
  return (
    <View style={style.mainView}>
      <SvgImage Source={RIGHT_MARK_ICON} height={hp(30)} width={wp(60)} />
      <View style={styles.doubleHeight} />
      <Text style={style.greatTextStyle}>{"Order Placed"}</Text>
      <View style={styles.singleHeight} />
      <View style={style.successTextWidth}>
        <Text style={style.successfullyTextStyle}>
          {'You can see your listings in orders tab'}
        </Text>
      </View>
      {/* <AppButton title={'Home'} onPress={()=>navigation.navigate("Home")}/> */}
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.lightGreen,
  },
  greatTextStyle: {
    fontSize: 30,
    color: color.darkblue,
    fontWeight: '500',
  },
  successfullyTextStyle: {
    fontSize: 18,
    color: color.darkblue,
    textAlign: 'center',
  },
  successTextWidth: {
    width: '90%',
  },
});
export default OrderPlaced;
