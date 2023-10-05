import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
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
import {SCREEN_NAME} from '../../../../../general/screenName';
import * as Keychain from 'react-native-keychain';
import {ACTIVITY_INDICATOR} from '../../../../../general/generalConst';

const Profile = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const {setUserLOggedIn} = useContext(PracticeContext);

  const onPressEditProfile = () => {
    navigation.navigate(SCREEN_NAME.Register, {isFromEditProfile: true});
  };

  const onPressLogout = async () => {
    setLoader(true);
    await Keychain.resetGenericPassword();
    setUserLOggedIn(false);
    setLoader(false);
  };
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

                  <TouchableOpacity onPress={() => onPressEditProfile()}>
                    <SvgImage
                      Source={BLUE_RIGHT_ARROW}
                      height={hp(3)}
                      width={wp(5.5)}
                      style={style.blueRightIconStyle}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.midDivider} />
              </View>
              <View style={style.bottomMargin} />
            </View>
          </View>
          <View style={{height: 20}} />
          {loader && (
            <ActivityIndicator
              color={color.primaryBlue}
              size={ACTIVITY_INDICATOR.large}
            />
          )}
          <View style={{height: '8%'}} />

          <View style={styles.doubleContentDivider} />
         

          <View>
            <View style={style.whiteCard}>
              <View style={styles.midDivider} />
              <View style={style.flexView}>
                <View style={style.subFlex}>
                  <SvgImage
                    Source={GREY_CONTACT_ICON}
                    height={hp(3)}
                    width={wp(5.5)}
                    style={style.greyContactIconStyle}
                  />
                  <Text style={style.textStyle}>{LOG_OUT_TEXT}</Text>
                </View>

                <View>
                  <TouchableOpacity onPress={() => onPressLogout()}>
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
          </View>
          <View style={style.maxBottomMargin} />
          <View style={styles.midDivider} />
          <View style={styles.midDivider} />
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
  bottomPlacer: {
    paddingHorizontal: 10,
    width: '100%',
    bottom: 55,
    right: 0,
    left: 0,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  subFlex: {flexDirection: 'row', alignItems: 'center'},
  bottomMargin: {marginBottom: hp(5)},
  maxBottomMargin: {marginBottom: hp(7)},
});
export default Profile;
