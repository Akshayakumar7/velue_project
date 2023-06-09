import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../../component/common/appHeader';
import {color} from '../../../../../assets/colors/color';
import {
  AMOUNT_TO_BE_PAID,
  CREDIT_AMOUNT_TEXT,
  CREDIT_DAYS,
  EDIT_PROFILE_TEXT,
  LOG_OUT_TEXT,
  PAY_NOW_TEXT,
  PROFILE_TITLE,
} from './AccountUtility';
import styles from '../../../../../general/generalStyleSheet';
import {hp, wp} from '../../../../../commonMethod/screenRatio';
import AppButton from '../../../../../component/common/appButton';
import {
  BLUE_RIGHT_ARROW,
  GREY_CONTACT_ICON,
  LOG_OUT_ICON,
} from '../../../../../assets/imagepath/imagepath';
import SvgImage from '../../../../../component/common/svgImage';
import {PracticeContext} from '../../../../../useContext/PracticeContext';

const Profile = ({navigation}) => {
  const {setUserLOggedIn} = useContext(PracticeContext);
  return (
    <View style={style.mainView}>
      <Header
        headerTitle={PROFILE_TITLE}
        onPressBackButton={() => navigation.goBack()}
      />
      <ScrollView>
        <View>
          <View style={styles.doubleHeight} />
          <View>
            <View style={style.subView}>
              <View style={style.whiteCard}>
                <Text style={style.textStyle}>Mittal Hardwares</Text>
                <View style={styles.singleHeight} />
                <Text style={style.gstTextStyle}>GST29CURP9879ZN</Text>
              </View>
            </View>
            <View style={styles.midDivider} />
            <View style={styles.verticalLine} />
            <View style={styles.midDivider} />
            <View style={style.subView}>
              <View style={style.flexView}>
                <View style={[style.whiteCard, style.subCardWidth]}>
                  <Text style={style.gstTextStyle}>{CREDIT_AMOUNT_TEXT}</Text>
                  <View style={styles.singleHeight} />
                  <Text style={style.textStyle}>10,00,000</Text>
                </View>
                <View style={style.smallHorizonatalMargin} />
                <View style={[style.whiteCard, style.subCardWidth]}>
                  <Text style={style.gstTextStyle}>{CREDIT_DAYS}</Text>
                  <View style={styles.singleHeight} />
                  <Text style={style.textStyle}>30 Days</Text>
                </View>
              </View>
              <View style={styles.midDivider} />

              <View style={[style.whiteCard]}>
                <View style={style.fullFlex}>
                  <View style={style.creditDaysWidth}>
                    <Text style={style.gstTextStyle}>{CREDIT_DAYS}</Text>
                    <View style={styles.singleHeight} />
                    <Text style={style.textStyle}>30 Days</Text>
                  </View>
                  <View style={style.payNowButtonWidth}>
                    <AppButton
                      customButtonStyle={style.paynowButtonTextStyle}
                      title={PAY_NOW_TEXT}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.midDivider} />
              <View style={styles.verticalLine} />
              <View style={styles.midDivider} />

              <View style={style.whiteCard}>
                <View style={styles.midDivider} />
                <View style={style.flexView}>
                  <View style={style.editProfileFlex}>
                    <SvgImage
                      Source={GREY_CONTACT_ICON}
                      height={hp(3.5)}
                      width={wp(5.5)}
                      style={style.greyContactIconStyle}
                    />
                    <Text style={style.textStyle}>{EDIT_PROFILE_TEXT}</Text>
                  </View>

                  <View>
                    <SvgImage
                      Source={BLUE_RIGHT_ARROW}
                      height={hp(3)}
                      width={wp(5.5)}
                      style={style.blueRightIconStyle}
                    />
                  </View>
                </View>
                <View style={styles.midDivider} />
              </View>

              <View style={{marginBottom: hp(5)}} />
            </View>
          </View>

          <View style={{height: '20%'}} />
          <View style={style.whiteCard}>
            <View style={styles.midDivider} />
            <View style={style.flexView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgImage
                  Source={GREY_CONTACT_ICON}
                  height={hp(3)}
                  width={wp(5.5)}
                  style={style.greyContactIconStyle}
                />
                <Text style={style.textStyle}>{LOG_OUT_TEXT}</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => setUserLOggedIn(false)}>
                  <SvgImage
                    Source={LOG_OUT_ICON}
                    height={hp(3.5)}
                    width={wp(6)}
                    style={style.blueRightIconStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.midDivider} />
          </View>
          <View style={styles.doubleContentDivider} />
          <View style={styles.doubleContentDivider} />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: color.lightGreen,
  },
  subView: {
    paddingHorizontal: '3%',
  },
  whiteCard: {
    backgroundColor: color.white,
    borderRadius: hp(1),
    padding: hp(1),
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.darkblue,
  },
  gstTextStyle: {
    fontSize: 18,
    color: color.darkCyan,
  },
  subCardWidth: {
    width: '48%',
  },
  shadow: {
    elevation: 10,
    shadowColor: color.shadowColor,
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fullFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  paynowButtonTextStyle: {
    borderRadius: hp(1),
    height: hp(5.5),
  },
  blueRightIconStyle: {marginRight: wp(5), marginLeft: wp(3)},
  greyContactIconStyle: {marginRight: wp(5), marginLeft: wp(3)},
  smallHorizonatalMargin: {marginHorizontal: hp(1)},
  creditDaysWidth: {width: '60%'},
  payNowButtonWidth: {width: '30%'},
  editProfileFlex: {flexDirection: 'row', alignItems: 'center'},
});
export default Profile;
