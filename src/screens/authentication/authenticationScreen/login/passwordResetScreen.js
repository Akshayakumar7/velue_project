import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet,ScrollView } from 'react-native';
import { hp, wp } from '../../../../commonMethod/screenRatio';
import { color } from '../../../../assets/colors/color';
import { COMPLETE_SOLUTION_TEXT, ENTER_YOUR_REGISTERED_MOBILE_NUMBER_TEXT, FORGOT_PASSWORD_TEXT, HEADING_TEXT, INVALID_EMAIL_ADDRESS_ERROR_TEXT, LOGIN_TEXT, PASSWORD_RESET_TEXT, REGISTER_HERE_TEXT, RESET_TEXT, SENT_OTP_TEXT } from './loginUtility';
import AppButton from '../../../../component/common/appButton';
import { BATH_TUB_IMAGE } from '../../../../imagePath/imagePath';
import {  LOGO, PERSON_ICON } from '../../../../assets/imagepath/imagepath';
import styles from '../../../../general/generalStyleSheet';
import CustomTextInput from '../../../../component/common/customTextInput';
import { KEYBOARD_TYPE } from '../../../../general/generalConst';


const PasswordReset = ({navigation}) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const onChanePhoneNumber = (e) => {
        setPhoneNumber(e)
    }

    const onPressSendOtp = () =>{
        console.log('Clicked>>>>')
        navigation.navigate('Login')  
    }

    return (
        <View>
            <ImageBackground source={BATH_TUB_IMAGE} style={style.bathTubImageStyle}>
                <View style={style.mainView}>
                    <View style={style.doubleContentDivider} />
                    <LOGO style={style.logoStyle} height={hp(22)} width={wp(37)} />
                    <View style={style.smallView} />
                    <Text style={style.headingText}>{HEADING_TEXT}</Text>
                    <View style={style.contentDivider} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={style.whiteContent}>
                            <View style={style.verticalDivider}>
                                <View style={styles.thirpleHeight} />
                                <Text style={[style.passwordResetText, styles.alignText]}>
                                    {PASSWORD_RESET_TEXT}
                                </Text>
                              
                                <View style={styles.doubleContentDivider} />
                                <View style={styles.doubleHeight} />
                              
                                <CustomTextInput
                                    placeholder={'New Password'}
                                    needIconDivider={false}
                                />
                                 <View style={styles.doubleHeight} />
                                 <CustomTextInput
                                    placeholder={'Re-enter Password'}
                                    needIconDivider={false}
                                />
                                <View style={styles.doubleContentDivider} />

                                <AppButton title={RESET_TEXT} onPress={()=>onPressSendOtp()}/>
                                  <View style={styles.contentDivider} />
                                  {/* <View style={styles.doubleContentDivider} /> */}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground >

        </View >
    );
};

const style = StyleSheet.create({
    bathTubImageStyle: {
        height: '100%',
        width: '100%',
        color: color.primaryBlue,
    },
    mainView: {
        backgroundColor: color.primaryBlue,
        flex: 1
    },
    contentDivider: {
        height: hp(7)
    },
    doubleContentDivider: {
        height: hp(7)
    },
    logoStyle: {
        alignSelf: 'center'
    },
    smallView: {
        height: hp(0.5)
    },
    headingText: {
        fontSize: hp(2.4),
        color: color.white,
        textAlign: 'center'
    },

    whiteContent: {
        backgroundColor: color.white,
        borderTopLeftRadius: hp(4),
        borderTopRightRadius: hp(4),
        opacity: 0.8
    },
    itemDivider: {
        height: hp(3)
    },
    verticalDivider: {
        paddingHorizontal: '5%'
    },
    passwordResetText: {
        fontSize: hp(4),
        color: color.darkblue
    },
    mobileNumberText: {
        fontSize: hp(2.5),
        color: color.darkblue
    }
})
export default PasswordReset;
